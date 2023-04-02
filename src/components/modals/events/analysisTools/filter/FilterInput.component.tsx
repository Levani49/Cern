export default function FilterInput(): JSX.Element {
  return (
    <div className="relative flex flex-wrap items-center w-full">
      <div className="rounded-t-sm border flex justify-center border-transparentGray w-8 mb-[-1px] py-[0.1rem] px-[0.25rem]">
        <span className="text-sm">φ</span>
      </div>
      <input className="text-light flex-grow ml-[-3px] mt-[1px] w-24 rounded-t-sm text-sm border border-transparentGray bg-transparentLight py-[0.1rem] px-[0.25rem] outline-none md:flex-grow-0" />
    </div>
  );
}
