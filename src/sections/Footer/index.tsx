import { FooterContent } from "@/sections/Footer/components/FooterContent";

export const Footer = () => {
  return (
    <footer className="text-white bg-neutral-900 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
      <div className="box-border caret-transparent outline-[3px] px-5 md:px-16">
        <FooterContent />
      </div>
    </footer>
  );
};
