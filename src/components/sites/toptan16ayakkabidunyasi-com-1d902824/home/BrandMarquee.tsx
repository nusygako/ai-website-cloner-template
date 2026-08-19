const BRANDS = ["NIKE", "ADIDAS", "VANS", "NEW BALANCE", "PUMA", "CONVERSE", "REEBOK"];

function BrandRow() {
  return (
    <div className="flex shrink-0 items-center">
      {BRANDS.map((brand, i) => (
        <span
          key={i}
          className="mx-10 font-heading text-2xl font-bold tracking-wide text-[rgba(18,18,18,0.25)] md:text-3xl"
        >
          {brand}
        </span>
      ))}
    </div>
  );
}

export function BrandMarquee() {
  return (
    <section className="overflow-hidden border-y border-[rgba(18,18,18,0.08)] bg-white py-8">
      <div className="marquee-track flex w-max">
        <BrandRow />
        <BrandRow />
      </div>
    </section>
  );
}
