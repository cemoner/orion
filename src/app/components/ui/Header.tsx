"use client";

import Link from "next/link";
import type { FC } from "react";
import React, { useState } from "react";
import { ThemeSwitcher } from "../specific/ThemeSwitcher";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../specific/LanguageSwitcher";

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Header");

  return (
    <header className="bg-background dark:bg-background-dark shadow-md  w-full md:sticky top-0 z-50 h-20 flex items-center justify-between relative">
      <div className="mx-auto w-full md:px-6 py-6 flex justify-center xs:justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          <Link
            href="/"
            className="flex items-center hover:text-hover-blue text-logo-blue pt-0.6 pl-4.5"
          >
            <svg
              version="1.1"
              fill="currentColor"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="mh-4 w-16 mr-2 sm:mr-0 s:mh-8 sm:w-25 block"
              viewBox="172 385 672 207"
              enableBackground="176 389 672 207"
            >
              <path
                opacity="1.000000"
                stroke="none"
                d=" M720.657959,512.999878 C720.658752,473.688141 720.738831,434.876038 720.562195,396.065125 C720.539856,391.158447 721.710693,389.216064 726.931152,389.527618 C734.234314,389.963531 741.589172,389.814514 748.909668,389.562042 C752.520020,389.437561 754.621521,390.676392 756.493591,393.787842 C775.462646,425.315094 794.578979,456.753754 813.657166,488.215363 C814.338623,489.339142 815.052429,490.443298 816.371033,492.544373 C816.495728,489.740906 816.639221,488.005890 816.640198,486.270813 C816.656372,456.120911 816.741760,425.970520 816.566467,395.821655 C816.539307,391.152802 817.691650,389.214020 822.670166,389.540283 C828.807129,389.942505 834.990356,389.630920 841.153625,389.640472 C848.317139,389.651550 848.340881,389.657471 848.341431,396.665527 C848.344971,441.640503 848.337280,486.615479 848.333130,531.590454 C848.331848,544.927002 848.329834,545.051025 834.880798,544.873535 C828.261414,544.786194 820.789612,547.062195 815.246765,543.665100 C809.928223,540.405457 808.118530,533.075928 804.829407,527.509644 C787.806641,498.701447 770.930664,469.806580 753.995422,440.946625 C753.500122,440.102509 752.914978,439.311066 751.352173,438.578430 C751.352173,440.269867 751.352234,441.961334 751.352173,443.652771 C751.350647,475.301849 751.353638,506.950897 751.343872,538.599976 C751.341858,545.165588 751.320007,545.160034 744.737976,545.160522 C738.408203,545.161011 732.071655,545.001465 725.751038,545.245483 C721.769348,545.399170 720.521729,543.820374 720.604980,539.983704 C720.796448,531.159546 720.661072,522.328308 720.657959,512.999878 z"
              />
              <path
                opacity="1.000000"
                stroke="none"
                d=" M366.000000,576.907654 C520.661865,576.901978 674.823669,576.892334 828.985535,576.910767 C833.306091,576.911255 837.650696,576.512878 841.947266,577.391174 C847.461548,578.518433 850.640015,582.333923 850.301514,587.475220 C849.942017,592.936218 846.218140,596.342712 840.284668,596.348328 C803.119141,596.383362 765.953552,596.371826 728.788025,596.371155 C549.293396,596.367737 369.798828,596.363525 190.304214,596.357178 C180.946182,596.356812 176.848434,593.522522 176.703400,586.986084 C176.557159,580.395142 181.207962,576.918762 190.505463,576.915039 C248.836975,576.891541 307.168488,576.905823 366.000000,576.907654 z"
              />
              <path
                opacity="1.000000"
                stroke="none"
                d=" M202.447876,403.411835 C238.038651,375.302460 289.666199,381.141479 317.415497,416.506378 C345.649048,452.488495 339.354309,502.713623 304.593445,530.940796 C268.066833,560.601929 217.293030,554.922363 189.104858,518.859070 C161.099472,483.029663 166.952026,431.412811 202.447876,403.411835 M294.649780,435.849152 C281.917664,417.889496 259.334473,410.981384 240.041534,416.054871 C218.116440,421.820557 197.832764,446.283295 202.249588,476.838379 C207.072311,510.201263 244.104630,530.600342 274.445984,516.022888 C302.057892,502.756836 314.932037,465.433014 294.649780,435.849152 z"
              />
              <path
                opacity="1.000000"
                stroke="none"
                d=" M556.668823,518.276367 C545.202881,503.613129 539.045410,487.135376 538.958557,469.049255 C538.751770,425.997192 570.769714,393.203735 608.467529,387.552277 C648.470337,381.555267 687.591614,404.980591 700.128967,444.800964 C710.056885,476.333740 697.293701,513.728699 669.695740,533.884521 C635.567688,558.809631 585.090576,554.192993 556.668823,518.276367 M602.433350,418.971405 C578.084534,429.594025 565.770020,452.663483 570.425598,478.933319 C575.089600,505.250824 602.022644,524.574768 628.269897,520.512024 C655.593689,516.282715 676.773743,490.396149 672.801147,461.056458 C668.273621,427.618744 634.756775,407.084381 602.433350,418.971405 z"
              />
              <path
                opacity="1.000000"
                stroke="none"
                d=" M448.340271,480.438416 C444.293457,483.412323 440.253418,485.709534 435.312408,488.044647 C448.310730,506.577423 461.135590,524.862854 474.813873,544.365051 C467.782837,544.365051 461.947052,543.639954 456.359924,544.510559 C443.267517,546.550659 435.127930,541.567383 428.002625,530.317993 C416.173828,511.642700 402.493286,494.139832 389.573914,476.156647 C388.615173,474.822113 387.506042,473.595642 386.180695,471.967407 C384.952515,474.116943 385.377838,476.087494 385.374329,477.926727 C385.334930,498.415771 385.246521,518.905823 385.429504,539.393311 C385.467834,543.686157 384.295532,545.353516 379.802094,545.139893 C373.155670,544.823975 366.462738,544.828918 359.823364,545.241028 C354.960327,545.542847 353.552429,543.855408 353.569763,539.061768 C353.723877,496.418274 353.660339,453.773956 353.661560,411.129913 C353.661713,405.799438 353.764282,400.466431 353.629456,395.139435 C353.551758,392.069275 354.473877,390.597748 357.852600,390.614868 C378.341125,390.718719 398.872711,389.853485 419.308105,390.903442 C441.874146,392.062927 461.762512,407.205597 465.826752,429.263641 C469.512665,449.268158 465.500824,466.998352 448.340271,480.438416 M417.966217,464.570251 C430.779633,460.235260 437.299469,452.314697 436.634033,441.891907 C435.951965,431.209503 427.870972,423.567902 414.668091,421.115479 C406.091858,419.522430 397.438477,420.647980 388.824402,420.387115 C386.277466,420.309967 385.347717,421.771881 385.352753,424.181885 C385.379089,436.812866 385.368866,449.444000 385.345734,462.074982 C385.341919,464.166016 385.882507,465.746185 388.347198,465.691101 C397.951813,465.476532 407.607544,466.701569 417.966217,464.570251 z"
              />
              <path
                opacity="1.000000"
                stroke="none"
                d=" M516.386841,402.063385 C516.377625,447.837738 516.371582,493.122101 516.353088,538.406494 C516.350403,544.947754 516.322815,544.962463 509.686432,544.984619 C503.692993,545.004578 497.699310,545.006897 491.705933,544.982178 C485.139008,544.955078 484.920563,544.743347 484.920258,538.284302 C484.918579,503.322113 484.928833,468.359955 484.934418,433.397766 C484.936401,421.077759 484.921082,408.757721 484.944214,396.437744 C484.956970,389.654236 484.985535,389.648773 491.966919,389.643219 C499.916931,389.636902 507.866974,389.641754 516.385986,389.641754 C516.385986,394.021576 516.385986,397.797516 516.386841,402.063385 z"
              />
              <path
                opacity="1.000000"
                stroke="none"
                d=" M582.727539,474.563171 C581.401123,459.622681 585.152100,446.900116 596.693726,437.490845 C609.013672,427.447021 623.011169,425.617859 637.409058,432.074554 C651.673096,438.471283 659.188477,450.248077 660.278870,465.775635 C661.722656,486.336182 647.506592,503.895630 627.033936,507.167206 C607.107239,510.351501 589.204773,497.881531 583.278137,476.942169 C583.097290,476.303101 582.934265,475.658997 582.727539,474.563171 z"
              />
            </svg>
          </Link>
        </div>

        <nav className="hidden md:flex items-center">
          <Link
            href="/#"
            className="text-text dark:text-text-dark text-base lg:text-sm md:text-xs hover:text-hover-blue py-2 mx-1.5 xl:mx-3 rounded-md transition-all duration-300 ease-in-out hover:scale-125 hover:mx-6"
          >
            {t("nav.home")}
          </Link>
          <Link
            href="/products"
            className="text-text dark:text-text-dark text-base lg:text-sm md:text-xs hover:text-hover-blue py-2 mx-1.5 xl:mx-3 rounded-md transition-all duration-300 ease-in-out hover:scale-125 hover:mx-6"
          >
            {t("nav.products")}
          </Link>
          <Link
            href="/about"
            className="text-text dark:text-text-dark text-base lg:text-sm md:text-xs hover:text-hover-blue py-2 mx-1.5 xl:mx-3 rounded-md transition-all duration-300 ease-in-out hover:scale-125 hover:mx-6"
          >
            {t("nav.about")}
          </Link>
          <Link
            href="/sustainability"
            className="text-text dark:text-text-dark text-base lg:text-sm md:text-xs hover:text-hover-blue py-2 mx-1.5 xl:mx-3 rounded-md transition-all duration-300 ease-in-out hover:scale-125 hover:mx-6"
          >
            {t("nav.sustainability")}
          </Link>
          <Link
            href="/contact"
            className="text-text dark:text-text-dark text-base lg:text-sm md:text-xs hover:text-hover-blue py-2 mx-1.5 xl:mx-3 rounded-md transition-all duration-300 ease-in-out hover:scale-125 hover:mx-6"
          >
            {t("nav.contact")}
          </Link>
          <Link
            href="/offer"
            className="text-text dark:text-text-dark text-base lg:text-sm md:text-xs hover:text-hover-blue py-2 mx-1.5 xl:mx-3 rounded-md transition-all duration-300 ease-in-out hover:scale-125 hover:mx-6"
          >
            {t("nav.offer")}
          </Link>
          <Link
            href="/references"
            className="text-text dark:text-text-dark text-base lg:text-sm md:text-xs hover:text-hover-blue py-2 mx-1.5 xl:mx-3 rounded-md transition-all duration-300 ease-in-out hover:scale-125 hover:mx-6"
          >
            {t("nav.references")}
          </Link>
        </nav>

        <div className="flex items-center gap-x-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <div className="md:hidden">
            <button
              className="hover:bg-hover-gray dark:hover:bg-hover-gray-dark p-1 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg
                  className="h-7 w-6 text-background-dark dark:text-background"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-7 w-6 text-background-dark dark:text-background"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden bg-background dark:bg-background-dark shadow-inner w-full shadow-md absolute top-full left-0 py-1
                  transition-all duration-300 ease-in-out
                  ${
                    isMenuOpen
                      ? "translate-y-0 opacity-100 visible"
                      : "-translate-y-4 opacity-0 invisible"
                  }`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <Link
            href="/"
            className="text-text dark:text-text-dark text-md hover:text-hover-blue w-full text-center shadow-sm"
          >
            {t("nav.home")}
          </Link>
          <Link
            href="/products"
            className="text-text dark:text-text-dark text-md hover:text-hover-blue w-full text-center shadow-sm"
          >
            {t("nav.products")}
          </Link>
          <Link
            href="/about"
            className="text-text dark:text-text-dark text-md hover:text-hover-blue w-full text-center shadow-sm"
          >
            {t("nav.about")}
          </Link>
          <Link
            href="/sustainability"
            className="text-text dark:text-text-dark text-base lg:text-sm md:text-xs hover:text-hover-blue mx-1.5 xl:mx-3 rounded-md transition-all duration-300 ease-in-out hover:scale-125 hover:mx-6"
          >
            {t("nav.sustainability")}
          </Link>
          <Link
            href="/contact"
            className="text-text dark:text-text-dark text-md hover:text-hover-blue w-full text-center shadow-sm"
          >
            {t("nav.contact")}
          </Link>
          <Link
            href="/offer"
            className="text-text dark:text-text-dark text-md hover:text-hover-blue w-full text-center shadow-sm"
          >
            {t("nav.offer")}
          </Link>
          <Link
            href="/references"
            className="text-text dark:text-text-dark text-md hover:text-hover-blue w-full text-center"
          >
            {t("nav.references")}
          </Link>
        </nav>
      </div>
    </header>
  );
};
