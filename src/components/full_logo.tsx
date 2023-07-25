import { motion } from "framer-motion";

type FullLogoProps = {
  strokeColor: string;
};

export default function FullLogo(props: FullLogoProps) {
  return (
    <motion.svg
      width="398"
      height="258"
      viewBox="0 0 500 500"
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
        d="M224 86C231.943 85.0071 222.757 66.0219 221.5 63.9444C210.229 45.3227 198.072 31.4814 178.056 22C157.15 12.0972 129.863 5.95336 107.056 12.5556C78.7269 20.756 56.1552 45.7807 41.2778 70.2222C23.7919 98.9491 9.98551 133.557 9.05555 167.5C8.12805 201.354 20.4871 234.538 46 257.5C58.596 268.836 71.1813 277.293 87 283.444C100.084 288.532 117.146 288.786 131.056 287.889C165.332 285.677 190.416 261.113 205 231.944C213.561 214.822 218.119 196.91 221.556 178.167C223.675 166.607 226 155.424 226 143.611C226 142.719 226 134.148 226 136.5C226 142.879 226.019 148.803 227.5 155.056C230.524 167.824 235.025 180.175 237.556 193.056C240.621 208.66 246.993 223.694 249 239.5C250.048 247.756 252.338 255.713 253.778 263.889C255.445 273.358 255.934 283.037 257.5 292.556C260.874 313.056 263.285 333.719 265.444 354.389C268.381 382.5 265.013 418.863 242.056 438.444C234.474 444.911 223.501 449 213.556 449C206.756 449 200.194 448.178 196.667 441.444C192.099 432.725 194.12 418.773 196.667 409.944C199.352 400.636 205.866 391.897 211.333 384.111C216.652 376.537 221.766 368.858 228 362C239.619 349.219 251.321 337.434 264.444 326.111C275.499 316.573 286.265 305.905 295.444 294.5C309.121 277.507 319.805 259.187 325.556 238C327.099 232.313 329 226.929 329 221C329 217.724 328 227.502 328 230.778C328 239.132 328.658 246.42 333 253.778C335.595 258.174 343.868 267.69 349.444 268C354.224 268.266 359.869 268.813 363.778 265.556C370.331 260.094 375.305 249.869 378.778 242.333C383.064 233.03 385.013 223.454 387.778 213.778C388.066 212.768 387.432 209.578 388.5 211.5C389.332 212.997 389.404 215.316 389.778 217C393.191 232.361 401.019 247.842 412.222 259.222C425.806 273.021 448.601 281.609 464.778 268C489.694 247.039 511.659 212.227 515 179.556C517.001 159.995 516.285 140.362 513 121C512.135 115.901 509.434 95.7091 502 94.2222C495.871 92.9965 488.921 123.765 488 127C482.28 147.097 480.819 169.676 481 190.444C481.227 216.538 486.71 252.677 511.778 266.778C530.196 277.138 551.213 276.879 565.556 259.778C571.36 252.857 571.428 247.075 573.222 239C573.479 237.845 574 230.228 574 234C574 245.543 587.999 262.222 596.667 268C609.884 276.812 623.959 280 639.556 280C651.174 280 660.137 279.815 669.222 271.556C675.866 265.516 678.595 256.384 681.889 248.333C683.265 244.971 684.806 241.677 685 238C685.137 235.393 685.433 230.284 688 229"
        stroke={props.strokeColor}
        stroke-width="18"
        stroke-linecap="round"
      />
      <path
        d="M429 183C433.09 182.489 436.978 182.564 441.667 183C462.531 184.941 483.292 185.576 504.222 186.222C534.082 187.145 563.844 188 593.722 188C599.844 188 606.268 187.454 612.333 188.5C613.074 188.628 617.357 189.178 615 188"
        stroke={props.strokeColor}
        stroke-width="18"
        stroke-linecap="round"
      />
      <path
        d="M569 132H570"
        stroke={props.strokeColor}
        stroke-width="18"
        stroke-linecap="round"
      />
    </motion.svg>
  );
}
