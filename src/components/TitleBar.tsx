interface TitleBarProps {
  title: string;
  marginTop: string;
}

export const TitleBar = ({ title, marginTop }: TitleBarProps) => {
  return (
    <div
      className={`flex w-full ${marginTop} items-center justify-center px-4`}
    >
      <div className="rounded-md w-[20%] sm:w-[30%] md:w-[35%] h-1 bg-linear-to-r from-cyan-600 to-cyan-950"></div>

      <p className="-skew-x-12 font-bold text-base sm:text-lg md:text-xl text-cyan-300 mx-2 sm:mx-3 text-center whitespace-nowrap">
        {title}
      </p>

      <div className="rounded-md w-[20%] sm:w-[30%] md:w-[35%] h-1 bg-linear-to-r from-cyan-950 to-cyan-600"></div>
    </div>
  );
};
