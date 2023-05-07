import { GeometryState } from '../../../constants/geometryTree';

export interface ChildNodeProps {
  uid: string;
  name: string;
  modelState: GeometryState;
  nodeEnd?: boolean;
}
