import { UtilityNavItem } from "@/sections/Header/components/UtilityNavItem";

export const DesktopUtilityNav = () => {
  return (
    <nav className="box-border caret-transparent hidden min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]">
      <ul className="text-sm font-bold box-border caret-transparent gap-x-6 flex leading-5 list-none outline-[3px] gap-y-6 pl-0">
        <UtilityNavItem label="ABOUT" href="/pages/about" />
        <UtilityNavItem label="BLOG" href="/blogs/news" />
        <UtilityNavItem label="DRIVEN" href="/pages/driven" />
        <UtilityNavItem label="SUPPORT" href="https://ooono.zendesk.com/" />
      </ul>
    </nav>
  );
};
