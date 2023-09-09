import { uid } from "#/utils/uid.util";
import { TreeNode } from "#/constants/geometryTree";
import { BEAM_PIPE } from "#/constants/tree/main-components/beam-pipe";
import { CALORIMETRY } from "#/constants/tree/main-components/calorimetry";
import { FORWARD_SHIELDING } from "#/constants/tree/main-components/forward-shielding";
import { INNER_DETECTOR } from "#/constants/tree/main-components/innerDetector";
import { ITK } from "#/constants/tree/main-components/itk";
import { MAGNET_SYSTEMS } from "#/constants/tree/main-components/magnetSystems";
import { MUON_SPECTROMETER } from "#/constants/tree/main-components/muon-spectrometer";
import { PLATFORMS } from "#/constants/tree/main-components/platforms";
import { SERVICES } from "#/constants/tree/main-components/services";

export const MAIN_COMPONENTS: TreeNode = {
  id: uid(),
  name: "main components",
  state: "partialyLoaded",
  showChildren: true,
  children: [
    MAGNET_SYSTEMS,
    INNER_DETECTOR,
    ITK,
    CALORIMETRY,
    MUON_SPECTROMETER,
    FORWARD_SHIELDING,
    SERVICES,
    PLATFORMS,
    BEAM_PIPE,
  ],
};
