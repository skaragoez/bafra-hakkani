import type { Metadata } from "next";
import Image from "next/image";
import PageSection from "@/components/PageSection";

export const metadata: Metadata = {
  title: "Şeyh Mehmet Adil El-Hakkani | Bafra Hakkânî Dergâhı",
  description: "Nakşibendî Hakkânî Tarikatı'nın 41. Büyük Şeyhi Şeyh Mehmet Adil El-Hakkani Hazretleri'nin hayatı ve manevi rehberliği.",
  keywords: ["Şeyh Mehmet Adil", "Naqshbandi Haqqani", "Mürşid-i Kâmil", "Şeyh Nazım", "Tarikat"],
};

export default function SeyhMehmetAdilPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dernek-blue to-dernek-turquoise text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-dernek-green rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Şeyh Mehmet Adil El-Hakkani El-Rabbani
          </h1>
          <p className="text-xl md:text-2xl text-dernek-cream">
            Nakşibendî Hakkânî Tarikatı 41. Büyük Şeyhi
          </p>
        </div>
      </section>

      {/* Main Biography Section */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Image Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-dernek-cream">
                  <Image
                    src="/images/seyh-mehmed-adil-2.jpg"
                    alt="Şeyh Mehmet Adil El-Hakkani"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 p-6 bg-dernek-turquoise/10 rounded-lg border-2 border-dernek-turquoise/20">
                  <h3 className="font-heading font-semibold text-dernek-blue mb-3">
                    Hızlı Bilgiler
                  </h3>
                  <dl className="space-y-2 text-sm">
                    <div>
                      <dt className="font-semibold text-gray-700">Doğum:</dt>
                      <dd className="text-gray-600">29 Mart 1957, Şam, Suriye</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-700">Konum:</dt>
                      <dd className="text-gray-600">Akbaba, Beykoz, İstanbul</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-700">Rol:</dt>
                      <dd className="text-gray-600">41. Nakşibendî Hakkânî Şeyhi</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-dernek-blue mb-4">
                  Hayatı
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Şeyh Mehmet Adil Hazretleri, 29 Mart 1957 tarihinde Şam'da dünyaya gelmiştir. 
                  Türk-Kıbrıslı kökenli bir ailede doğan Şeyh Mehmet Adil, Sultan-ül Evliya 
                  <strong className="text-dernek-blue"> Şeyh Nazım Adil El-Hakkani</strong> Hazretleri'nin 
                  en büyük oğludur.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Annesi Hacca Amina Sultan, Rusya'nın Orenburg Bakey bölgesinden gelen 
                  köklü bir Tatar ailesine mensuptur.
                </p>
              </div>

              {/* Spiritual Lineage */}
              <div className="bg-dernek-cream p-8 rounded-xl">
                <h2 className="text-2xl font-heading font-bold text-dernek-blue mb-4">
                  Manevi Silsile
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Şeyh Mehmet Adil Hazretleri'nin soyu, baba tarafından <strong className="text-dernek-green">Şeyh Abdülkadir Geylani</strong> 
                  (Kadiriyye tarikatının kurucusu) Hazretleri'ne, büyük annesi tarafından ise 
                  <strong className="text-dernek-green"> Mevlana Celaleddin Rumi</strong> Hazretleri'ne dayanmaktadır.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Bu mübarek soy, Hazretleri'nin manevi mirasının ne denli köklü ve zengin olduğunu göstermektedir.
                </p>
              </div>

              {/* Education and Training */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-dernek-blue mb-4">
                  Eğitim ve Manevi Terbiye
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Gençlik yıllarını Şam'da geçiren Şeyh Mehmet Adil Hazretleri, 
                  <strong className="text-dernek-blue"> Şeyh Abdullah Faizi ed-Dağıstani</strong> ve 
                  babası Şeyh Nazım Hazretleri'nin rehberliğinde yetişmiştir.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  İslami eğitimini, Şam'daki prestijli <strong className="text-dernek-blue">Mahd al-Fath al-Islami Enstitüsü</strong>'nde 
                  tamamlamıştır. Bu süreçte Nakşibendî tarikatının disiplininde hem manevi hem de fiziksel terbiye almıştır.
                </p>
              </div>

              {/* Leadership */}
              <div className="border-l-4 border-dernek-turquoise pl-6 bg-dernek-blue/5 p-6 rounded-r-lg">
                <h2 className="text-3xl font-heading font-bold text-dernek-blue mb-4">
                  Hilafet ve Meşruiyet
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Şeyh Nazım Hazretleri, vefatından önce oğlu Şeyh Mehmet Adil'in kendisinin 
                  halefi olacağını açıkça beyan etmiştir. 7 Mayıs 2014 tarihinde babası 
                  Şeyh Nazım Hazretleri'nin vefatının ardından, Nakşibendî Hakkânî silsilesinin 
                  <strong className="text-dernek-turquoise"> 41. Büyük Şeyhi</strong> olmuştur.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  "Silsile-i Aliyye'nin devamı, Allah'ın izni ve Peygamber Efendimiz'in (s.a.v.) 
                  bereketi ile günümüze kadar ulaşmıştır."
                </p>
              </div>

              {/* Current Activities */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-dernek-blue mb-4">
                  Günümüzdeki Hizmetleri
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Şeyh Mehmet Adil Hazretleri şu anda İstanbul'un Beykoz ilçesine bağlı 
                  <strong className="text-dernek-blue"> Akbaba köyü</strong>'nde ikamet etmektedir.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Dünyanın dört bir yanından gelen müridlerine ve ziyaretçilerine manevi 
                  rehberlik etmekte, sohbetler vermekte ve dua himmetleriyle onları desteklemektedir.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nakşibendî Hakkânî öğretilerini yaymak için uluslararası seyahatler 
                  gerçekleştirmekte ve dünya çapındaki müridleriyle aktif bir şekilde 
                  bağlantı halinde bulunmaktadır.
                </p>
              </div>

              {/* Connection to Bafra */}
              <div className="bg-gradient-to-r from-dernek-turquoise/10 to-dernek-green/10 p-8 rounded-xl border-2 border-dernek-turquoise/20">
                <h2 className="text-3xl font-heading font-bold text-dernek-blue mb-4">
                  Bafra Dergâhı ile Bağlantı
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Bafra Nakşibendî Hakkânî Dergâhı, Şeyh Mehmet Adil Hazretleri'nin mübarek 
                  izni ve himayesi altında kurulmuştur.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dergâhımızın tüm faaliyetleri, mürşidimizin manevi rehberliği ve bereketli 
                  duaları ile gerçekleşmektedir. Hazretleri'ne biat etmiş olan kardeşlerimiz, 
                  O'nun gösterdiği yolda ilerlemeye çalışmaktadır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Quote Section */}
      <PageSection background="cream">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-heading italic text-dernek-blue leading-relaxed">
            "Tarikat yolunda mürşid, yolcunun manevi rehberidir. 
            Mürşidsiz yola çıkmak, pusulasız denize açılmak gibidir."
          </blockquote>
          <p className="mt-6 text-gray-600">
            — Nakşibendî Hakkânî Öğretisi
          </p>
        </div>
      </PageSection>
    </>
  );
}
