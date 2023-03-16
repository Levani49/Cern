/**
 *
 */
export default function Logo(): JSX.Element {
  return (
    <div className="absolute bottom-[1px] left-1">
      <div className="uppercase font-medium text-light cursor-pointer h-16 flex justify-center">
        <link
          rel="preload"
          href="https://tracer-evd-mc.web.cern.ch/css/images/Tracer-Logo2022.png"
          as="image"
        />
        <img
          src="https://tracer-evd-mc.web.cern.ch/css/images/Tracer-Logo2022.png"
          alt="logo"
          height={65}
          width={100}
        />
      </div>
    </div>
  );
}
