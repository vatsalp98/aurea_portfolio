/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { type ReactNode, useState } from "react";
import IoHome from "react-icons/io";
import { MobileCustomLink } from "./mobileCustomLinks";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import DesktopSocials from "./socialIcons";
import HamburgerMenu from "./hamburgerMenu";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, className }) => {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`${className} group relative font-semibold text-primary dark:text-light`}
    >
      {title}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[1px] bg-dark text-primary transition-[width] duration-300 group-hover:w-full dark:bg-light dark:text-light ${
          pathName === href ? "w-full" : "w-0"
        }
            `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { darkMode, setDarkMode } = useThemeSwitcher();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header className="relative z-10 flex w-full items-center justify-between bg-gradStart px-32 py-8 font-medium dark:bg-gradDarkStart lg:px-16 sm:px-12 xs:px-8">
      <HamburgerMenu
        open={open}
        className={"hidden flex-col items-center justify-center lg:flex"}
        onClick={handleClick}
      />

      <div className="flex w-full items-center justify-between lg:hidden">
        <nav>
          <CustomLink href="/" title={"Home"} className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/experience" title="Experience" className="ml-4" />
        </nav>

        <nav className="flex flex-wrap items-center justify-center">
          <DesktopSocials />
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 1.3 }}
            onClick={() => {
              const check = darkMode === "light" ? "dark" : "light";
              setDarkMode(check);
            }}
            className="mx-3 mt-1 text-light"
          >
            {darkMode === "light" ? (
              <BsMoonFill className="text-2xl text-primary dark:text-light" />
            ) : (
              <BsSunFill className="text-2xl text-primary dark:text-light" />
            )}
          </motion.button>
        </nav>
      </div>

      {/* Mobile Section */}
      {open ? (
        <motion.div
          className="fixed left-1/2 top-1/2 z-30 flex min-w-[70vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between rounded-lg bg-dark/90 py-32 backdrop-blur-md dark:bg-light/75 dark:text-light"
          initial={{ scale: 0, opacity: 0, x: "-50", y: "-50" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1 }}
        >
          <nav className="flex flex-col items-center justify-center text-light dark:text-primary">
            <MobileCustomLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <MobileCustomLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <MobileCustomLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <MobileCustomLink
              href="/experience"
              title="Experience"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="mt-2 flex flex-wrap items-center justify-center">
            <DesktopSocials />
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
