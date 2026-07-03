export type ProductCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  price: string;
  href: string;
};

export const ProductCard = (props: ProductCardProps) => {
  return (
    <div className="relative bg-zinc-100 box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] outline-[3px] snap-center w-72 p-4 rounded-xl md:w-full md:p-8 md:rounded-2xl">
      <img
        src={props.imageUrl}
        alt={props.imageAlt}
        sizes="(max-width: 1941px) 100vw, 1941px"
        className="aspect-[auto_1941_/_1941] box-border caret-transparent max-w-full outline-[3px] w-[1941px]"
      />
      <div className="items-end box-border caret-transparent flex justify-between outline-[3px]">
        <div className="text-lg font-bold box-border caret-transparent leading-[24.75px] min-h-[auto] min-w-[auto] outline-[3px] mt-3">
          <h4 className="box-border caret-transparent outline-[3px]">
            {props.title}
          </h4>
          <div className="box-border caret-transparent gap-x-1.5 flex opacity-50 outline-[3px] gap-y-1.5">
            <p className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
              {props.price}
            </p>
          </div>
        </div>
        <a
          href={props.href}
          className="relative box-border caret-transparent flex shrink-0 h-12 min-h-[auto] min-w-[auto] outline-[3px] w-12 z-10 border border-stone-300 rounded-lg border-solid"
        >
          <img
            src="https://c.animaapp.com/mr58dsemaDi96Y/assets/icon-11.svg"
            alt="Icon"
            className="box-border caret-transparent outline-[3px] -rotate-45 w-6 m-auto"
          />
        </a>
      </div>
      <a
        href={props.href}
        className="absolute box-border caret-transparent block outline-[3px] rounded-xl inset-0 md:rounded-2xl"
      ></a>
    </div>
  );
};
