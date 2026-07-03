export const FooterLegal = () => {
  return (
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
  );
};
