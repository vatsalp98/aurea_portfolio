import { TfiLinkedin } from "react-icons/tfi";
import { motion } from "framer-motion";
import { CgTwitter } from "react-icons/cg";

export default function DesktopSocials() {
  return (
    <>
      <motion.a
        href="https://twitter.com/vatsalparmar98"
        target={"_blank"}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="mr-3 w-6"
        title="twitter"
      >
        <CgTwitter className="text-[28px] text-primary dark:text-light" />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/vatsalparmar98/"
        target={"_blank"}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="mx-3"
      >
        <TfiLinkedin className="text-[28px] text-primary dark:text-light" />
      </motion.a>
    </>
  );
}
