interface titleBarProps {
  title: string;
  marginTop: string;
}

export const TitleBar = ({ title, marginTop }: titleBarProps) => {
  return (
    <>
      <div className="">
        <div className={`flex w-full ${marginTop} items-center justify-center`}>
          <div className="rounded-md w-[35%] h-1 bg-linear-to-r from-cyan-600 to-cyan-950"></div>

          <p className="-skew-x-12 font-bold text-xl text-cyan-300 ml-3 mr-3">
            {title}
          </p>
          <div className="rounded-md w-[35%] h-1 bg-linear-to-r from-cyan-950 to-cyan-600"></div>
        </div>
      </div>
    </>
  );
};
