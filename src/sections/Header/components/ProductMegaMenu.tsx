import { MegaMenuProductCard } from "@/sections/Header/components/MegaMenuProductCard";

export type ProductMegaMenuProps = {
  headingLine: string;
  headingHighlight: string;
  description: string;
  shopAllHref: string;
  cards: Array<{
    rootVariantClass: string;
    imageUrl: string;
    imageAlt: string;
    imageVariantClass: string;
    title: string;
    href: string;
    subtitle?: string;
    badgeText?: string;
    secondaryImageUrl?: string;
    secondaryImageAlt?: string;
    secondaryImageVariantClass?: string;
  }>;
};

export const ProductMegaMenu = (props: ProductMegaMenuProps) => {
  return (
    <div className="absolute text-black text-base font-normal box-border caret-transparent leading-6 outline-[3px] pointer-events-none w-full left-0 top-full">
      <div className="bg-white box-border caret-transparent grid grid-rows-[0fr] outline-[3px] invisible overflow-clip">
        <div className="box-border caret-transparent min-w-0 outline-[3px] md:min-w-[auto]">
          <div className="box-border caret-transparent max-h-[845px] outline-[3px] overflow-auto px-5 py-12 top-full md:max-h-[837px] md:px-16">
            <div className="relative box-border caret-transparent gap-x-px flex max-w-none outline-[3px] gap-y-px z-[1] mx-auto md:max-w-screen-2xl">
              <div className="items-start self-center box-border caret-transparent flex basis-[0%] flex-col grow max-w-md min-h-0 min-w-0 outline-[3px] pr-12 py-8 md:min-h-[auto] md:min-w-[auto]">
                <p className="text-3xl font-bold box-border caret-transparent leading-9 min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                  {props.headingLine}
                  <br className="box-border caret-transparent outline-[3px]" />
                  <span className="box-border caret-transparent opacity-50 outline-[3px]">
                    {props.headingHighlight}
                  </span>
                </p>
                <div className="text-stone-800 box-border caret-transparent max-w-sm min-h-0 min-w-0 outline-[3px] mt-5 md:min-h-[auto] md:min-w-[auto]">
                  <div className="box-border caret-transparent outline-[3px]">
                    <p className="box-border caret-transparent outline-[3px]">
                      {props.description}
                    </p>
                  </div>
                </div>
                <a
                  href={props.shopAllHref}
                  className="relative text-white font-medium bg-black box-border caret-transparent block min-h-0 min-w-0 outline-[3px] text-center border mt-8 pt-2.5 pb-2 px-8 rounded-lg border-solid md:min-h-[auto] md:min-w-[auto] hover:bg-zinc-900 hover:border-zinc-900"
                >
                  Shop all
                </a>
              </div>
              {props.cards.map((card) => (
                <MegaMenuProductCard
                  key={card.href}
                  rootVariantClass={card.rootVariantClass}
                  imageUrl={card.imageUrl}
                  imageAlt={card.imageAlt}
                  imageVariantClass={card.imageVariantClass}
                  secondaryImageUrl={card.secondaryImageUrl}
                  secondaryImageAlt={card.secondaryImageAlt}
                  secondaryImageVariantClass={card.secondaryImageVariantClass}
                  title={card.title}
                  subtitle={card.subtitle}
                  badgeText={card.badgeText}
                  href={card.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
