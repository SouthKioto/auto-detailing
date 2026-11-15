interface TitleBarProps {
  title: string;
  marginTop: string;
  titlePosition?: string;
}

export const TitleBar = ({
  title,
  marginTop,
  titlePosition,
}: TitleBarProps) => {
  return (
    <div
      className={`flex w-full ${marginTop} items-center justify-center gap-2 sm:gap-3.5 px-4`}
    >
      <span
        aria-hidden="true"
        className="flex-[0_1_35%] h-1 rounded bg-gradient-fade-left"
      ></span>

      <p className="-skew-x-12 font-extrabold text-base sm:text-lg md:text-2xl text-primary-300 text-center whitespace-nowrap">
        {title}
      </p>

      <span
        aria-hidden="true"
        className="flex-[0_1_35%] h-1 rounded bg-gradient-fade-right"
      ></span>
    </div>
  );
};
