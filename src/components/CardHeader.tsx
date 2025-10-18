import StarIcon from "@/assets/icons/star.svg";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string ;
  description: string | ReactNode;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10 lg:px-8", className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-pink-500" />
        <h3 className="font-bold text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">{description}</p>
    </div>
  );
};
