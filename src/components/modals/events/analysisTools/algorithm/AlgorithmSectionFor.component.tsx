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
    return (
      <h1 className="text-xs" key={algorithm}>
        {algorithm}
      </h1>
    );
  });
  return (
    <>
      <h3 className="text-blue uppercase text-sm">{title}</h3>
      <div className="flex flex-col gap-1 pt-1">{innerHtml}</div>
    </>
  );
}
