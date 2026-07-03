import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
import { DesktopProductNav } from "@/sections/Header/components/DesktopProductNav";
import { HeaderLogo } from "@/sections/Header/components/HeaderLogo";
import { DesktopUtilityNav } from "@/sections/Header/components/DesktopUtilityNav";
import { CartButton } from "@/sections/Header/components/CartButton";

export const Header = () => {
  return (
    <header className="sticky box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] z-50 -top-px">
      <div className="absolute text-black bg-white box-border caret-transparent flex flex-col h-14 outline-[3px] w-full left-0 top-0 md:text-white md:bg-transparent md:h-16">
        <div className="bg-orange-600 box-border caret-transparent h-0.5 min-h-[auto] min-w-[auto] outline-[3px] w-full mt-0 md:mt-px"></div>
        <div className="relative text-white items-center box-border caret-transparent flex basis-[0%] flex-col grow shrink-0 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full pb-px px-5 md:px-16">
          <div className="items-center box-border caret-transparent flex justify-center max-w-none min-h-[auto] min-w-[auto] outline-[3px] w-full md:max-w-screen-2xl">
            <div className="box-border caret-transparent flex basis-[0%] grow justify-start min-h-[auto] min-w-[auto] outline-[3px]">
              <MobileMenuButton />
              <DesktopProductNav />
            </div>
            <HeaderLogo />
            <div className="items-center box-border caret-transparent gap-x-6 flex basis-[0%] grow justify-end min-h-[auto] min-w-[auto] outline-[3px] gap-y-6">
              <DesktopUtilityNav />
              <CartButton />
            </div>
          </div>
        </div>
        <div className="text-white bg-white/20 box-border caret-transparent h-px min-h-[auto] min-w-[auto] outline-[3px] w-full"></div>
      </div>
    </header>
  );
};
