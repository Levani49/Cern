import { useMemo } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectModelsLoadingState } from '../../../features/model/modelSlice';

import { selectGeometryTree } from '../../../features/tree/treeSlice';

import RecursiveTree from '../recursiveTree/RecursiveTree.component';

export default function Tree(): JSX.Element {
  const isLoading = useAppSelector(selectModelsLoadingState);
  const geometryTree = useAppSelector(selectGeometryTree);

  const disablePointerEvents = isLoading === 'loading' ? 'pointer-events-none' : null;

  const GeometriesTree = useMemo(() => {
    return <RecursiveTree tree={geometryTree} />;
  }, [geometryTree]);

  return <ul className={`select-none  ${disablePointerEvents}`}>{GeometriesTree}</ul>;
}
