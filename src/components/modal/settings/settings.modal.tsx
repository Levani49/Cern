// import useEscapeKeydown from "@hooks/useEscapeKeydown/useEscapeKeydown.hook";

// import Checkbox from "@/components/modal/event/event-objects/Checkbox.component";
// import Slider from "@/components/slider/slider.component";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import {
  selectAmbientLightIntensity,
  selectDirectionalLightIntensity,
  selectRotationSpeed,
  setAmbientLightIntensity,
  setControlRotationSpeed,
  setDirectionalLightIntensity
} from "@features/camera/cameraSlice";

import SliderHandler from "@components/modal/settings/sliderHandler";

import Modal from "../Modal.component";

export default function SettingsModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const rotationSpeed = useAppSelector(selectRotationSpeed);
  const ambientLightIntensity = useAppSelector(selectAmbientLightIntensity);
  const directionalLightIntensity = useAppSelector(selectDirectionalLightIntensity);

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

  const elements = [
    {
      title: "Camera rotation speed",
      step: 0.01,
      min: 0.1,
      max: 3,
      defaultValue: rotationSpeed,
      value: rotationSpeed,
      onChange: handRotationSpeedupdate
    },
    {
      title: "Brightness",
      step: 0.001,
      min: 0.1,
      max: 1,
      defaultValue: ambientLightIntensity,
      value: ambientLightIntensity,
      onChange: handleBrightnessUpdate
    },
    {
      title: "Contrast",
      step: 0.001,
      min: 0.1,
      max: 1,
      defaultValue: directionalLightIntensity,
      value: directionalLightIntensity,
      onChange: handleContrastUpdate
    }
  ];

  const innerHtml = elements.map((element, idx) => (
    <SliderHandler key={idx + element.title} {...element} />
  ));

  return (
    <Modal
      title="Settings"
      show={true}
      onCloseHandler={(): void => {
        /* */
      }}
    >
      <div className="mt-2 text-xs">{innerHtml}</div>
    </Modal>
  );
}
