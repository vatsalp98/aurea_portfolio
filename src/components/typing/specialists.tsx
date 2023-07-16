import { TypePhase, useTypedSpecialists } from "./useTypedSpecialists";
import cn from "classnames";

type Props = {
  specialists: string[];
  className: string;
};

export const Specialists = ({ specialists, className }: Props) => {
  const { typedSuperpower, selectedSuperpower, phase, resume } =
    useTypedSpecialists(specialists);

  return (
    <h2
      className={`flex flex-col pl-2 text-center text-5xl tracking-tight text-gray-900 lg:block md:pl-0 md:pt-0 ${className}`}
      onClick={resume}
    >
      <span
        className={cn("text-primary-700 py-5 md:pt-0", {
          ["end-cursor"]: phase !== TypePhase.Deleting,
          ["blinking"]: phase === TypePhase.Pausing,
        })}
        aria-label={selectedSuperpower}
      >
        I&apos;m {typedSuperpower}
      </span>
    </h2>
  );
};
