/**
 *
 */
export default function AnalysisTools(): JSX.Element {
  return (
    <div className="flex border-b-[1px] border-white justify-between items-center text-xs">
      <div className="border border-white py-2 px-4 cursor-pointer uppercase">
        filter
      </div>
      <div className="cursor-pointer py-2 px-4 uppercase border border-transparent transition-all hover:border-white">
        algorithms
      </div>
      <div className="cursor-pointer uppercase py-2 px-4 border border-transparent transition-all hover:border-white">
        info
      </div>
    </div>
  );
}
