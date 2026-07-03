export const FooterLocaleSelector = () => {
  return (
    <div className="box-border caret-transparent flex flex-col col-end-auto col-start-auto min-h-[auto] min-w-[auto] outline-[3px] text-center w-full md:col-end-[span_4] md:col-start-3">
      <div className="relative items-center self-auto bg-white/10 box-border caret-transparent gap-x-3 flex max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 overflow-hidden p-1 rounded-lg md:self-start">
        <img
          src="https://c.animaapp.com/mr58dsemaDi96Y/assets/34.svg"
          alt="Germany"
          className="aspect-[auto_64_/_48] box-border caret-transparent h-5 max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-5 ml-2 rounded-full"
        />
        <p className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
          Germany, EUR
        </p>
        <div className="box-border caret-transparent hidden basis-[0%] grow min-h-0 min-w-0 outline-[3px] w-16 md:block md:min-h-[auto] md:min-w-[auto]"></div>
        <button
          type="button"
          className="relative bg-white caret-transparent flex shrink-0 h-9 min-h-[auto] min-w-[auto] outline-[3px] w-9 z-[1] ml-auto p-0 rounded-bl rounded-br rounded-tl rounded-tr"
        >
          <img
            src="https://c.animaapp.com/mr58dsemaDi96Y/assets/icon-20.svg"
            alt="Icon"
            className="box-border caret-transparent h-6 outline-[3px] w-6 m-auto"
          />
        </button>
        <button
          type="button"
          className="absolute bg-transparent caret-transparent block outline-[3px] p-0 rounded-lg inset-0"
        ></button>
      </div>
    </div>
  );
};
