export const AnnouncementWidgets = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="absolute text-white text-sm bg-green-600 border-b-green-600 box-border caret-transparent hidden leading-[21px] outline-[3px] z-[4] border-t-white border-x-white border-b border-solid top-0 inset-x-0 md:leading-6">
          <div className="relative box-border caret-transparent leading-[21px] outline-[3px] w-full overflow-hidden p-2.5 md:leading-6">
            <div className="items-center box-border caret-transparent flex basis-[0%] grow justify-center leading-[21px] outline-[3px] p-2.5 md:leading-6">
              <span className="box-border caret-transparent hidden fill-white h-4 leading-[21px] outline-[3px] w-4 mr-4 md:leading-6"></span>
              <p className="box-border caret-transparent leading-[21px] outline-[3px] md:leading-6"></p>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <div
          role="dialog"
          className="fixed text-sm items-stretch bg-green-600 shadow-[rgba(0,0,0,0.12)_0px_1px_3px_0px,rgba(0,0,0,0.24)_0px_1px_2px_0px] box-border caret-transparent hidden leading-[21px] outline-[3px] z-[1000] border border-green-600 rounded-bl rounded-br rounded-tl rounded-tr border-solid bottom-4 inset-x-4 md:leading-6"
        >
          <div className="items-center box-border caret-transparent flex basis-[0%] grow justify-center leading-[21px] outline-[3px] p-4 md:leading-6">
            <span className="text-white box-border caret-transparent hidden fill-white h-4 leading-[21px] outline-[3px] w-4 mr-4 md:leading-6"></span>
            <p className="text-white box-border caret-transparent leading-[21px] outline-[3px] md:leading-6"></p>
          </div>
          <div className="box-border caret-transparent flex leading-[21px] outline-[3px] mr-4 my-4 md:leading-6">
            <button
              aria-label="Close popup"
              className="text-white items-center bg-transparent caret-transparent flex justify-center leading-[21px] min-h-[25.6px] min-w-[25.6px] outline-[3px] text-center p-0 md:leading-6"
            >
              <img
                src="https://c.animaapp.com/mr58dsemaDi96Y/assets/icon-21.svg"
                alt="Icon"
                className="box-border caret-transparent leading-[21px] outline-[3px] md:leading-6"
              />
            </button>
          </div>
        </div>
      </div>
      <div
        name="AbraGlobalTieredBanner"
        className="box-border caret-transparent hidden outline-[3px]"
      >
        <div className="text-sm box-border caret-transparent gap-x-[7px] hidden flex-col justify-center leading-[21px] outline-[3px] gap-y-[7px] w-full border py-[7px] border-solid border-transparent md:leading-6">
          <div className="items-center box-border caret-transparent gap-x-4 flex basis-[0%] grow justify-between leading-[21px] outline-[3px] gap-y-4 md:leading-6">
            <div className="items-center box-border caret-transparent gap-x-2 flex basis-[0%] grow leading-[21px] outline-[3px] gap-y-2 md:leading-6"></div>
          </div>
        </div>
      </div>
      <div
        name="AbraGlobalGiftBanner"
        className="box-border caret-transparent hidden outline-[3px]"
      >
        <div className="box-border caret-transparent gap-x-2 hidden flex-col justify-center outline-[3px] gap-y-2 w-full border border-solid border-transparent">
          <div className="items-center box-border caret-transparent flex basis-[0%] grow justify-center outline-[3px]">
            <div className="items-center box-border caret-transparent flex basis-[0%] grow outline-[3px]">
              <div className="box-border caret-transparent flex h-4 outline-[3px] w-4 mr-2.5"></div>
              <p className="box-border caret-transparent leading-4 outline-[3px]"></p>
            </div>
            <div className="text-zinc-600 text-sm font-medium items-center bg-black/10 box-border caret-transparent hidden justify-center leading-[21px] outline-[3px] text-nowrap ml-3 px-2 py-0.5 rounded-[20px] md:leading-6">
              0/1Added
            </div>
          </div>
        </div>
      </div>
      <div
        name="AbraGlobalRecommendations"
        className="box-border caret-transparent hidden outline-[3px] w-full"
      ></div>
      <div
        name="AbraGlobalGiftTieredBanner"
        className="box-border caret-transparent hidden outline-[3px]"
      >
        <div className="box-border caret-transparent hidden outline-[3px]"></div>
      </div>
      <div className="box-border caret-transparent outline-[3px]"></div>
    </div>
  );
};
