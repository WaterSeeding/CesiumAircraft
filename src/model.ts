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

  // console.log("guiParams", guiParams);
  let modelEntity = viewer.entities.add({
    name: url,
    position: position,
    orientation: orientationProperty,
    model: {
      show: guiParams.show,
      uri: url,
      scale: guiParams.scale,
      maximumScale: guiParams.maximumScale,
      minimumPixelSize: guiParams.minimumPixelSize,
      incrementallyLoadTextures: guiParams.incrementallyLoadTextures,
      runAnimations: guiParams.runAnimations,
      clampAnimations: guiParams.clampAnimations,
      shadows: new Cesium.ConstantProperty(Number(guiParams.shadows)),
      silhouetteSize: guiParams.silhouetteSize,
      silhouetteColor: new Cesium.ConstantProperty(
        Cesium.Color.fromCssColorString(guiParams.silhouetteColor)
      ),
      color: new Cesium.ConstantProperty(
        Cesium.Color.fromCssColorString(guiParams.color)
      ),
      colorBlendMode: new Cesium.ConstantProperty(
        Number(guiParams.colorBlendMode)
      ),
      colorBlendAmount: guiParams.colorBlendAmount,
      imageBasedLightingFactor: new Cesium.ConstantProperty(
        new Cesium.Cartesian2(
          guiParams.imageBasedLightingFactor_x,
          guiParams.imageBasedLightingFactor_y
        )
      ),
      // lightColor: new Cesium.ConstantProperty(
      //   Cesium.Color.fromCssColorString(guiParams.lightColor)
      // ),
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
    .then(() => {
      viewer.trackedEntity = targetEntity;
    })
    .catch(() => {});
};

export const changeModel = (guiParams: any, targetRef: any) => {
  let modelEntity = targetRef.getValue() as Cesium.Entity;
  // console.log("guiParams", guiParams);
  if (modelEntity) {
    let modelGraphics = modelEntity.model;
    modelGraphics.show = guiParams.show;
    modelGraphics.scale = guiParams.scale;
    modelGraphics.maximumScale = guiParams.maximumScale;
    modelGraphics.minimumPixelSize = guiParams.minimumPixelSize;
    modelGraphics.incrementallyLoadTextures =
      guiParams.incrementallyLoadTextures;
    modelGraphics.runAnimations = guiParams.runAnimations;
    modelGraphics.clampAnimations = guiParams.clampAnimations;
    modelGraphics.shadows = new Cesium.ConstantProperty(
      Number(guiParams.shadows)
    );
    modelGraphics.silhouetteSize = guiParams.silhouetteSize;
    modelGraphics.silhouetteColor = new Cesium.ConstantProperty(
      Cesium.Color.fromCssColorString(guiParams.silhouetteColor)
    );
    modelGraphics.color = new Cesium.ConstantProperty(
      Cesium.Color.fromCssColorString(guiParams.color)
    );
    modelGraphics.colorBlendMode = new Cesium.ConstantProperty(
      Number(guiParams.colorBlendMode)
    );
    modelGraphics.colorBlendAmount = guiParams.colorBlendAmount;
    modelGraphics.imageBasedLightingFactor = new Cesium.ConstantProperty(
      new Cesium.Cartesian2(
        guiParams.imageBasedLightingFactor_x,
        guiParams.imageBasedLightingFactor_y
      )
    );
    // modelGraphics.lightColor = new Cesium.ConstantProperty(
    //   Cesium.Color.fromCssColorString(guiParams.lightColor)
    // );
  }
};
