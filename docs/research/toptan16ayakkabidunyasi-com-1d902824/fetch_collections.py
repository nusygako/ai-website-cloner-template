import json, urllib.request, urllib.parse, time, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

with open("collections.raw.json", encoding="utf-8") as f:
    collections = json.load(f)["collections"]

base = "https://toptan16ayakkabidunyasi.com"
mapping = {}
for c in collections:
    handle = c["handle"]
    if c.get("products_count", 0) == 0:
        mapping[handle] = []
        continue
    url = f"{base}/collections/{urllib.parse.quote(handle)}/products.json?limit=250"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req) as resp:
        data = json.load(resp)
    handles = [p["handle"] for p in data["products"]]
    mapping[handle] = handles
    print(handle, len(handles))
    time.sleep(0.2)

with open("collection_product_map.json", "w", encoding="utf-8") as f:
    json.dump(mapping, f, ensure_ascii=False, indent=2)
