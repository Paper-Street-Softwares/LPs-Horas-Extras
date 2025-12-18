import MotionDivDownToUp from "../components/animations/MotionDownToUp.jsx";
import CtaButton from "../components/buttons/CtaButton";
import SectionArea from "../components/sectionElements/SectionArea";
import content from "../content/Content";
import { themes } from "../content/Themes";

export default function Cta({ colorMode }) {
  const { backgroundDiv, textColor, minitag, secondaryColor, dots } =
    themes[colorMode] || themes.default;

  return (
    <>
      <div className="relative ">
        <div className="absolute inset-0 z-0">
          <img
            src={content.cta.imagem.background}
            alt="Imagem ilustrativa"
            className="object-cover w-full h-full"
          />
          <div className={`absolute inset-0 ${backgroundDiv}`}></div>
        </div>

        <SectionArea>
          <div className="relative z-10 mx-auto text-center max-w-7xl">
            <MotionDivDownToUp>
              <span
                className={`inline-flex items-center rounded-full text-${secondaryColor} bg-${minitag} font-semibold text-xs px-4 py-1.5 uppercase tracking-wider ${textColor}`}
              >
                <svg
                  className="w-4 h-4 mr-1.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {content.cta.texts.etiqueta}
              </span>
            </MotionDivDownToUp>

            <MotionDivDownToUp>
              <h2
                className={`max-w-3xl mx-auto mt-6 text-3xl text-${textColor} font-mainFont lg:text-4xl font-medium`}
              >
                {content.cta.texts.titulo}
              </h2>
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <h2
                className={`max-w-4xl mx-auto mt-4 text-base text-white font-secondFont`}
              >
                {content.cta.texts.subtitulo}
              </h2>
            </MotionDivDownToUp>

            <div className="max-w-3xl mx-auto mt-10 rounded-2xl deskt">
              <MotionDivDownToUp>
                <div className="inline-block mb-16 text-left desktop1:max-w-[600px]">
                  <ul className="space-y-1 ">
                    {content.cta.pontos
                      .filter((ponto) => ponto.index !== 0)
                      .map((ponto) => (
                        <li
                          key={ponto.index}
                          className="flex items-center justify-center text-center "
                        >
                          <span className={`text-lg text-primary `}>
                            {ponto.texto}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              </MotionDivDownToUp>

              <CtaButton
                icon={content.util.svgWhatsapp}
                link={content.util.ctaWhatsapp}
                label={content.cta.texts.labelBotaoPrincial}
                colorMode="light"
              />
            </div>
          </div>
        </SectionArea>
      </div>
    </>
  );
}
