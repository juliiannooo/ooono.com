export const ImageBannerSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="relative bg-white box-border caret-transparent outline-[3px] px-5 py-8 md:pt-32 md:pb-16 md:px-16">
          <div className="relative box-border caret-transparent max-w-none outline-[3px] z-[1] mx-auto rounded-3xl md:max-w-screen-2xl">
            <img
              src="https://c.animaapp.com/mr58dsemaDi96Y/assets/159.jpg"
              sizes="(max-width: 1941px) 100vw, 1941px"
              className="aspect-[18_/_9] box-border caret-transparent hidden max-w-full object-cover outline-[3px] w-full overflow-hidden rounded-3xl md:block"
            />
            <img
              src="https://c.animaapp.com/mr58dsemaDi96Y/assets/165.jpg"
              alt="A person with curly hair, wearing a beige jacket and orange sleeves, leans on the open door of a car with a speed camera detector, smiling. An orange building with black-framed windows is in the background."
              sizes="(max-width: 1941px) 100vw, 1941px"
              className="aspect-[4_/_5] box-border caret-transparent block max-w-full object-cover outline-[3px] w-full overflow-hidden rounded-3xl md:aspect-[18_/_9] md:hidden"
            />
            <div className="absolute text-white box-border caret-transparent flex flex-col outline-[3px] p-6 rounded-3xl inset-0 md:p-14">
              <h2 className="text-3xl font-bold box-border caret-transparent leading-9 max-w-screen-md min-h-[auto] min-w-[auto] outline-[3px] md:text-6xl md:leading-[60px]">
                Making every drive
                <br className="text-3xl box-border caret-transparent leading-9 outline-[3px] md:text-6xl md:leading-[60px]" />
                <span className="text-3xl box-border caret-transparent leading-9 opacity-50 outline-[3px] md:text-6xl md:leading-[60px]">
                  a little less stressful
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
