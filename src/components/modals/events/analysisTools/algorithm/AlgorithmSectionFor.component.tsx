import AlgorithmCheckBox from "./AlgorithmCheckBox.componetn";

interface Props {
  title: string;
  algorithmsList: string[];
}

/**
 *
 * @param root0
 * @param root0.title
 * @param root0.algorithmsList
 */
export default function AlgorithmSectionFor({
  title,
  algorithmsList,
}: Props): JSX.Element {
  const innerHtml = algorithmsList.map((algorithm) => {
    return <AlgorithmCheckBox key={algorithm} label={algorithm} />;
  });
  return (
    <>
      <h3 className="text-blue uppercase text-sm">{title}</h3>
      <div className="flex flex-col gap-1">{innerHtml}</div>
    </>
  );
}
