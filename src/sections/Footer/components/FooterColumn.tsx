export type FooterColumnProps = {
  title: string;
  iconUrl: string;
  iconClassName: string;
  navClassName: string;
  wrapperClassName: string;
  listClassName: string;
  itemClassName: string;
  linkClassName: string;
  links: {
    href: string;
    label: string;
  }[];
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
      <h6 className="relative text-lg font-medium box-border caret-transparent leading-7 outline-[3px] border-t border-solid border-white/10 md:border-t-0 after:accent-auto after:bg-white/10 after:box-border after:caret-transparent after:text-white after:hidden after:text-lg after:not-italic after:normal-nums after:font-medium after:tracking-[normal] after:leading-7 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:rounded-md after:border-separate after:-inset-x-2 after:inset-y-1 after:font-italian_plate_no2_expanded">
        <label className="box-border caret-transparent flex outline-[3px] py-3 md:py-0">
          {props.title}

          <img src={props.iconUrl} alt="Icon" className={props.iconClassName} />
        </label>
      </h6>
      <nav className={props.navClassName}>
        <div className={props.wrapperClassName}>
          <ul className={props.listClassName}>
            {props.links.map((link) => (
              <li key={link.href} className={props.itemClassName}>
                <a href={link.href} className={props.linkClassName}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
