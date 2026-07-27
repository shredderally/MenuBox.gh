import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by businesses across Ghana
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                {t.logo ? (
                  <img src={t.logo} alt={t.business} className="w-12 h-12 object-contain" />
                ) : (
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl font-bold">
                    {t.business[0]}
                  </div>
                )}
                <div>
                  <h3 className="font-semibold">{t.business}</h3>
                  {t.owner && <p className="text-sm text-gray-500">{t.owner}</p>}
                </div>
              </div>
              <p className="text-gray-700 italic">“{t.quote}”</p>
              {t.link && (
                <a href={t.link} target="_blank" rel="noopener" className="text-blue-600 text-sm mt-3 inline-block">
                  Visit site →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
