/* eslint-disable @typescript-eslint/no-unsafe-assignment */
type Props = {
  open: boolean;
  className: string;
  onClick: any;
};

export default function HamburgerMenu(props: Props) {
  return (
    <button className={`${props.className}`} onClick={props.onClick}>
      <span
        className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
          props.open ? "translate-y-1 rotate-45" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`bg-dark dark:bg-light my-0.5 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
          props.open ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
          props.open ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
}
