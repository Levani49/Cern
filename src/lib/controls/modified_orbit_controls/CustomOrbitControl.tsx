//!
//! This is exact clone of OrbitControls of @react-three/drei package
//! What I have changed is only source of OrbitControls
//! Instead of importing OrbitControls from three-stdlib I cretead
//! My own controls to address the issue with damping and sphericalDelta.
//! Please do not modify this file!
//!
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */
import _extends from "@babel/runtime/helpers/esm/extends";

import { useFrame, useThree } from "@react-three/fiber";
import React, { forwardRef } from "react";

import { OrbitControls as OrbitControls$1 } from "./modified_orbit_controls.js";

const CustomOrbitControl = forwardRef(
  (
    {
      makeDefault,
      camera,
      regress,
      domElement,
      enableDamping = true,
      onChange,
      onStart,
      onEnd,
      ...restProps
    },
    ref
  ) => {
    const invalidate = useThree((state) => state.invalidate);
    const defaultCamera = useThree((state) => state.camera);
    const gl = useThree((state) => state.gl);
    const events = useThree((state) => state.events);
    const setEvents = useThree((state) => state.setEvents);
    const set = useThree((state) => state.set);
    const get = useThree((state) => state.get);
    const performance = useThree((state) => state.performance);
    const explCamera = camera || defaultCamera;
    const explDomElement = domElement || events.connected || gl.domElement;
    const controls = React.useMemo(
      () => new OrbitControls$1(explCamera),
      [explCamera]
    );

    useFrame(() => {
      if (controls.enabled) {
        controls.update();
      }
    }, -1);
    React.useEffect(() => {
      controls.connect(explDomElement);
      return () => void controls.dispose();
    }, [explDomElement, regress, controls, invalidate]);
    React.useEffect(() => {
      const callback = (e) => {
        invalidate();
        if (regress) performance.regress();
        if (onChange) onChange(e);
      };

      const onStartCb = (e) => {
        if (onStart) onStart(e);
      };

      const onEndCb = (e) => {
        if (onEnd) onEnd(e);
      };

      controls.addEventListener("change", callback);
      controls.addEventListener("start", onStartCb);
      controls.addEventListener("end", onEndCb);
      return () => {
        controls.removeEventListener("start", onStartCb);
        controls.removeEventListener("end", onEndCb);
        controls.removeEventListener("change", callback);
      };
    }, [onChange, onStart, onEnd, controls, invalidate, setEvents]);
    React.useEffect(() => {
      if (makeDefault) {
        const old = get().controls;
        set({
          controls,
        });
        return () =>
          set({
            controls: old,
          });
      }
    }, [makeDefault, controls]);
    return /*#__PURE__*/ React.createElement(
      "primitive",
      _extends(
        {
          ref: ref,
          object: controls,
          enableDamping: enableDamping,
        },
        restProps
      )
    );
  }
);

export default CustomOrbitControl;
