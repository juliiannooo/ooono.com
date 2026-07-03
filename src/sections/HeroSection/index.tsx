import { HeroContent } from "@/sections/HeroSection/components/HeroContent";

export const HeroSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <div className="relative text-white bg-neutral-900 box-border caret-transparent flex flex-col h-[1000px] outline-[3px] pt-[55px] px-5 md:pt-[63px] md:px-16">
        <img
          src="https://c.animaapp.com/mr58dsemaDi96Y/assets/144.jpg"
          alt="A person with curly hair is reflected in a car window as a speed camera detector Ooono button is visible on the dashboard, blending the reflection with the vehicle’s interior."
          sizes="(max-width: 1941px) 100vw, 1941px"
          className="absolute aspect-[auto_1941_/_1092] box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full inset-0"
        />
        <img
          src="https://c.animaapp.com/mr58dsemaDi96Y/assets/171.jpg"
          sizes="(max-width: 1941px) 100vw, 1941px"
          className="absolute aspect-[auto_1941_/_2912] box-border caret-transparent block h-full max-w-full object-cover outline-[3px] w-full inset-0 md:hidden"
        />
        <div className="absolute bg-[linear-gradient(0deg,rgb(0,0,0),rgba(0,0,0,0)_70%)] box-border caret-transparent outline-[3px] inset-0"></div>
        <HeroContent />
      </div>
    </div>
  );
};
