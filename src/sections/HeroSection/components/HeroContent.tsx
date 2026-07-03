export const HeroContent = () => {
  return (
    <div className="relative box-border caret-transparent flex flex-col grid-cols-none h-full justify-end max-w-none min-h-[auto] min-w-[auto] outline-[3px] w-full z-[1] mt-0 mx-0 py-5 md:grid md:grid-cols-[repeat(6,minmax(0px,1fr))] md:h-auto md:max-w-screen-2xl md:min-h-80 md:mt-auto md:mx-auto md:py-12">
      <div className="box-border caret-transparent col-end-auto col-start-auto min-h-[auto] min-w-[auto] outline-[3px] md:col-end-[span_2] md:col-start-[span_2]">
        <h1 className="text-2xl font-bold box-border caret-transparent leading-8 outline-[3px] md:text-3xl md:leading-9">
          A well-timed warning
          <br className="text-2xl box-border caret-transparent leading-8 outline-[3px] md:text-3xl md:leading-9" />
          <span className="text-2xl box-border caret-transparent leading-8 opacity-50 outline-[3px] md:text-3xl md:leading-9">
            A little less stress
          </span>
        </h1>
      </div>
      <div className="[align-items:normal] box-border caret-transparent flex flex-col col-end-auto col-start-auto min-h-[auto] min-w-[auto] outline-[3px] md:items-start md:col-end-[span_3] md:col-start-[span_3]">
        <p className="text-base box-border caret-transparent leading-6 max-w-64 min-h-[auto] min-w-[auto] outline-[3px] mt-3 mb-0 md:text-xl md:leading-7 md:max-w-xs md:mt-0 md:mb-auto">
          A timely warning on speed cameras and road hazards makes for a little
          less stress on every drive
        </p>
        <a
          href="/products/co-driver-no2"
          className="relative font-medium bg-orange-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-center border border-orange-600 mt-12 pt-2.5 pb-2 px-8 rounded-lg border-solid after:accent-auto after:bg-orange-600 after:bg-[url('https://ooono.com/cdn/shop/t/52/assets/spinner-white.svg')] after:bg-center after:bg-no-repeat after:bg-size-[auto_24px] after:box-border after:caret-transparent after:text-white after:hidden after:text-base after:not-italic after:normal-nums after:font-medium after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:rounded-lg after:border-separate after:-inset-px after:font-italian_plate_no2_expanded hover:bg-orange-800 hover:border-orange-800"
        >
          Explore CO-DRIVER NO2
        </a>
      </div>
    </div>
  );
};
