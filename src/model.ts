import * as Cesium from "cesium";

export const createModel = (
  viewer: Cesium.Viewer,
  url: string,
  height: number,
  guiParams: any,
  targetRef: any
) => {
  const position = Cesium.Cartesian3.fromDegrees(
    -123.0744619,
    44.0503706,
    height
  );
  const heading = Cesium.Math.toRadians(135);
  const pitch = 0;
  const roll = 0;
  const hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
  const orientation = Cesium.Transforms.headingPitchRollQuaternion(
    position,
    hpr
  );
  const orientationProperty = new Cesium.ConstantProperty(orientation);

  let modelEntity = viewer.entities.add({
    name: url,
    position: position,
    orientation: orientationProperty,
    model: {
      show: guiParams.show,
      uri: url,
      scale: 1,
      minimumPixelSize: 128,
    },
  });
  targetRef.getValue = () => {
    return modelEntity;
  };
};

export const flyModel = (
  viewer: Cesium.Viewer,
  targetEntity: Cesium.Entity
) => {
  let headingPitchRange = new Cesium.HeadingPitchRange(
    Cesium.Math.toRadians(0),
    Cesium.Math.toRadians(-45),
    100
  );
  // 视角定位
  let flyResultPromise = viewer.flyTo(targetEntity, {
    duration: 3,
    offset: headingPitchRange,
  });
  flyResultPromise
    .then((response: any) => {
      console.log("Success:", response);
    })
    .then((response: any) => {
      console.log("Success:", response);
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
};