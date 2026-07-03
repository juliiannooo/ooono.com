export type UtilityNavItemProps = {
  label: string;
  href: string;
};

export const UtilityNavItem = (props: UtilityNavItemProps) => {
  return (
    <li className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
      <div className="absolute box-border caret-transparent h-full outline-[3px] top-0">
        <span className="box-border caret-transparent outline-[3px] invisible">
          {props.label}
        </span>
      </div>
      <a
        href={props.href}
        className="relative box-border caret-transparent outline-[3px]"
      >
        {props.label}
      </a>
    </li>
  );
};
