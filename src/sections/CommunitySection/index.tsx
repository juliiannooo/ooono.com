export const CommunitySection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="relative text-white bg-neutral-900 box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[3px] md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] -order-1 outline-[3px] w-full md:order-none">
            <div className="relative box-border caret-transparent max-h-none min-h-full outline-[3px] overflow-hidden md:max-h-[937px]">
              <div className="aspect-square box-border caret-transparent outline-[3px] w-full"></div>
              <div className="absolute box-border caret-transparent outline-[3px] inset-0">
                <img
                  src="https://c.animaapp.com/mr58dsemaDi96Y/assets/132.jpg"
                  alt="A woman in a brown jacket sits in the back seat of a car equipped with a speed camera detector, looking out the window at an overcast landscape as sunlight partially illuminates her face and hair."
                  sizes="(max-width: 1941px) 100vw, 1941px"
                  className="absolute aspect-[auto_1941_/_2001] box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full"
                />
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
            <div className="box-border caret-transparent flex flex-col min-h-full outline-[3px] p-5 md:p-12">
              <h2 className="text-3xl font-bold box-border caret-transparent leading-9 min-h-[auto] min-w-[auto] outline-[3px] mb-4 md:text-6xl md:leading-[60px]">
                Real people sharing real-time information
                <br className="text-3xl box-border caret-transparent leading-9 outline-[3px] md:text-6xl md:leading-[60px]" />
                <span className="text-3xl box-border caret-transparent hidden leading-9 opacity-50 outline-[3px] md:text-6xl md:leading-[60px]"></span>
              </h2>
              <h2 className="text-3xl font-bold box-border caret-transparent leading-9 min-h-[auto] min-w-[auto] outline-[3px] text-right ml-auto md:text-6xl md:leading-[60px]">
                <strong className="text-orange-600 text-3xl box-border caret-transparent leading-9 outline-[3px] md:text-6xl md:leading-[60px]">
                  Connecting millions of drivers. Every. Single. Day.{" "}
                </strong>
                <br className="text-3xl box-border caret-transparent leading-9 outline-[3px] md:text-6xl md:leading-[60px]" />
                <span className="text-3xl box-border caret-transparent hidden leading-9 opacity-50 outline-[3px] md:text-6xl md:leading-[60px]"></span>
              </h2>
              <div className="box-border caret-transparent basis-[0%] grow shrink-0 min-h-14 min-w-[auto] outline-[3px] md:min-h-20"></div>
              <div className="text-stone-300 box-border caret-transparent max-w-md min-h-[auto] min-w-[auto] outline-[3px]">
                <p className="box-border caret-transparent outline-[3px]">
                  <strong className="text-orange-600 font-medium box-border caret-transparent outline-[3px]">
                    Less stress because someone always has your back
                  </strong>
                  <br className="box-border caret-transparent outline-[3px]" />5
                  million drivers across Europe sharing what&#39;s ahead, in
                  real time. You drive calmer because they do
                </p>
              </div>
              <a
                href="/pages/driven"
                className="relative font-medium self-auto backdrop-blur-3xl bg-white/20 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-center border mt-6 pt-2.5 pb-2 px-8 rounded-lg border-solid border-transparent md:self-start md:mt-10 after:accent-auto after:bg-white after:bg-[url('https://ooono.com/cdn/shop/t/52/assets/spinner.svg')] after:bg-center after:bg-no-repeat after:bg-size-[auto_24px] after:box-border after:caret-transparent after:text-white after:hidden after:text-base after:not-italic after:normal-nums after:font-medium after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:rounded-lg after:border-separate after:-inset-px after:font-italian_plate_no2_expanded hover:bg-white/10"
              >
                Meet the community
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
