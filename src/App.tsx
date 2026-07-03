import { Header } from "@/sections/Header";
import { Main } from "@/sections/Main";
import { Footer } from "@/sections/Footer";
import { AnnouncementWidgets } from "@/components/AnnouncementWidgets";
import { FloatingWidget } from "@/components/FloatingWidget";

export const App = () => {
  return (
    <body className="text-black text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent flex flex-col tracking-[normal] leading-6 list-outside list-disc min-h-[1000px] outline-[3px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-italian_plate_no2_expanded">
      <img
        src="https://c.animaapp.com/mr58dsemaDi96Y/assets/icon-1.svg"
        alt="Icon"
        className="absolute box-border caret-transparent h-0 outline-[3px] w-0"
      />
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"></div>
      <Header />
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"></div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"></div>
      <Main />
      <div className="box-border caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto] outline-[3px]"></div>
      <ul className="box-border caret-transparent hidden list-none outline-[3px] pl-0">
        <li className="box-border caret-transparent outline-[3px]">
          Refresh page
        </li>
      </ul>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"></div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
        <div className="box-border caret-transparent outline-[3px]">
          <div className="relative text-white bg-neutral-900 box-border caret-transparent outline-[3px] px-5 md:px-16">
            <div className="relative bg-white/10 box-border caret-transparent h-px max-w-none outline-[3px] z-[1] mx-auto md:max-w-screen-2xl"></div>
          </div>
        </div>
      </div>
      <Footer />
      <AnnouncementWidgets />
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"></div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"></div>
      <div className="box-border caret-transparent hidden h-[55px] outline-[3px] md:h-[63px]"></div>
      <FloatingWidget />
    </body>
  );
};
