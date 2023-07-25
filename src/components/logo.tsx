import Link from "next/link";
import { motion } from "framer-motion";

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
          transition: { duration: 1 },
          scale: 1.2,
        }}
        whileTap={{ scale: 0.9 }}
      >
        {/* <div className="flex flex-col items-center justify-center">
          AG
          <BiSolidDog />
        </div> */}
        <motion.svg
          width="332"
          height="437"
          viewBox="0 0 432 537"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            d="M234 92C234 88.1667 234 84.3333 234 80.5C234 72.3916 226.692 64.7695 222.222 58.7778C204.984 35.6715 173.47 15.7052 145 10.4444C131.827 8.01026 115.186 9.2539 103.056 15C88.4844 21.9021 76.6802 32.7806 64.2222 42.7778C36.963 64.6525 20.3813 95.7524 12.0556 129.056C5.53748 155.128 9.64021 189.273 24.5556 211.944C34.2464 226.674 45.2518 239.218 60.7778 248C76.2816 256.77 94.3402 262.05 112 263.778C125.785 265.126 140.176 266.571 153.5 261.833C167.813 256.744 179.351 246.974 189.778 236.222C200.4 225.268 205.261 210.266 211 196.556C216.406 183.64 219.049 170.783 221.5 157.056C221.889 154.874 221.056 142.127 223.222 147C225.821 152.847 228.02 158.549 230.444 164.5C243.239 195.905 246.523 230.74 254 263.556C259.995 289.867 262.358 317.376 267 344C271.612 370.454 273.818 399.66 271.444 426.444C267.389 472.219 236.572 521.757 186.778 526.778C152.662 530.218 118.657 523.621 101 491.333C94.2347 478.963 98.1319 461.67 103 449.5C109.942 432.146 124.252 417.873 138.611 406.444C157.309 391.562 183.73 384.456 206.444 378.778C238.895 370.665 271.295 362.324 302.944 351.444C329.809 342.21 357.752 331.686 381 315C396.805 303.656 414.409 288.218 422 270"
            stroke="white"
            stroke-width="18"
            stroke-linecap="round"
          />
        </motion.svg>
      </MotionLink>
    </div>
  );
}
