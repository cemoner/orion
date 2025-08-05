"use client"; // This is a client component to handle state

import React, { useState } from "react";
import {
  Building2,
  MapPin,
  PaintRoller,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTranslations } from "next-intl";

// Data arrays
const businessPartners = [
    "OYAK",
  "Temsa A.Ş.",
  "Tüsaş",
  "SASA Polyester Sanayi A.Ş.",
  "Borusan Oto Servis ve Tic. A.Ş",
  "Koç Holding A.Ş.",
  "Rönesans Holding A.Ş.",
  "Tekfen Holding A.Ş.",
  "My Yeşil İnşaat",
  "Tekin İnşaat",
  "Kalyon Holding",
  "Sevenler Yapı",
  "Tosyalı Holding A.Ş.",
  "Ekinciler Holding",
  "Gratis Kozmetik ve Tekstil Ticaret A.Ş.",
  "Hacı Ömer Sabancı Gemicilik A.Ş.",
  "Ebiri İnşaat",
  "Ağıt Hafriyat İnşaat",
  "Maksell İnşaat",
  "Demiryürek Yapı İnşaat",
  "Safir İnşaat",
  "Neva Grup İnşaat",
  "BJK Lojistik Hizmetleri A.Ş.",
  "Esma Grup",
  "By Hilton",
  "Ark Yapı İnşaat",
  "Dem İnşaat Yapı",
  "Has İnşaat",
  "Net Holding",
  "Can İnşaat",
  "Yıldırım Akdeniz Yapı",
  "Hakan Aslan Yapı İnşaat",
  "Ali Kaplan Yapı İnşaat",
  "Mbm Makina",
  "Yıldızlar A.Ş.",
  "Tüsan AŞ",
  "Mor Metal A.Ş.",
  "Güney Hasır Çelik",
  "Murat İnşaat Yapı",
  "Demirsan Demir Çelik",
  "Erdemler A.Ş",
  "Yapışan Yapı İnşaat",
  "Taşkıran Yapı İnşaat",
  "Hamidi Grup",
  "Akel İnşaat",
  "Şahbazoğlu Yapı",
  "Yüksel Nazlı – Nazlı İnşaat",
  "Özkul İnşaat",
  "Kolin İnşaat Turizm Sanayi ve Ticaret A.Ş.",
  "Akkuyu Nükleer A.Ş.",
  "Dimax A.Ş.",
  "Ercan Kumaş Tekstil Pazarlama İth. İhr. Tic. Ltd. Şti.",
  "Beta Enerji A.Ş.",
  "Astor Enerji A.Ş.",
  "Kıvanç Tekstil Sanayi ve Ticaret A.Ş.",
  "Bilici Holding A.Ş.",
  "Metropol A.Ş.",
  "Erdemoğlu Holding A.Ş.",
  "Sanko Holding A.Ş.",
  "Diler Holding A.Ş.",
  "Ark İnşaat Sanayi ve Ticaret A.Ş.",
  "Cengiz Holding A.Ş.",
  "Barer Holding A.Ş.",
  "BMC Otomotiv Sanayi ve Ticaret A.Ş.",
  "RAMS Yapı A.Ş.",
  "Hema Endüstri A.Ş.",
  "Hattat Holding A.Ş.",
  "Agel İnşaat A.Ş.",
  "YP İnşaat A.Ş.",
  "Estar İnşaat A.Ş.",
  "Yeşilyurt Demir Çelik Sanayi A.Ş.",
  "Sunar Mısır İşleme Sanayi ve Ticaret A.Ş.",
  "Omnia Nişasta Katkı Maddeleri Sanayi ve Ticaret A.Ş.",
  "Tat Nişasta Katkı Maddeleri Sanayi ve Ticaret A.Ş.",
  "Teskim Tekstil Sanayi ve Ticaret A.Ş.",
  "Kalkavan Holding A.Ş.",
 "Palmali Holding",
  "Demsa Shipping",
  "Demsa Holding",
  "Arkas Holding",
  "Net Holding",
  "Yapi-Yapi Insaat A.Ş.",
  "Zes Dijital Ticaret A.Ş.",
  "Tekbas Insaat Ve Tarim Ticaret San. Ltd. Şti.",
  "Pilon Yapi",
  "Dag Yapi A.Ş.",
  "Polyar Celik Yapi A.Ş.",
  "Mgg Ticaret A.Ş.",
  "Mercedes Benz Otomotiv Ticaret Ve Hizmetler A.Ş.",
  "Kyb Kimyasal Tekstil Ve Ticaret A.Ş.",
  "Kvk Teknoloji Ürünleri Ve Ticaret A.Ş.",
  "Kendirliler Haddecilik San. Ve Tic. A.Ş.",
  "Hasan Kavi Petrol Ürünleri Turizm Ticaret Ve Sanayi A.Ş.",
  "Habaş Sınai Ve Tıbbi Gazlar A.Ş.",
  "Arsan Holding",
  "Guney Celik A.Ş.",
  "Gunes Motorlu Araclar A.Ş.",
  "Gri Internet Teknolojileri A.Ş.",
  "Hcv Muhendislik A.Ş.",
  "Alves Kablo Sanayi Ve Ticaret Anonim Şirketi",
  "Diiport Insaat A.Ş.",
  "Ceka Taahhut Yapi Anonim Şirketi",
  "Cmd Ticaret Anonim Şirketi",
  "Bim Birlesik Magazalar A.Ş.",
  "Aykan Motorlu Servis A.Ş",
  "Adana Metro İnşaat Sanayi ve Ticaret A.Ş",
  "Aksa Çukurova Doğalgaz Kazancılar Holding"
];

const projectReferences = [
  {
    name: "Tekel Baş Md. Binası",
    year: "1999",
    product: "İzosil",
    location: "Bursa",
  },
  {
    name: "Adliye Lojmanları – Çekirge PTT bitişiği",
    year: "2000",
    product: "Flex-Coat",
    location: "Bursa",
  },
  {
    name: "Nilüfer Hatun Cad. Kuğu Sitesi-51 Ataevler",
    year: "2000",
    product: "Izosi!",
    location: "Bursa",
  },
  {
    name: "Gökşin Sitesi",
    year: "1999",
    product: "Flex-Coat",
    location: "Beşevler- Bursa",
  },
  {
    name: "DSİ Lojmanları – Akroteks",
    year: "2004",
    product: "Sctbaşı",
    location: "Bursa",
  },
  {
    name: "Askeriye Lojmanları",
    year: "2000",
    product: "İzonit, Yağlı Boya",
    location: "Hüriyet -Bursa",
  },
  {
    name: "Sedir Sitesi",
    year: "2004",
    product: "İzosil-Enamel-Trf. Yol Çizgi Boyası",
    location: "Ataevler – Bursa",
  },
  {
    name: "İbrahim Uyar İlköğretim Okulu",
    year: "2004",
    product: "İzosil",
    location: "Ataevler – Bursa",
  },
  {
    name: "Yunus Emre Spor Kopleksi",
    year: "2003",
    product: "Akroteks,Saten,Plastik",
    location: "Bursa",
  },
  {
    name: "Yıldırım Belediyesi Trafik Yol Çizgi Boyası",
    year: null,
    product: "Trafik Yol Çizgi Boyası",
    location: "Bursa",
  },
  {
    name: "Confetti Tekstil Fabrikası",
    year: "2003",
    product: "İzosil",
    location: "Organize Sanayi-Bursa",
  },
  {
    name: "Elvinteks Tekstil Fabrikası",
    year: "2003",
    product: "Akroteks",
    location: "Çalı Yolu – Bursa",
  },
  {
    name: "Kapsan Kaplama Sanayi",
    year: "2003",
    product: "Akroteks",
    location: "Organize Sanayi -Bursa",
  },
  {
    name: "Otosansit Sitesi -Büyük Oto Parçacılar Sitesi",
    year: "2003-2004",
    product: "Akroteks,Plastik",
    location: "Bursa",
  },
  {
    name: "Işıklar Askeri Lisesi",
    year: "2003",
    product: "İzokot",
    location: "Bursa",
  },
  {
    name: "Milli Piyango Anadolu Lisesi",
    year: "2005",
    product: "Akroteks- Plastik",
    location: "Bursa",
  },
  {
    name: "Emniyet Müdürlüğü Binası",
    year: "1999",
    product: "Flex-Coat",
    location: "Mudanya – Bursa",
  },
  {
    name: "Çağlayaner Yapı Koop. 600 daire (Aslantaş)",
    year: "1999-2000",
    product: "Serkot",
    location: "Mudanya",
  },
  {
    name: "Şalıbender Baysan Siteleri",
    year: "2000",
    product: "Flex-Coat",
    location: "Güzelyalı",
  },
  {
    name: "Baytaş Siteleri",
    year: "1999",
    product: "Flex-Coat",
    location: "Gemlik girişi",
  },
  {
    name: "Kemal Pireci Lisesi",
    year: "1999",
    product: "İzosil",
    location: "Bandırma",
  },
  {
    name: "Kırcı Un Fabrikası",
    year: "1999",
    product: "İzosil",
    location: "Bandırma",
  },
  {
    name: "Debleke Un Fabrikası",
    year: "2000",
    product: "Flex-Cöat",
    location: "Bandırma",
  },
  {
    name: "Beyköy Un Fabrikası",
    year: "1999",
    product: "Flex-Coat",
    location: "Bandırma",
  },
  {
    name: "6.Ana Jet Üs Kom.",
    year: "1998-2003",
    product: "Flex-Coat,Akroteks,Plastik,Yağlı Boya,İzoteks",
    location: "Bandırma",
  },
  {
    name: "Etibaıık Tesisleri",
    year: "1999",
    product: "Flex-Coat",
    location: "Bandırma",
  },
  {
    name: "Sümer Yapı Koop.",
    year: "1999",
    product: "Flcx-Coat",
    location: "Bandırma",
  },
  {
    name: "Serpin Manyas Kaplıcaları",
    year: "2005",
    product: "İzosil",
    location: "Manyas-Baııdırma",
  },
  {
    name: "9. Ana Jet Üssü Lojmanları",
    year: "2000",
    product: "Flex-Coat",
    location: "Balıkesir",
  },
  {
    name: "Tedaş Lojmanları",
    year: "1999-2000",
    product: "İzosil, Flex-Coat",
    location: "Balıkesir",
  },
  {
    name: "Mühimmat Depo Kom. Lojmanları",
    year: "2000",
    product: "Flex-Coat,Akroteks",
    location: "Susurluk",
  },
  {
    name: "Akbaıık Dinlenme Tesisleri",
    year: "2000",
    product: "Akroteks,Plastik",
    location: "Erdek",
  },
  {
    name: "Donanma Komutanlığı",
    year: "1998-2000",
    product: "Flex-Coat",
    location: "Gölcük",
  },
  {
    name: "Donanma Komutanlığı Yahya Kaptan Loj.",
    year: "1999-2000",
    product: "Flex-Coat",
    location: "İzmit",
  },
  {
    name: "Bil-Koop Sitesi",
    year: "2000",
    product: "Akroteks",
    location: "Bilecik",
  },
  {
    name: "Jandarma Er Eğitim Tugayı",
    year: "2000",
    product: "Akroteks",
    location: "Bilecik",
  },
  {
    name: "Eronur Hotel",
    year: "2000",
    product: "Flex-Coat",
    location: "Bilecik",
  },
  {
    name: "Onurlar Apartmanı",
    year: "2000",
    product: "Flex-Coat",
    location: "Bilecik",
  },
  {
    name: "Önçay İnşaat",
    year: "2000",
    product: "Akroteks",
    location: "Eskişehir",
  },
  {
    name: "Haser İnşaat",
    year: "2000",
    product: "İzonit",
    location: "Eskişehir",
  },
  {
    name: "Osmangazi Üniversitesi Ek Binası",
    year: "1998–1999",
    product: "Betonkot",
    location: "Eskişehir",
  },
  {
    name: "Şirinkent Gül Ağaçları Sitesi",
    year: "2000",
    product: "Flex-Coat",
    location: "Kütahya",
  },
  {
    name: "Poyraz Konut Yapı Koop.",
    year: "1999",
    product: "Akroteks",
    location: "Kütahya",
  },
];

const ReferencesPage = () => {
  // State for Project Pagination
  const [currentProjectPage, setCurrentProjectPage] = useState(1);
  const projectsPerPage = 9;

  // State for Business Partner Pagination
  const [currentPartnerPage, setCurrentPartnerPage] = useState(1);
  const partnersPerPage = 15; // 3 rows on large screens (3 * 5 = 15)

  // Logic for Project Pagination
  const indexOfLastProject = currentProjectPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectReferences.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalProjectPages = Math.ceil(
    projectReferences.length / projectsPerPage
  );

  const handleProjectPageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalProjectPages) return;
    setCurrentProjectPage(pageNumber);
  };

  // Logic for Business Partner Pagination
  const indexOfLastPartner = currentPartnerPage * partnersPerPage;
  const indexOfFirstPartner = indexOfLastPartner - partnersPerPage;
  const currentPartners = businessPartners.slice(
    indexOfFirstPartner,
    indexOfLastPartner
  );
  const totalPartnerPages = Math.ceil(
    businessPartners.length / partnersPerPage
  );

  const handlePartnerPageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPartnerPages) return;
    setCurrentPartnerPage(pageNumber);
  };

  const t = useTranslations("References");

  return (
    <div className="bg-light-background-blue dark:bg-background-dark text-text dark:text-text-dark min-h-screen">
      <main className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-logo-blue to-hover-blue">
              {t("references")}
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text/80 dark:text-text-dark/80 sm:text-xl">
            {t("intro")}
          </p>
        </div>

       <section>
  <h2 className="text-4xl font-bold mb-12 text-center">
    {t("businessPartners")}
  </h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:grid-rows-3 gap-6 md:gap-8 md:h-[480px]">
    {currentPartners.map((partner, index) => (
      <div
        key={index}
        // MODIFICATION: Removed invalid class `max-h-[480px]-`
        className="bg-background/60 dark:bg-background-dark-lighter/60 backdrop-blur-lg border border-gray-300 dark:border-gray-900 rounded-xl shadow-lg
                   p-4 flex flex-col items-center justify-center text-center 
                   transform hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"
      >
        <Building2
          className="w-10 h-10 text-logo-blue dark:text-hover-blue mb-3"
          strokeWidth={1.5}
        />
        <h3 className="text-base font-semibold">{partner}</h3>
      </div>
    ))}
  </div>

  {/* Pagination Controls for Business Partners */}
  <div className="mt-12 flex justify-center items-center space-x-2">
    <button
      onClick={() => handlePartnerPageChange(currentPartnerPage - 1)}
      disabled={currentPartnerPage === 1}
      className="p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors
                 hover:bg-gray-100 dark:hover:bg-background-dark-lighter"
    >
      <ChevronLeft className="h-5 w-5" />
    </button>
    {Array.from({ length: totalPartnerPages }, (_, i) => i + 1).map(
      (page) => (
        <button
          key={page}
          onClick={() => handlePartnerPageChange(page)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                    ${
                      currentPartnerPage === page
                        ? "bg-logo-blue text-white shadow-md"
                        : "hover:bg-gray-100 dark:hover:bg-background-dark-lighter"
                    }`}
        >
          {page}
        </button>
      )
    )}
    <button
      onClick={() => handlePartnerPageChange(currentPartnerPage + 1)}
      disabled={currentPartnerPage === totalPartnerPages}
      className="p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors
                 hover:bg-gray-100 dark:hover:bg-background-dark-lighter"
    >
      <ChevronRight className="h-5 w-5" />
    </button>
  </div>
</section>

        {/* Project References Section with Pagination */}
        <section className="mt-24">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {t("projectReferences")}
          </h2>
          {/* Added a min-height to prevent layout shifts when changing pages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[750px] md:min-h-[550px]">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-background-dark-lighter rounded-xl shadow-lg hover:shadow-2xl overflow-hidden
                           transform hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col border border-gray-300 dark:border-gray-900"
              >
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-4">{project.name}</h3>
                  <div className="space-y-3 text-text/90 dark:text-text-dark/80">
                    <div className="flex items-center">
                      <CalendarDays className="w-5 h-5 mr-3 text-logo-blue dark:text-hover-blue flex-shrink-0" />
                      <span className="text-sm font-medium">
                        {project.year || "-"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3 text-logo-blue dark:text-hover-blue flex-shrink-0" />
                      <span className="text-sm font-medium">
                        {project.location}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <PaintRoller className="w-5 h-5 mr-3 text-logo-blue dark:text-hover-blue flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">
                        {project.product || "-"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-background-dark border-t border-gray-300 dark:border-gray-900 px-6 py-3">
                  <span className="text-xs font-semibold text-logo-blue dark:text-hover-blue uppercase tracking-wider">
                    {t("finishedProjects")}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls for Projects */}
          <div className="mt-16 flex justify-center items-center space-x-2">
            <button
              onClick={() => handleProjectPageChange(currentProjectPage - 1)}
              disabled={currentProjectPage === 1}
              className="p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors
                         hover:bg-gray-100 dark:hover:bg-background-dark-lighter"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            {Array.from({ length: totalProjectPages }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => handleProjectPageChange(page)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                           ${
                             currentProjectPage === page
                               ? "bg-logo-blue text-white shadow-md"
                               : "hover:bg-gray-100 dark:hover:bg-background-dark-lighter"
                           }`}
                >
                  {page}
                </button>
              )
            )}
            <button
              onClick={() => handleProjectPageChange(currentProjectPage + 1)}
              disabled={currentProjectPage === totalProjectPages}
              className="p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors
                         hover:bg-gray-100 dark:hover:bg-background-dark-lighter"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ReferencesPage;
