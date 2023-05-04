// import { useIntl } from 'react-intl';

// import Checkbox from './Checkbox.component';
// import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
// import { selectEventParameters, setEventParameters } from '../../../../features/event/eventSlice';

// export default function EventsResultsToggler(): JSX.Element {
//   const dispatch = useAppDispatch()
//   const eventParameters = useAppSelector(selectEventParameters)

//   const intl = useIntl();
//   const tracks = intl.formatMessage({ id: 'modal.events.tracks' });
//   const jets = intl.formatMessage({ id: 'modal.events.jets' });
//   const met = intl.formatMessage({ id: 'modal.events.met' });
//   const cells = intl.formatMessage({ id: 'modal.events.cells' });
//   const clusters = intl.formatMessage({ id: 'modal.events.clusters' });
//   const hits = intl.formatMessage({ id: 'modal.events.hits' });

//   const handleTracks = (): void => {
//     dispatch(setEventParameters({
//       ...eventParameters,
//       tracks: !eventParameters.tracks
//     }))
//   }

//   const handleJets = (): void => {
//     dispatch(setEventParameters({
//       ...eventParameters,
//       jets: !eventParameters.jets
//     }))
//   }

//   const handleMet = (): void => {
//     dispatch(setEventParameters({
//       ...eventParameters,
//       met: !eventParameters.met
//     }))
//   }

//   const handleCells = (): void => {
//     dispatch(setEventParameters({
//       ...eventParameters,
//       cells: !eventParameters.cells
//     }))
//   }

//   const handleClusters = (): void => {
//     dispatch(setEventParameters({
//       ...eventParameters,
//       clusters: !eventParameters.clusters
//     }))
//   }

//   const handleHits = (): void => {
//     dispatch(setEventParameters({
//       ...eventParameters,
//       hits: !eventParameters.hits
//     }))
//   }

//   return (
//     <div className="grid grid-cols-3  gap-2 justify-items-center">
//       <Checkbox checked={eventParameters.tracks} onClick={handleTracks} title={tracks} />
//       <Checkbox checked={eventParameters.jets} onClick={handleJets} title={jets} className="relative left-[-12px]" />
//       <Checkbox checked={eventParameters.met} onClick={handleMet} title={met} />
//       <Checkbox checked={eventParameters.cells} onClick={handleCells} title={cells} className="relative left-[-5px]" />
//       <Checkbox checked={eventParameters.clusters} onClick={handleClusters} title={clusters} />
//       <Checkbox checked={eventParameters.hits} onClick={handleHits} title={hits} />
//     </div>
//   );
// }

import { useIntl } from 'react-intl';

import Checkbox from './Checkbox.component';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { selectEventParameters, setEventParameters } from '../../../../features/event/eventSlice';

export default function EventsResultsToggler(): JSX.Element {
  const dispatch = useAppDispatch();
  const eventParameters = useAppSelector(selectEventParameters);

  const intl = useIntl();
  const eventLabels = [
    { key: 'tracks', label: 'modal.events.tracks' },
    { key: 'jets', label: 'modal.events.jets' },
    { key: 'met', label: 'modal.events.met' },
  ];

  const handleEventToggle = (key: string) => () => {
    dispatch(
      setEventParameters({
        ...eventParameters,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        [key]: !eventParameters[key],
      }),
    );
  };

  return (
    <div className="grid grid-cols-3 gap-2 justify-items-center">
      {eventLabels.map(({ key, label }, index) => (
        <Checkbox
          key={key}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          checked={eventParameters[key]}
          onClick={handleEventToggle(key)}
          title={intl.formatMessage({ id: label })}
          className={
            index === 1 ? 'relative left-[-12px]' : index === 3 ? 'relative left-[-5px]' : ''
          }
        />
      ))}
    </div>
  );
}
