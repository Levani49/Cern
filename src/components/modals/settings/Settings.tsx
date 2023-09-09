import {
  selectAmbientLightIntensity,
  selectDirectionalLightIntensity,
  selectRotationSpeed,
  setAmbientLightIntensity,
  setControlRotationSpeed,
  setDirectionalLightIntensity,
} from "#/store/features/cameraSlice";
import {
  selectAxis,
  selectGrid,
  selectStats,
  setUtilsModal,
  showAxis,
  showGrid,
  showRendererStats,
} from "#/store/features/globalsSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import Modal from "#/components/modals/Modal.component";
import SettingCheckBox from "#/components/modals/settings/SettingsCheckbox";
import SettingsSlider from "#/components/modals/settings/SettingsSlider";
import useEscapeKeydown from "#/hooks/useEscapeKeydown.hook";

export default function SettingsMod() {
  const dispatch = useAppDispatch();
  const rotationSpeed = useAppSelector(selectRotationSpeed);
  const ambientLightIntensity = useAppSelector(selectAmbientLightIntensity);
  const directionalLightIntensity = useAppSelector(selectDirectionalLightIntensity);
  const statsIsActive = useAppSelector(selectStats);
  const axisIsActive = useAppSelector(selectAxis);
  const gridIsActive = useAppSelector(selectGrid);

  useEscapeKeydown(() => {
    dispatch(setUtilsModal(false));
  });

  const handRotationSpeedupdate = (e: number | number[]): void => {
    if (typeof e !== "object") {
      dispatch(setControlRotationSpeed(e));
    }
  };

  const handleBrightnessUpdate = (e: number | number[]): void => {
    if (typeof e !== "object") {
      dispatch(setAmbientLightIntensity(e));
    }
  };

  const handleContrastUpdate = (e: number | number[]): void => {
    if (typeof e !== "object") {
      dispatch(setDirectionalLightIntensity(e));
    }
  };

  const handleAxisToggle = (): void => {
    dispatch(showAxis(!axisIsActive));
  };

  const handleGridToggle = (): void => {
    dispatch(showGrid(!gridIsActive));
  };

  const handleStatsToggle = (): void => {
    dispatch(showRendererStats(!statsIsActive));
  };

  const handleCloseModal = (): void => {
    dispatch(setUtilsModal(false));
  };

  const sliderElements = [
    {
      title: "Camera rotation speed",
      step: 0.01,
      min: 0.1,
      max: 3,
      defaultValue: rotationSpeed,
      value: rotationSpeed,
      onChange: handRotationSpeedupdate,
    },
    {
      title: "Brightness",
      step: 0.001,
      min: 0.1,
      max: 1,
      defaultValue: ambientLightIntensity,
      value: ambientLightIntensity,
      onChange: handleBrightnessUpdate,
    },
    {
      title: "Contrast",
      step: 0.001,
      min: 0.1,
      max: 1,
      defaultValue: directionalLightIntensity,
      value: directionalLightIntensity,
      onChange: handleContrastUpdate,
    },
  ];

  const checkboxElements = [
    {
      title: "Axis",
      id: "axis",
      checked: axisIsActive,
      onClick: handleAxisToggle,
    },
    {
      title: "Grid",
      id: "grid",
      checked: gridIsActive,
      onClick: handleGridToggle,
    },
    {
      title: "Stats",
      id: "stats",
      checked: statsIsActive,
      onClick: handleStatsToggle,
    },
  ];

  const sliderHtml = sliderElements.map((element, idx) => (
    <SettingsSlider key={idx + element.title} {...element} />
  ));

  const checkboxHtml = checkboxElements.map((element, idx) => (
    <SettingCheckBox key={element.title + idx} {...element} />
  ));

  return (
    <Modal
      id="settings"
      title="Settings"
      show={true}
      onCloseHandler={handleCloseModal}
    >
      <div className="mt-2 flex items-center justify-between px-2 text-xs">
        {checkboxHtml}
      </div>
      <div className="mt-3 text-xs">{sliderHtml}</div>
    </Modal>
  );
}
