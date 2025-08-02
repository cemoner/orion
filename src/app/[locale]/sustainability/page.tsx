import { Leaf, Users, Landmark, Target, Recycle, HeartHandshake, ShieldCheck } from 'lucide-react';
import React from 'react';

// This component requires the `lucide-react` package. You can install it with:
// npm install lucide-react
// or
// yarn add lucide-react

const PillarCard = ({ icon, title, quote, points }: { icon: React.JSX.Element; title: string; quote: string; points: string[] }) => (
  <div className="flex flex-col bg-background dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2">
    <div className="p-6">
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-sustainability-green text-white rounded-lg p-3">
          {icon}
        </div>
        <h3 className="ml-4 text-xl font-bold text-foreground dark:text-white tracking-tight">{title}</h3>
      </div>
      <p className="mt-4 text-sm italic text-gray-500 dark:text-gray-400">{quote}</p>
      <ul className="mt-5 space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <ShieldCheck className="h-5 w-5 text-sustainability-green" />
            </div>
            <p className="ml-3 text-base text-gray-700 dark:text-gray-300">{point}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const GoalItem = ({ icon, text }: { icon: React.JSX.Element; text: string }) => (
    <div className="flex items-start p-4 bg-sustainability-green/10 dark:bg-sustainability-green-dark/20 rounded-lg">
        <div className="flex-shrink-0 text-sustainability-green dark:text-sustainability-green">
            {icon}
        </div>
        <p className="ml-4 text-base font-medium text-sustainability-green-dark dark:text-green-100">{text}</p>
    </div>
);


export default function SustainabilityPage() {
  const pillars = [
    {
      icon: <Leaf className="h-7 w-7" />,
      title: "Çevresel Sürdürülebilirlik",
      quote: "Doğaya saygı, geleceğe yatırımdır.",
      points: [
        "Üretim hatlarımızı yüksek enerji verimliliğine sahip sistemlerle donatıyoruz ve karbon emisyonlarımızı azaltmak için ölçülebilir adımlar atıyoruz.",
        "Kullandığımız hammaddenin önemli bir kısmı geri dönüştürülmüş çelikten oluşur ve atık minimizasyonuna öncelik veririz.",
        "Ürünlerimizin yaşam döngüsü boyunca çevresel etkiyi analiz ediyor ve sürdürülebilirliği ön planda tutuyoruz.",
        "Proses suyu tüketimini azaltan teknolojiler kullanıyor, alternatif su kaynakları geliştiriyoruz."
      ]
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Sosyal Sorumluluk",
      quote: "Güçlü çelik, güçlü toplumlarla mümkündür.",
      points: [
        "Tüm çalışanlarımıza adil, güvenli ve kapsayıcı bir çalışma ortamı sunarız. İş sağlığı ve güvenliği politikamızın merkezindedir.",
        "Eğitim, çevre ve sosyal sorumluluk projeleriyle topluma karşı sorumluluğumuzu yerine getiriyoruz.",
        "Tedarik zincirimizde etik, çevresel ve sosyal standartların uygulanmasını gözetiyoruz.",
        "Farklı bakış açılarını teşvik ediyor, kadınların sanayide daha fazla yer almasını destekliyor ve fırsat eşitliğine bağlı kalıyoruz."
      ]
    },
    {
      icon: <Landmark className="h-7 w-7" />,
      title: "Kurumsal Yönetişim",
      quote: "Şeffaf, hesap verebilir ve dirençli bir yapı.",
      points: [
        "Sürdürülebilirlik, üst yönetim tarafından doğrudan sahiplenilir ve stratejik karar mekanizmalarına entegre edilir.",
        "İklim değişikliğinin risklerini yönetmek amacıyla senaryo analizleri ve adaptasyon planları geliştiriyoruz.",
        "Faaliyetlerimizi uluslararası standartlara uygun olarak belgeliyor, paydaşlarımıza şeffaf bilgiler sunuyoruz.",
        "Yeşil çelik ve düşük karbon teknolojileri gibi alanlarda Ar-Ge yatırımlarımızı artırarak çevre dostu bir üretim yapısı inşa ediyoruz."
      ]
    }
  ];

  const goals = [
      { icon: <Target className="h-6 w-6"/>, text: "2030 yılına kadar üretim başına karbon yoğunluğunu %30 azaltmak." },
      { icon: <Recycle className="h-6 w-6"/>, text: "Üretim süreçlerinde %90 oranında geri dönüştürülmüş hurda kullanmak." },
      { icon: <HeartHandshake className="h-6 w-6"/>, text: "Tüm üretim tesislerinde yenilenebilir enerji oranını %50’ye çıkarmak." },
      { icon: <ShieldCheck className="h-6 w-6"/>, text: "Sürdürülebilirlik raporlamasında uluslararası derecelendirme sistemlerine entegre olmak." },
  ];

  return (
    <main className="bg-background dark:bg-background-dark">
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-28"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/sustainabilityhero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white">
            Geleceği Demirle <span className="text-green-400">Şekillendiriyoruz</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Orion Demir olarak sürdürülebilirliği yalnızca bir çevre politikası değil, işimizin ayrılmaz bir parçası olarak görüyoruz. Gelecek nesillere daha yaşanabilir bir dünya bırakmak için kaynakları verimli kullanan, çevresel etkileri asgariye indiren ve topluma değer katan bir anlayışla hareket ediyoruz.
          </p>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 md:py-24 bg-background dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-sustainability-green dark:text-sustainability-green tracking-wider uppercase">Stratejik Yaklaşımımız</h2>
            <p className="mt-2 text-3xl font-extrabold text-foreground dark:text-white tracking-tight sm:text-4xl">
              Sürdürülebilirliğin Üç Sac Ayağı
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              Kısa vadeli başarıların ötesinde uzun vadeli etki yaratmayı hedefleyen politikamız, üç temel eksende gelişir.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.title} {...pillar} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Goals Section */}
      <section className="py-20 md:py-24 bg-gray-100 dark:bg-background-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-foreground dark:text-white tracking-tight sm:text-4xl">
                    Geleceğe <span className="text-sustainability-green">Kararlı Adımlar</span>
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
                    Sürdürülebilir bir gelecek için belirlediğimiz somut hedeflerimiz.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {goals.map((goal, index) => (
                    <GoalItem key={index} icon={goal.icon} text={goal.text} />
                ))}
            </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="bg-background dark:bg-gray-800/50 py-20 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h3 className="text-2xl font-bold text-foreground dark:text-white tracking-tight">
                  Sadece Bugünü Değil, Geleceği İnşa Ediyoruz
              </h3>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  Orion Demir olarak, kaynakları daha verimli kullanan, doğayla barışık, topluma duyarlı ve etik değerlere dayalı bir sanayi anlayışını her geçen gün daha ileri taşıyoruz.
              </p>
              <p className="mt-8 text-xl font-semibold text-sustainability-green dark:text-sustainability-green">
                  Sürdürülebilir bir gelecek, kararlı adımlarla mümkündür. Biz o adımları bugün atıyoruz.
              </p>
          </div>
      </section>
    </main>
  );
}
