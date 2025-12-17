import content from "../content/Content";
import MotionDivDownToUp from "../components/animations/MotionDownToUp.jsx";
import CtaButton from "../components/buttons/CtaButton";
import { themes } from "../content/Themes";

export default function Hero({ imagemFocadaBackground, colorMode }) {
  const {
    backgroundDiv,
    titleColor,
    heroTitleFontWeight,
    subtitleColor,
    themeButton,
    themeButtonPrimary,
    heroTitleFocus,
  } = themes[colorMode] || themes.default;

  return (
    <>
      <div className="relative flex overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="background.webp"
            alt="Imagem ilustrativa"
            className="object-cover w-full h-full"
          />
          <div
            className={`absolute inset-0 ${backgroundDiv} lg:${backgroundDiv}`}
          ></div>
        </div>

        <div
          className={`relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-12 pb-24 sm:pt-16 md:pt-28 ${
            imagemFocadaBackground && "lg:pt-10"
          } lg:pb-28 text-center text-fontLighter`}
        >
          <div>
            <div className="flex items-center justify-center w-full my-6 desktop1:my-10">
              <img
                src="/logo.webp"
                alt="Logomarca"
                className="w-[350px] lg:w-[450px] h-auto mb-6"
                width={350}
                height={294}
              />
            </div>
          </div>
          {imagemFocadaBackground && (
            <div className="flex justify-center w-full mb-8">
              <img
                src="/hero.webp"
                fetchpriority="high"
                decoding="sync"
                width={600}
                height={600}
                alt="imagem ilustrativa de um Casal"
                className="object-cover rounded-[12px] h-[400px] w-[450px] md:h-[600px] md:w-[600px] lg:h-[500px] lg:w-[500px] border-[4px] border-primary"
              />
            </div>
          )}
          <div>
            <span
              className={`inline-flex mb-6 items-center capitalize rounded-md font-secondFont text-primary px-4 py-1.5 text-[10px] phone2:text-xs phone3:text-sm font-medium  ring-1 ring-inset ring-primary`}
            >
              {content.hero.texts.etiqueta}
            </span>
          </div>
          <div className="lg:max-w-[1000px]">
            <h1
              className={`text-4xl ${heroTitleFontWeight} leading-12  sm:text-5xl lg:text-6xl font-mainFont ${titleColor}`}
            >
              {content.hero.texts.titulo.antes}{" "}
              <span className={`${heroTitleFocus}`}>
                {content.hero.texts.titulo.palavraFocada}
              </span>{" "}
              {content.hero.texts.titulo.depois}
            </h1>
          </div>
          <div>
            <p
              className={`max-w-3xl mx-auto font-bold text-primary mt-6 mb-4 text-lg sm:text-xl text-fond/85 font-secondFont ${subtitleColor} text-[14px] phone2:text-[16px] phone3:text-[18px] lg:text-[20px]`}
            >
              ⚠️ Você tem indenização a receber se:
            </p>
            <ul className="gap-1 flex flex-col text-[12px] phone2:text-[14px] phone3:text-[16px] lg:text-[18px]">
              <li>✓ Você trabalhava em mais de uma função</li>
              <li>✓ Não recebia todas as horas extras</li>
              <li>✓ Trabalhou período sem carteira assinada</li>
              <li>✓ Entre outros direitos violados</li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center mt-10 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <CtaButton
              icon={content.util.svgWhatsapp}
              link={content.util.ctaWhatsapp}
              label={content.hero.texts.labelBotaoPrincial}
              colorMode={`${themeButtonPrimary}`}
            />
            {/* <CtaButton
              icon={content.util.svgCalendario}
              link={content.util.ctaWhatsapp}
              label={content.hero.texts.labelBotaoSecundario}
              colorMode={`${themeButton}`}
            /> */}
          </div>
          <div className="absolute -translate-x-1/2 bottom-6 left-1/2">
            <MotionDivDownToUp>
              <svg
                className={`w-8 h-8 ${titleColor} animate-bounce`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </MotionDivDownToUp>
          </div>
        </div>
      </div>
    </>
  );
}
