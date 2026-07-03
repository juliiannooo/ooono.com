export const VideoPlayButton = () => {
  return (
    <button
      type="button"
      className="text-sm items-center self-auto backdrop-blur-2xl bg-white/10 caret-transparent gap-x-4 flex leading-5 min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 text-center mt-auto pl-1 pr-5 py-1 rounded-2xl md:text-base md:self-start md:leading-6 md:min-w-72 hover:bg-white/20"
    >
      <span className="relative text-sm box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-6">
        <img
          src="https://c.animaapp.com/mr58dsemaDi96Y/assets/7.webp"
          alt=""
          sizes="(max-width: 129px) 100vw, 129px"
          className="text-sm aspect-[5_/_4] box-border caret-transparent leading-5 max-w-full object-cover outline-[3px] w-16 rounded-xl md:text-base md:aspect-square md:leading-6"
        />
        <img
          src="https://c.animaapp.com/mr58dsemaDi96Y/assets/icon-9.svg"
          alt="Icon"
          className="absolute text-sm box-border caret-transparent leading-5 outline-[3px] translate-x-[-50.0%] translate-y-[-50.0%] w-6 left-2/4 top-2/4 md:text-base md:leading-6"
        />
      </span>
      <span className="text-sm box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-6">
        Play video
      </span>
      <span className="text-sm box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] opacity-50 outline-[3px] ml-auto md:text-base md:leading-6">
        00:30
      </span>
    </button>
  );
};
