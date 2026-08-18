import { Calendar, CheckCircle, Shield, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const TICKER_ITEMS = Array.from({ length: 8 }, () => "1 Alana 1 Bedava");

const FEATURES: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Zap,
    title: "Hızlı Gönderim",
    description:
      "Siparişleriniz en kısa sürede özenle paketlenerek kargoya teslim edilir.",
  },
  {
    icon: Shield,
    title: "Güvenli Ödeme",
    description:
      "256-bit SSL sertifikalı güvenli altyapımız üzerinden gönül rahatlığıyla ödeme yapabilirsiniz.",
  },
  {
    icon: CheckCircle,
    title: "Kolay İade & Değişim",
    description:
      "Memnun kalmadığınız ürünleri kolayca iade edebilir veya değişim talebinde bulunabilirsiniz.",
  },
  {
    icon: Calendar,
    title: "%100 Güvenli Alışveriş",
    description:
      "Tüm ürünlerimiz orijinaldir ve kalite kontrol testlerinden geçerek size ulaşır.",
  },
];

function Ticker() {
  return (
    <div className="overflow-hidden bg-[#121212] py-[10px]">
      <div className="flex w-max marquee-track">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center">
            {TICKER_ITEMS.map((item, i) => (
              <span
                key={`${dup}-${i}`}
                className="mx-6 text-sm whitespace-nowrap text-white"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section>
      <Ticker />
      <div className="bg-white py-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center"
              >
                <Icon className="h-7 w-7 text-[#121212]" />
                <h3 className="mt-3 font-heading text-lg font-semibold text-[#121212]">
                  {feature.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[220px] text-sm leading-relaxed text-[rgba(18,18,18,0.6)]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
