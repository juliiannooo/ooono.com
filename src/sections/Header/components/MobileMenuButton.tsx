export const MobileMenuButton = () => {
  return (
    <button
      type="button"
      className="items-center bg-transparent caret-transparent gap-x-1.5 flex flex-col h-9 justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 text-center w-9 p-0 rounded-lg md:hidden md:min-h-0 md:min-w-0"
    >
      <span className="bg-white box-border caret-transparent block h-px min-h-[auto] min-w-[auto] outline-[3px] w-full md:inline md:min-h-0 md:min-w-0"></span>
      <span className="bg-white box-border caret-transparent block h-px min-h-[auto] min-w-[auto] outline-[3px] w-full md:inline md:min-h-0 md:min-w-0"></span>
    </button>
  );
};
