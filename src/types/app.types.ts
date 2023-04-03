type ModelInfo = {
  id: string;
  name: string;
  cutType: ModelCut;
  opacity: number;
  wireframe: boolean;
};
export type Employee = { id: string; name: string; src: string; role: string };
export type SVGIcon = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
export type DroneTypes = 'idle' | 'circle' | 'helix' | 'rocket' | 'zoom' | 'fly' | 'z0';
export type ReactChildren = React.ReactNode | React.ReactNode[];
export type emptyFunc = () => void;
export type CurrentAnalysisTool = 'algorithm' | 'filter' | 'info';
export type ModelCut = '-cut1' | '-cut2' | '-cut3' | '-cut4' | null;
export type ModelLoadingStates = 'idle' | 'loading' | 'failed';
export type selectedModel = ModelInfo | null;

export interface ActiveModel {
  uid: string;
  name: string;
  modelPath: string;
}
