import AlgorithmCheckBox from "./AlgorithmCheckBox.componetn";

interface Props {
  title: string;
  algorithmsList: string[];
}

export default function AlgorithmSectionFor({
  title,
  algorithmsList
}: Props): JSX.Element {
  const innerHtml = algorithmsList.map((algorithm) => {
    return <AlgorithmCheckBox key={algorithm} label={algorithm} />;
  });
  return (
    <>
      <h3 className="text-sm uppercase text-accent2">{title}</h3>
      <div className="flex flex-col gap-1">{innerHtml}</div>
    </>
  );
}
