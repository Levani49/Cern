import TracerLogo from '../../assets/images/tracer-logo.png';

export default function Logo(): JSX.Element {
  return (
    <div className="absolute bottom-[1px] left-5 select-none">
      <div className="uppercase font-medium text-light cursor-pointer h-16 flex justify-center">
        <img src={TracerLogo} alt="logo" height={65} width={100} />
      </div>
    </div>
  );
}
