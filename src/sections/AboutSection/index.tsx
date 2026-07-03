export const AboutSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="relative bg-white box-border caret-transparent outline-[3px] pb-16 px-5 md:pb-32 md:px-16">
          <div className="relative box-border caret-transparent max-w-none outline-[3px] z-[1] mx-auto md:max-w-screen-2xl">
            <div className="box-border caret-transparent gap-x-[normal] block grid-cols-none justify-normal outline-[3px] gap-y-[normal] md:gap-x-0 md:grid md:grid-cols-[repeat(6,minmax(0px,1fr))] md:justify-between md:gap-y-0">
              <h2 className="text-xl font-bold box-border caret-transparent leading-7 min-h-0 min-w-0 outline-[3px] md:text-3xl md:leading-9 md:min-h-[auto] md:min-w-[auto]">
                About OOONO
                <br className="text-xl box-border caret-transparent leading-7 outline-[3px] md:text-3xl md:leading-9" />
                <span className="text-xl box-border caret-transparent leading-7 opacity-50 outline-[3px] md:text-3xl md:leading-9">
                  A little less stress
                </span>
              </h2>
              <div className="box-border caret-transparent flex flex-col col-end-auto col-start-auto min-h-0 min-w-0 outline-[3px] md:col-end-[span_4] md:col-start-3 md:min-h-[auto] md:min-w-[auto]">
                <div className="text-xl font-medium box-border caret-transparent leading-7 min-h-[auto] min-w-[auto] outline-[3px] mt-6 mb-3 md:text-4xl md:leading-10 md:mt-0 md:mb-8">
                  <p className="text-xl box-border caret-transparent leading-7 outline-[3px] md:text-4xl md:leading-10">
                    We&#39;re not fixing traffic. We&#39;re just make it a
                    little less stressful
                  </p>
                </div>
                <div className="box-border caret-transparent gap-x-[normal] block justify-normal min-h-[auto] min-w-[auto] outline-[3px] gap-y-[normal] md:gap-x-12 md:flex md:justify-between md:gap-y-12">
                  <div className="text-stone-800 box-border caret-transparent basis-[0%] grow max-w-none min-h-0 min-w-0 outline-[3px] mt-2 md:max-w-md md:min-h-[auto] md:min-w-[auto] md:mt-0">
                    <p className="box-border caret-transparent outline-[3px]">
                      It all started with simple a: Drivers helping drivers. So
                      in 2017, we built the CO-DRIVER - a small device that lets
                      millions of people warn each other about what&#39;s up the
                      road. Speed cameras. Road hazards.{" "}
                    </p>
                  </div>
                  <div className="text-stone-800 box-border caret-transparent basis-[0%] grow max-w-none min-h-0 min-w-0 outline-[3px] mt-6 md:max-w-md md:min-h-[auto] md:min-w-[auto] md:mt-0">
                    <p className="box-border caret-transparent outline-[3px]">
                      The kind of small surprises that turn a calm drive into a
                      stressful one. 8 years and 5 million drivers later,
                      we&#39;re still on the same idea: Knowing what the road
                      brings is one less thing to stress about.
                    </p>
                  </div>
                </div>
                <a
                  href="/pages/about"
                  className="relative text-white font-medium self-auto bg-black box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-center border mt-8 pt-2.5 pb-2 px-8 rounded-lg border-solid md:self-start after:accent-auto after:bg-black after:bg-[url('https://ooono.com/cdn/shop/t/52/assets/spinner-white.svg')] after:bg-center after:bg-no-repeat after:bg-size-[auto_24px] after:box-border after:caret-transparent after:text-white after:hidden after:text-base after:not-italic after:normal-nums after:font-medium after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:rounded-lg after:border-separate after:-inset-px after:font-italian_plate_no2_expanded hover:bg-zinc-900 hover:border-zinc-900"
                >
                  More on us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
