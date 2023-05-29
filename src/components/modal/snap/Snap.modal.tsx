import { useRef } from 'react';
import Modal from '../Modal';
import store from '../../../app/store';

export default function SnapModal(): JSX.Element {
  const inputRef = useRef<HTMLInputElement | null>(null);
  console.log(store.getState());

  const handleLoadSnapshot = (): void => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleSaveSnapshot = (): void => {
    const state = store.getState();
    const stateJSON = JSON.stringify(state);
    const blob = new Blob([stateJSON], { type: 'application/json' });
    const timestamp = new Date().toISOString();
    const filename = `${timestamp}-tracer-snapshot.json`;
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (): void => {
        const stateJSON = reader.result as string;
        const newState = JSON.parse(stateJSON);
        store.replaceReducer(() => newState);
      };
      reader.readAsText(file);
    }
    event.target.value = '';
  };

  const closeModalHandler = (): void => {
    console.log('hit');
  };

  return (
    <Modal title="Snapshot" show={true} onCloseHandler={closeModalHandler}>
      <div className="flex flex-col items-center gap-2 pb-2">
        <button className="mt-2 px-6 py-1 bg-green rounded-sm" onClick={handleLoadSnapshot}>
          Load saved snapshot
        </button>
        <input onChange={handleFileChange} ref={inputRef} type="file" hidden accept=".json" />
        <span>- OR -</span>
        <button className="mt-2 px-6 py-1 bg-green rounded-sm" onClick={handleSaveSnapshot}>
          Download snapshot
        </button>
      </div>
    </Modal>
  );
}
