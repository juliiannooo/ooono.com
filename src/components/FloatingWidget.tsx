export const FloatingWidget = () => {
  return (
    <div className="fixed box-border caret-transparent h-0 outline-[3px] w-0 z-[2147483001] font-system_ui">
      <div
        role="button"
        aria-label="Open Intercom Messenger"
        className="fixed bg-orange-600 shadow-[rgba(0,0,0,0.06)_0px_1px_6px_0px,rgba(0,0,0,0.16)_0px_2px_32px_0px] caret-transparent h-12 max-h-12 max-w-12 outline-[3px] w-12 z-[2147483003] rounded-[50%] right-[30px] bottom-[30px]"
      >
        <div className="absolute items-center box-border caret-transparent flex h-12 justify-center outline-[3px] w-12 left-0 top-0">
          <img
            src="https://c.animaapp.com/mr58dsemaDi96Y/assets/icon-23.svg"
            alt="Icon"
            className="box-border caret-transparent h-6 outline-[3px] w-6"
          />
        </div>
      </div>
    </div>
  );
};
