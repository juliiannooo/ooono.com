import { ProductCard } from "@/sections/ProductCarouselSection/components/ProductCard";

export const ProductCarouselSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <div className="bg-white box-border caret-transparent outline-[3px]">
        <div className="relative bg-white box-border caret-transparent outline-[3px] py-12 md:py-32">
          <div className="box-border caret-transparent outline-[3px] px-5 md:px-16">
            <div className="relative box-border caret-transparent max-w-none outline-[3px] z-[1] mx-auto md:max-w-screen-2xl">
              <h2 className="text-xl font-bold box-border caret-transparent leading-7 outline-[3px] mb-6 md:text-3xl md:leading-9 md:mb-12">
                We&#39;ve got other
                <br className="text-xl box-border caret-transparent leading-7 outline-[3px] md:text-3xl md:leading-9" />
                <span className="text-xl box-border caret-transparent leading-7 opacity-50 outline-[3px] md:text-3xl md:leading-9">
                  fan favorites
                </span>
              </h2>
            </div>
          </div>
          <div className="box-border caret-transparent outline-[3px] px-0 md:px-16">
            <div className="relative box-border caret-transparent gap-x-2 flex grid-cols-none max-w-none outline-[3px] gap-y-2 z-[1] overflow-auto mx-auto px-5 md:gap-x-5 md:grid md:grid-cols-[repeat(3,minmax(0px,1fr))] md:max-w-screen-2xl md:gap-y-5 md:px-0">
              <ProductCard
                imageUrl="https://c.animaapp.com/mr58dsemaDi96Y/assets/30.jpg"
                imageAlt="The CO-DRIVER NO2 is a round black device featuring 'OONO' at its center and an illuminated orange ring, designed to alert you about speed cameras and provide live traffic info, displayed against a plain white background."
                title="CO-DRIVER NO2"
                price="€79,95"
                href="/products/co-driver-no2"
              />
              <ProductCard
                imageUrl="https://c.animaapp.com/mr58dsemaDi96Y/assets/38.jpg"
                imageAlt="The CO-DRIVER NO1 is a round, black device with 'OOONO' in white capitals on the front, designed to keep you updated on road hazards and live traffic info. It is shown against a plain light gray background."
                title="CO-DRIVER NO1"
                price="€49,95"
                href="/products/co-driver-no1"
              />
              <ProductCard
                imageUrl="https://c.animaapp.com/mr58dsemaDi96Y/assets/65.jpg"
                imageAlt="The Mount is a round, black device with integrated magnets, designed to clip onto a car air vent and securely hold your smartphone. It is shown on a plain white background."
                title="Mount"
                price="€8,95"
                href="/products/phone-mount"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
