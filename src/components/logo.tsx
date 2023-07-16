import Link from "next/link";
import { motion } from "framer-motion";
import { BiSolidDog } from "react-icons/bi";

const MotionLink = motion(Link);

export default function Logo() {
  return (
    <div className="mt-2 flex items-center justify-center">
      <MotionLink
        href={"/"}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-dark text-2xl font-bold text-light dark:text-light"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(245, 40, 145, 0.8)",
            "rgba(245, 0, 16, 0.8)",
            "rgba(0, 94, 245, 0.8)",
            "rgba(154, 219, 41, 0.8)",
            "#121212",
          ],
          rotate: 360,
          transition: { duration: 1 },
          scale: 1.2,
        }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="flex flex-col items-center justify-center">
          AG
          <BiSolidDog />
        </div>
      </MotionLink>
    </div>
  );
}
