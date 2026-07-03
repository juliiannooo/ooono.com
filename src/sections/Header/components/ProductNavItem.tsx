export type ProductNavItemProductImage = {
  src: string;
  alt: string;
  sizes: string;
  className: string;
};

export type ProductNavItemProduct = {
  containerClassName: string;
  images: ProductNavItemProductImage[];
  title: string;
  subtitle?: string;
  badgeText?: string;
  href: string;
};

export type ProductNavItemProps = {
  label: string;
  href: string;
  badgeText?: string;
  hasDropdown?: boolean;
  headline: string;
  headlineAccent: string;
  description: string;
  shopAllHref: string;
  products?: ProductNavItemProduct[];
};

export const ProductNavItem = (props: ProductNavItemProps) => {
  return (
    <li className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
      <div className="absolute box-border caret-transparent h-full outline-[3px] top-0">
        <span className="box-border caret-transparent outline-[3px] invisible">
          {props.label}
        </span>
      </div>
      <a
        href={props.href}
        className="relative box-border caret-transparent outline-[3px]"
      >
        {props.label}
        {props.badgeText ? (
          <span className="text-[10px] box-border caret-transparent inline-block opacity-70 outline-[3px] uppercase transform-none align-top ml-1.5 md:-translate-y-0.5">
            {props.badgeText}
          </span>
        ) : null}
      </a>
      {props.hasDropdown ? (
        <div className="absolute text-black text-base font-normal box-border caret-transparent leading-6 outline-[3px] pointer-events-none w-full left-0 top-full">
          <div className="bg-white box-border caret-transparent grid grid-rows-[0fr] outline-[3px] invisible overflow-clip">
            <div className="box-border caret-transparent min-w-0 outline-[3px] md:min-w-[auto]">
              <div className="box-border caret-transparent max-h-[845px] outline-[3px] overflow-auto px-5 py-12 top-full md:max-h-[837px] md:px-16">
                <div className="relative box-border caret-transparent gap-x-px flex max-w-none outline-[3px] gap-y-px z-[1] mx-auto md:max-w-screen-2xl">
                  <div className="items-start self-center box-border caret-transparent flex basis-[0%] flex-col grow max-w-md min-h-0 min-w-0 outline-[3px] pr-12 py-8 md:min-h-[auto] md:min-w-[auto]">
                    <p className="text-3xl font-bold box-border caret-transparent leading-9 min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                      {props.headline}
                      <br className="box-border caret-transparent outline-[3px]" />
                      <span className="box-border caret-transparent opacity-50 outline-[3px]">
                        {props.headlineAccent}
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
                  {props.products?.map((product) => (
                    <div
                      key={product.href}
                      className={product.containerClassName}
                    >
                      <div className="box-border caret-transparent flex justify-center min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                        {product.images.map((image) => (
                          <img
                            key={image.src}
                            src={image.src}
                            alt={image.alt}
                            sizes={image.sizes}
                            className={image.className}
                          />
                        ))}
                      </div>
                      <div className="box-border caret-transparent gap-x-2 flex min-h-0 min-w-0 outline-[3px] gap-y-2 mt-auto px-1 md:min-h-[auto] md:min-w-[auto]">
                        <div className="self-center box-border caret-transparent basis-[0%] grow min-h-0 min-w-0 outline-[3px] overflow-hidden md:min-h-[auto] md:min-w-[auto]">
                          <p className="text-lg font-medium box-border caret-transparent leading-7 outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            {product.title}
                            {product.badgeText ? (
                              <span className="text-orange-600 text-xs box-border caret-transparent inline-block leading-4 outline-[3px] uppercase text-nowrap transform-none align-top ml-1.5 md:translate-y-[25.0%]">
                                {product.badgeText}
                              </span>
                            ) : null}
                          </p>
                          {product.subtitle ? (
                            <p className="text-stone-500 box-border caret-transparent outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              {product.subtitle}
                            </p>
                          ) : null}
                        </div>
                        <a
                          href={product.href}
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </li>
  );
};
