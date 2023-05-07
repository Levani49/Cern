import { GeometryState } from '../../../constants/geometryTree';

export interface ParentNodeProps {
  root?: boolean | undefined;
  showChildren: boolean;
  uid: string;
  name: string;
  modelState: GeometryState;
  children: JSX.Element | JSX.Element[];
  nodeEnd?: boolean | undefined;
}

export type MouseEv = React.MouseEvent<HTMLElement, MouseEvent>;
export type IconMouseEv = React.MouseEvent<SVGSVGElement, MouseEvent>;
