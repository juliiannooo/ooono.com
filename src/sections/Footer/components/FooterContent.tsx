import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterContent = () => {
  return (
    <div className="relative box-border caret-transparent max-w-none outline-[3px] z-[1] mx-auto py-8 md:max-w-screen-2xl md:pb-16">
      <div className="box-border caret-transparent gap-x-[normal] flex flex-col grid-cols-none outline-[3px] gap-y-[normal] md:gap-x-0 md:grid md:grid-cols-[repeat(6,minmax(0px,1fr))] md:gap-y-0">
        <FooterLogo />
        <div className="box-border caret-transparent gap-x-[normal] block col-end-auto col-start-auto grid-cols-none min-h-[auto] min-w-[auto] outline-[3px] gap-y-[normal] md:gap-x-12 md:grid md:col-end-[span_4] md:col-start-3 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:gap-y-8">
          <FooterColumn
            title="Products"
            iconUrl="https://c.animaapp.com/mr58dsemaDi96Y/assets/icon-13.svg"
            iconClassName="self-center box-border caret-transparent block h-6 outline-[3px] ml-auto -scale-100 md:hidden md:transform-none"
            navClassName="box-border caret-transparent grid grid-rows-[1fr] [mask-image:linear-gradient(to_top,rgba(0,0,0,0),rgb(0,0,0)_24px)] outline-[3px] overflow-clip mt-0 md:overflow-visible md:mt-4"
            wrapperClassName="box-border caret-transparent min-w-[auto] outline-[3px]"
            listClassName="text-stone-400 box-border caret-transparent gap-x-3 flex flex-col list-none outline-[3px] gap-y-3 pl-0 pt-1 pb-6 md:py-0"
            itemClassName="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"
            linkClassName="box-border caret-transparent outline-[3px]"
            links={[
              {
                href: "/collections/speed-camera-detector",
                label: "Speed camera detectors",
              },
              {
                href: "/collections/electronic-parking-disc",
                label: "Electronic parking discs",
              },
              {
                href: "/collections/accessories",
                label: "Accessories",
              },
            ]}
          />
          <FooterColumn
            title="OOONO"
            iconUrl="https://c.animaapp.com/mr58dsemaDi96Y/assets/icon-14.svg"
            iconClassName="self-center box-border caret-transparent block h-6 outline-[3px] ml-auto md:hidden"
            navClassName="box-border caret-transparent grid grid-rows-[0fr] [mask-image:linear-gradient(to_top,rgba(0,0,0,0),rgb(0,0,0)_24px)] outline-[3px] invisible overflow-clip mt-0 md:grid-rows-[1fr] md:visible md:overflow-visible md:mt-4"
            wrapperClassName="box-border caret-transparent min-w-[auto] outline-[3px] invisible md:visible"
            listClassName="text-stone-400 box-border caret-transparent gap-x-3 flex flex-col list-none outline-[3px] gap-y-3 invisible pl-0 pt-1 pb-6 md:visible md:py-0"
            itemClassName="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] invisible md:visible"
            linkClassName="box-border caret-transparent outline-[3px] invisible md:visible"
            links={[
              { href: "/pages/about", label: "About" },
              { href: "/pages/b2b", label: "B2B" },
              { href: "/pages/careers", label: "Careers" },
              { href: "/pages/driven", label: "Driven" },
              {
                href: "https://help.ooono.com/hc/en-gb/articles/19960607583644-All-You-Need-to-Know-About-Returns",
                label: "Free returns",
              },
              {
                href: "https://app.formcrafts.com/75310a8c",
                label: "Withdraw from contract",
              },
            ]}
          />
        </div>
      </div>
      <div className="[align-items:normal] box-border caret-transparent gap-x-4 flex flex-col-reverse grid-cols-none outline-[3px] gap-y-4 mt-8 md:items-end md:gap-x-0 md:grid md:grid-cols-[repeat(6,minmax(0px,1fr))] md:gap-y-0 md:mt-12">
        <div className="box-border caret-transparent gap-x-1 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-1">
          <img
            src="https://c.animaapp.com/mr58dsemaDi96Y/assets/icon-15.svg"
            alt="Icon"
            className="box-border caret-transparent h-6 outline-[3px]"
          />
          <img
            src="https://c.animaapp.com/mr58dsemaDi96Y/assets/icon-16.svg"
            alt="Icon"
            className="box-border caret-transparent h-6 outline-[3px]"
          />
          <img
            src="https://c.animaapp.com/mr58dsemaDi96Y/assets/icon-17.svg"
            alt="Icon"
            className="box-border caret-transparent h-6 outline-[3px]"
          />
          <img
            src="https://c.animaapp.com/mr58dsemaDi96Y/assets/icon-18.svg"
            alt="Icon"
            className="box-border caret-transparent h-6 outline-[3px]"
          />
          <img
            src="https://c.animaapp.com/mr58dsemaDi96Y/assets/icon-19.svg"
            alt="Icon"
            className="box-border caret-transparent h-6 outline-[3px]"
          />
        </div>
        <div className="box-border caret-transparent flex flex-col col-end-auto col-start-auto min-h-[auto] min-w-[auto] outline-[3px] text-center w-full md:col-end-[span_4] md:col-start-3">
          <div className="relative items-center self-auto bg-white/10 box-border caret-transparent gap-x-3 flex max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 overflow-hidden p-1 rounded-lg md:self-start">
            <img
              src="https://c.animaapp.com/mr58dsemaDi96Y/assets/34.svg"
              alt="Germany"
              className="aspect-[auto_64_/_48] box-border caret-transparent h-5 max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-5 ml-2 rounded-full"
            />
            <p className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
              Germany, EUR
            </p>
            <div className="box-border caret-transparent hidden basis-[0%] grow min-h-0 min-w-0 outline-[3px] w-16 md:block md:min-h-[auto] md:min-w-[auto]"></div>
            <button
              type="button"
              className="relative bg-white caret-transparent flex shrink-0 h-9 min-h-[auto] min-w-[auto] outline-[3px] w-9 z-[1] ml-auto p-0 rounded-bl rounded-br rounded-tl rounded-tr"
            >
              <img
                src="https://c.animaapp.com/mr58dsemaDi96Y/assets/icon-20.svg"
                alt="Icon"
                className="box-border caret-transparent h-6 outline-[3px] w-6 m-auto"
              />
            </button>
            <button
              type="button"
              className="absolute bg-transparent caret-transparent block outline-[3px] p-0 rounded-lg inset-0"
            ></button>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent block grid-cols-none outline-[3px] mt-0 pt-0 border-t-0 border-solid border-white/10 md:grid md:grid-cols-[repeat(6,minmax(0px,1fr))] md:mt-10 md:pt-4 md:border-t">
        <ul className="text-stone-400 text-sm box-border caret-transparent gap-x-2 grid col-end-auto col-start-auto grid-cols-[repeat(2,minmax(0px,1fr))] leading-5 list-none min-h-0 min-w-0 outline-[3px] gap-y-3 mt-6 pl-0 pt-4 border-t border-solid border-white/10 md:gap-x-4 md:flex md:col-end-[span_4] md:col-start-3 md:min-h-[auto] md:min-w-[auto] md:gap-y-4 md:mt-0 md:pt-0 md:border-t-0">
          <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
            <a
              href="/policies/legal-notice"
              className="box-border caret-transparent outline-[3px]"
            >
              Terms of Use
            </a>
          </li>
          <li className="box-border caret-transparent justify-self-end min-h-[auto] min-w-[auto] outline-[3px] text-right">
            <a
              href="/policies/privacy-policy"
              className="box-border caret-transparent outline-[3px]"
            >
              Privacy Policy
            </a>
          </li>
          <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
            <a
              href="/policies/terms-of-service"
              className="box-border caret-transparent outline-[3px]"
            >
              Terms &amp; Conditions
            </a>
          </li>
          <li className="box-border caret-transparent justify-self-end min-h-[auto] min-w-[auto] outline-[3px] text-right">
            <a
              href="/pages/impressum"
              className="box-border caret-transparent outline-[3px]"
            >
              Impressum
            </a>
          </li>
          <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
            <a
              href="/pages/doc"
              className="box-border caret-transparent outline-[3px]"
            >
              EU Declaration of Conformity
            </a>
          </li>
        </ul>
        <p className="text-white/20 text-sm box-border caret-transparent col-start-auto row-start-auto leading-5 min-h-0 min-w-0 outline-[3px] text-right mt-4 pt-4 border-t border-solid border-white/10 md:col-start-1 md:row-start-1 md:min-h-[auto] md:min-w-[auto] md:text-left md:mt-0 md:pt-0 md:border-t-0">
          OOONO A/S ©2026
        </p>
      </div>
      <img
        src="https://c.animaapp.com/mr58dsemaDi96Y/assets/58.svg"
        sizes="(max-width: 1941px) 100vw, 1941px"
        className="aspect-[auto_1941_/_382] box-border caret-transparent max-w-full opacity-[0.03] outline-[3px] w-full mt-5 md:mt-20"
      />
    </div>
  );
};
