import { FeatureMedia } from "@/sections/ProductFeatureSection/components/FeatureMedia";
import { FeatureContent } from "@/sections/ProductFeatureSection/components/FeatureContent";
import { FeatureList } from "@/sections/ProductFeatureSection/components/FeatureList";

export const ProductFeatureSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="relative bg-zinc-100 box-border caret-transparent outline-[3px] pt-5 pb-16 px-5 rounded-t-3xl md:pt-24 md:pb-32 md:px-16">
          <div className="absolute box-border caret-transparent max-w-full outline-[3px] pointer-events-none translate-x-[-50.0%] w-full overflow-hidden rounded-t-3xl left-2/4 top-0">
            <div className="box-border caret-transparent flex justify-center outline-[3px] translate-y-[-42.0%] overflow-hidden md:translate-y-[-52.0%]">
              <img
                src="https://c.animaapp.com/mr58dsemaDi96Y/assets/icon-8.svg"
                alt="Icon"
                className="relative box-border caret-transparent shrink-0 h-[432px] opacity-[0.02] outline-[3px] w-auto md:h-auto md:w-[2009.6px]"
              />
            </div>
          </div>
          <div className="relative [align-items:normal] box-border caret-transparent gap-x-[normal] block grid-cols-none max-w-lg outline-[3px] gap-y-[normal] z-[1] mx-auto md:items-center md:gap-x-12 md:grid md:grid-cols-[repeat(3,minmax(0px,1fr))] md:max-w-screen-2xl md:gap-y-12">
            <FeatureMedia />
            <FeatureContent />
            <FeatureList />
            <a
              href="/products/co-driver-no2"
              className="relative text-white font-medium bg-black box-border caret-transparent flex justify-center outline-[3px] text-center border mt-8 pt-2.5 pb-2 px-8 rounded-lg border-solid md:hidden after:accent-auto after:bg-black after:bg-[url('https://ooono.com/cdn/shop/t/52/assets/spinner-white.svg')] after:bg-center after:bg-no-repeat after:bg-size-[auto_24px] after:box-border after:caret-transparent after:text-white after:hidden after:text-base after:not-italic after:normal-nums after:font-medium after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:rounded-lg after:border-separate after:-inset-px after:font-italian_plate_no2_expanded hover:bg-zinc-900 hover:border-zinc-900"
            >
              Explore the CO-DRIVER NO2
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
