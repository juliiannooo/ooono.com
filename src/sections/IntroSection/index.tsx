export const IntroSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="relative bg-white box-border caret-transparent outline-[3px] px-5 py-12 md:px-16 md:py-24">
          <div className="relative box-border caret-transparent gap-x-[normal] block grid-cols-none max-w-none outline-[3px] gap-y-[normal] z-[1] mx-auto md:gap-x-2 md:grid md:grid-cols-[repeat(6,minmax(0px,1fr))] md:max-w-screen-2xl md:gap-y-2">
            <h2 className="text-xl font-bold box-border caret-transparent col-end-[span_2] col-start-[span_2] leading-7 min-h-0 min-w-0 outline-[3px] md:text-3xl md:leading-9 md:min-h-[auto] md:min-w-[auto]">
              Less uncertainty
              <br className="text-xl box-border caret-transparent leading-7 outline-[3px] md:text-3xl md:leading-9" />
              <span className="text-xl box-border caret-transparent leading-7 opacity-50 outline-[3px] md:text-3xl md:leading-9">
                Less stress
              </span>
            </h2>
            <div className="text-2xl font-medium box-border caret-transparent col-end-auto col-start-auto leading-8 max-w-none min-h-0 min-w-0 outline-[3px] mt-6 md:text-4xl md:col-end-[span_4] md:col-start-3 md:leading-[49.5px] md:max-w-4xl md:min-h-[auto] md:min-w-[auto] md:mt-0">
              <p className="text-2xl box-border caret-transparent leading-8 outline-[3px] md:text-4xl md:leading-[49.5px]">
                Speed cameras, road hazards - the CO-DRIVER tells you what&#39;s
                ahead before you get there. Just focus on driving, not on
                watching for what might catch you off guard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
