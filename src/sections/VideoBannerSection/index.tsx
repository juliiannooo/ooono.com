import { VideoPlayButton } from "@/sections/VideoBannerSection/components/VideoPlayButton";

export const VideoBannerSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="relative bg-zinc-100 box-border caret-transparent outline-[3px] px-5 md:px-16">
          <div className="relative box-border caret-transparent max-w-none outline-[3px] z-[1] mx-auto rounded-3xl md:max-w-screen-2xl">
            <img
              src="https://c.animaapp.com/mr58dsemaDi96Y/assets/173.png"
              sizes="(max-width: 1941px) 100vw, 1941px"
              className="aspect-[1.78346_/_1] box-border caret-transparent hidden max-w-full object-cover outline-[3px] w-full overflow-hidden rounded-3xl md:block"
            />
            <img
              src="https://c.animaapp.com/mr58dsemaDi96Y/assets/173.png"
              sizes="(max-width: 1941px) 100vw, 1941px"
              className="aspect-[1.78346_/_1] box-border caret-transparent block max-w-full object-cover outline-[3px] w-full overflow-hidden rounded-3xl md:hidden"
            />
            <div className="absolute text-white box-border caret-transparent flex flex-col outline-[3px] p-6 rounded-3xl inset-0 md:p-14">
              <h2 className="text-3xl font-bold box-border caret-transparent leading-9 max-w-screen-md min-h-[auto] min-w-[auto] outline-[3px] md:text-7xl md:leading-[72px]">
                One step ahead
                <br className="text-3xl box-border caret-transparent leading-9 outline-[3px] md:text-7xl md:leading-[72px]" />
                <span className="text-3xl box-border caret-transparent leading-9 opacity-50 outline-[3px] md:text-7xl md:leading-[72px]">
                  in traffic
                </span>
              </h2>
              <VideoPlayButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
