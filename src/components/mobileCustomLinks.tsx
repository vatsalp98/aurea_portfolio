/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { usePathname, useRouter } from "next/navigation";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
  toggle: any;
}

export const MobileCustomLink: React.FC<CustomLinkProps> = ({
  href,
  title,
  className,
  toggle,
}) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
    toggle;
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} text-light dark:text-dark group relative my-2 font-semibold`}
    >
      {title}
      <span
        className={`bg-light ease dark:bg-dark absolute -bottom-0.5 left-0 inline-block h-[1px] transition-[width] duration-300 group-hover:w-full ${
          pathName === href ? "w-full" : "w-0"
        }
            `}
      >
        &nbsp;
      </span>
    </button>
  );
};
