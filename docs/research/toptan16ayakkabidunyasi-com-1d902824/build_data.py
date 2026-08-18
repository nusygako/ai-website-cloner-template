import json, os, re, urllib.request, urllib.parse, sys, time
from concurrent.futures import ThreadPoolExecutor

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

RESEARCH_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.abspath(os.path.join(RESEARCH_DIR, "..", "..", ".."))
SITE_KEY = "toptan16ayakkabidunyasi-com-1d902824"
PUBLIC_DIR = os.path.join(REPO_ROOT, "public", "sites", SITE_KEY, "shared")
DATA_DIR = os.path.join(REPO_ROOT, "src", "lib", "sites", SITE_KEY)
IMG_PRODUCTS_DIR = os.path.join(PUBLIC_DIR, "products")
IMG_COLLECTIONS_DIR = os.path.join(PUBLIC_DIR, "collections")

os.makedirs(IMG_PRODUCTS_DIR, exist_ok=True)
os.makedirs(IMG_COLLECTIONS_DIR, exist_ok=True)
os.makedirs(DATA_DIR, exist_ok=True)

with open(os.path.join(RESEARCH_DIR, "products.raw.json"), encoding="utf-8") as f:
    products_raw = json.load(f)["products"]
with open(os.path.join(RESEARCH_DIR, "collections.raw.json"), encoding="utf-8") as f:
    collections_raw = json.load(f)["collections"]
with open(os.path.join(RESEARCH_DIR, "collection_product_map.json"), encoding="utf-8") as f:
    collection_map = json.load(f)

download_jobs = []  # (url, local_path)

def ext_from_url(url):
    return ".webp"

def local_image_path(url, subdir, name):
    ext = ext_from_url(url)
    fname = f"{name}{ext}"
    local_abs = os.path.join(PUBLIC_DIR, subdir, fname)
    public_url = f"/sites/{SITE_KEY}/shared/{subdir}/{fname}"
    return local_abs, public_url

def resized(url, width):
    sep = "&" if "?" in url else "?"
    return f"{url}{sep}width={width}&format=webp"

products_out = []
for p in products_raw:
    handle = p["handle"]
    images_out = []
    for i, img in enumerate(p.get("images", [])):
        src = img["src"]
        local_abs, public_url = local_image_path(src, "products", f"{handle}-{i+1}")
        download_jobs.append((resized(src, 600), local_abs))
        images_out.append({"src": public_url, "alt": img.get("alt") or p["title"], "width": img.get("width"), "height": img.get("height")})

    variants_out = []
    for v in p.get("variants", []):
        variants_out.append({
            "id": v["id"], "title": v["title"], "size": v.get("option1"),
            "price": v["price"], "compareAtPrice": v.get("compare_at_price"),
            "available": v.get("available", True),
        })

    options_out = [{"name": o["name"], "values": o["values"]} for o in p.get("options", [])]

    prices = [float(v["price"]) for v in p.get("variants", []) if v.get("price")]
    compare_prices = [float(v["compare_at_price"]) for v in p.get("variants", []) if v.get("compare_at_price")]

    products_out.append({
        "id": p["id"],
        "handle": handle,
        "title": p["title"],
        "description": p.get("body_html", ""),
        "vendor": p.get("vendor"),
        "price": min(prices) if prices else None,
        "compareAtPrice": max(compare_prices) if compare_prices else None,
        "images": images_out,
        "options": options_out,
        "variants": variants_out,
        "tags": p.get("tags", []),
    })

collections_out = []
for c in collections_raw:
    handle = c["handle"]
    img_out = None
    if c.get("image") and c["image"].get("src"):
        src = c["image"]["src"]
        local_abs, public_url = local_image_path(src, "collections", handle)
        download_jobs.append((resized(src, 500), local_abs))
        img_out = public_url
    collections_out.append({
        "id": c["id"], "handle": handle, "title": c["title"],
        "description": c.get("description") or "",
        "image": img_out,
        "productsCount": c.get("products_count", 0),
        "productHandles": collection_map.get(handle, []),
    })

GLOBAL_DIR = os.path.join(PUBLIC_DIR, "global")
os.makedirs(GLOBAL_DIR, exist_ok=True)
global_assets_out = {}
global_assets_path = os.path.join(RESEARCH_DIR, "global_assets.json")
if os.path.exists(global_assets_path):
    with open(global_assets_path, encoding="utf-8") as f:
        ga = json.load(f)
    local_abs, public_url = local_image_path(ga["logo"], "global", "logo")
    download_jobs.append((resized(ga["logo"], 400), local_abs))
    global_assets_out["logo"] = public_url
    hero_urls = []
    for i, url in enumerate(ga.get("hero", [])):
        local_abs, public_url = local_image_path(url, "global", f"hero-{i+1}")
        download_jobs.append((resized(url, 1400), local_abs))
        hero_urls.append(public_url)
    global_assets_out["hero"] = hero_urls
    cmp_urls = []
    for i, url in enumerate(ga.get("comparison", [])):
        local_abs, public_url = local_image_path(url, "global", f"comparison-{i+1}")
        download_jobs.append((resized(url, 900), local_abs))
        cmp_urls.append(public_url)
    global_assets_out["comparison"] = cmp_urls

with open(os.path.join(DATA_DIR, "global-assets.json"), "w", encoding="utf-8") as f:
    json.dump(global_assets_out, f, ensure_ascii=False, indent=2)

with open(os.path.join(DATA_DIR, "products.json"), "w", encoding="utf-8") as f:
    json.dump(products_out, f, ensure_ascii=False, indent=2)
with open(os.path.join(DATA_DIR, "collections.json"), "w", encoding="utf-8") as f:
    json.dump(collections_out, f, ensure_ascii=False, indent=2)

print(f"products: {len(products_out)}  collections: {len(collections_out)}  image jobs: {len(download_jobs)}")

def download(job):
    url, local_abs = job
    if os.path.exists(local_abs):
        return "skip"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=20) as resp, open(local_abs, "wb") as out:
            out.write(resp.read())
        return "ok"
    except Exception as e:
        return f"fail:{url}:{e}"

os.makedirs(IMG_PRODUCTS_DIR, exist_ok=True)
os.makedirs(IMG_COLLECTIONS_DIR, exist_ok=True)

t0 = time.time()
results = {"ok": 0, "skip": 0, "fail": 0}
fails = []
with ThreadPoolExecutor(max_workers=12) as ex:
    for res in ex.map(download, download_jobs):
        if res == "ok":
            results["ok"] += 1
        elif res == "skip":
            results["skip"] += 1
        else:
            results["fail"] += 1
            fails.append(res)

print(f"downloaded ok={results['ok']} skip={results['skip']} fail={results['fail']} in {time.time()-t0:.1f}s")
if fails:
    print("FAILURES:")
    for fmsg in fails[:20]:
        print(" ", fmsg)
