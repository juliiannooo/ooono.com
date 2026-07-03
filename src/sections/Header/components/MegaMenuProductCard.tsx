export type MegaMenuProductCardProps = {
  rootVariantClass: string;
  imageUrl: string;
  imageAlt: string;
  imageVariantClass: string;
  secondaryImageUrl?: string;
  secondaryImageAlt?: string;
  secondaryImageVariantClass?: string;
  title: string;
  subtitle?: string;
  badgeText?: string;
  href: string;
};

export const MegaMenuProductCard = (props: MegaMenuProductCardProps) => {
  return (
    <div
      className={`relative bg-black/10 box-border caret-transparent flex basis-[0%] flex-col grow min-h-16 min-w-0 outline-[3px] overflow-hidden pt-8 pb-6 px-8 md:min-w-[auto] ${props.rootVariantClass}`}
    >
      <div className="box-border caret-transparent flex justify-center min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          sizes="(max-width: 1941px) 120vw, 1941px"
          className={`relative aspect-[auto_1941_/_1941] box-border caret-transparent [mask-mode:alpha] [mask-repeat:no-repeat] [mask-size:contain] max-w-[352px] min-h-0 min-w-0 outline-[3px] origin-[50%_100%] w-[90%] [mask-position:50%] -mb-3 mx-auto md:min-h-[auto] md:min-w-[auto] ${props.imageVariantClass}`}
        />
        {props.secondaryImageUrl &&
        props.secondaryImageAlt &&
        props.secondaryImageVariantClass ? (
          <img
            src={props.secondaryImageUrl}
            alt={props.secondaryImageAlt}
            sizes="(max-width: 1941px) 120vw, 1941px"
            className={`relative aspect-[auto_1941_/_1941] box-border caret-transparent ml-[-60%] [mask-mode:alpha] [mask-repeat:no-repeat] [mask-size:contain] max-w-[352px] min-h-0 min-w-0 outline-[3px] origin-[50%_100%] w-[90%] [mask-position:50%] mr-auto -mb-3 md:min-h-[auto] md:min-w-[auto] ${props.secondaryImageVariantClass}`}
          />
        ) : null}
      </div>
      <div className="box-border caret-transparent gap-x-2 flex min-h-0 min-w-0 outline-[3px] gap-y-2 mt-auto px-1 md:min-h-[auto] md:min-w-[auto]">
        <div className="self-center box-border caret-transparent basis-[0%] grow min-h-0 min-w-0 outline-[3px] overflow-hidden md:min-h-[auto] md:min-w-[auto]">
          <p className="text-lg font-medium box-border caret-transparent leading-7 outline-[3px] text-ellipsis text-nowrap overflow-hidden">
            {props.title}
            {props.badgeText ? (
              <span className="text-orange-600 text-xs box-border caret-transparent inline-block leading-4 outline-[3px] uppercase text-nowrap transform-none align-top ml-1.5 md:translate-y-[25.0%]">
                {props.badgeText}
              </span>
            ) : null}
          </p>
          {props.subtitle ? (
            <p className="text-stone-500 box-border caret-transparent outline-[3px] text-ellipsis text-nowrap overflow-hidden">
              {props.subtitle}
            </p>
          ) : null}
        </div>
        <a
          href={props.href}
          className="relative box-border caret-transparent flex shrink-0 h-12 min-h-0 min-w-0 outline-[3px] w-12 z-[1] border rounded-lg border-solid border-black/10 md:min-h-[auto] md:min-w-[auto]"
        >
          <img
            src="https://c.animaapp.com/mr58dsemaDi96Y/assets/icon-2.svg"
            alt="Icon"
            className="box-border caret-transparent outline-[3px] transform-none w-6 m-auto md:-rotate-45"
          />
        </a>
      </div>
    </div>
  );
};
