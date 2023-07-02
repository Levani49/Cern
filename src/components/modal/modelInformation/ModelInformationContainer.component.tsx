import { selectModelModal } from "@/features/model/modelSlice";

import { useAppSelector } from "@store/hooks";

import ModelInfo from "@components/modal/modelInformation/ModelInfo.component";

export default function ModelInformationContainer(): JSX.Element {
  const show = useAppSelector(selectModelModal);

  return <>{show && <ModelInfo />}</>;
}
