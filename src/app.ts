import "./app.css";
import * as Cesium from "cesium";
import * as dat from "dat.gui";
import { viewer } from "./main";
import { createModel, flyModel, changeModel } from "./model";

let targetRef: any = {
  getValue: (): any => {
    return null;
  },
};

const gui = new dat.GUI({ name: "Cesium GUI", width: 450, autoPlace: true });
gui.domElement.id = "gui";

let guiParams: { [key: string]: any } = {
  show: true,
  scale: 1.0,
  maximumScale: 256,
  minimumPixelSize: 0.0,
  incrementallyLoadTextures: false,
  runAnimations: true,
  clampAnimations: true,
  shadows: Cesium.ShadowMode.ENABLED,
  silhouetteSize: 0.0,
  silhouetteColor: "#0000ff",
  color: "#ffffff",
  colorBlendMode: Cesium.ColorBlendMode.HIGHLIGHT,
  colorBlendAmount: 0.5,
  imageBasedLightingFactor_x: 1.0,
  imageBasedLightingFactor_y: 1.0,
  lightColor: "#ffffff",
};

guiParams["Add a Cesium_Air"] = () => {
  let modelEntity = targetRef.getValue();
  if (modelEntity) {
    viewer.entities.removeAll();
  }
  createModel(
    viewer,
    "./static/CesiumAir/Cesium_Air.glb",
    5000.0,
    guiParams,
    targetRef
  );
};

guiParams["Fly to Cesium_Air"] = () => {
  let modelEntity = targetRef.getValue();
  if (modelEntity) {
    flyModel(viewer, modelEntity);
  }
};

gui.add(guiParams, "Add a Cesium_Air");
gui.add(guiParams, "Fly to Cesium_Air");

let listen_show = gui.add(guiParams, "show");
listen_show.onChange(() => {
  changeModel(guiParams, targetRef);
});

let listen_scale = gui
  .add(guiParams, "scale")
  .min(1)
  .max(guiParams.maximumScale)
  .step(1);
listen_scale.onChange(() => {
  changeModel(guiParams, targetRef);
});

let listen_incrementallyLoadTextures = gui.add(
  guiParams,
  "incrementallyLoadTextures"
);
listen_incrementallyLoadTextures.onChange(() => {
  changeModel(guiParams, targetRef);
});

let listen_runAnimations = gui.add(guiParams, "runAnimations");
listen_runAnimations.onChange(() => {
  changeModel(guiParams, targetRef);
});

let listen_clampAnimations = gui.add(guiParams, "clampAnimations");
listen_clampAnimations.onChange(() => {
  changeModel(guiParams, targetRef);
});

let listen_shadows = gui.add(guiParams, "shadows", {
  "Cesium.ShadowMode.DISABLED": Cesium.ShadowMode.DISABLED,
  "Cesium.ShadowMode.ENABLED": Cesium.ShadowMode.ENABLED,
  "Cesium.ShadowMode.CAST_ONLY": Cesium.ShadowMode.CAST_ONLY,
  "Cesium.ShadowMode.RECEIVE_ONLY": Cesium.ShadowMode.RECEIVE_ONLY,
});
listen_shadows.onChange(() => {
  changeModel(guiParams, targetRef);
});

let listen_silhouetteSize = gui
  .add(guiParams, "silhouetteSize")
  .min(0)
  .max(10)
  .step(0.1);
listen_silhouetteSize.onChange(() => {
  changeModel(guiParams, targetRef);
});

let listen_silhouetteColor = gui.addColor(guiParams, "silhouetteColor");
listen_silhouetteColor.onChange(() => {
  changeModel(guiParams, targetRef);
});

let listen_color = gui.addColor(guiParams, "color");
listen_color.onChange(() => {
  changeModel(guiParams, targetRef);
});

let listen_colorBlendMode = gui.add(guiParams, "colorBlendMode", {
  "Cesium.ColorBlendMode.HIGHLIGHT": Cesium.ColorBlendMode.HIGHLIGHT,
  "Cesium.ColorBlendMode.REPLACE": Cesium.ColorBlendMode.REPLACE,
  "Cesium.ColorBlendMode.MIX": Cesium.ColorBlendMode.MIX,
});
listen_colorBlendMode.onChange(() => {
  changeModel(guiParams, targetRef);
});

let listen_colorBlendAmount = gui
  .add(guiParams, "colorBlendAmount")
  .min(0)
  .max(1.0)
  .step(0.1);
listen_colorBlendAmount.onChange(() => {
  changeModel(guiParams, targetRef);
});

let imageBasedLightingFactor_folder = gui.addFolder("imageBasedLightingFactor");
let listen_imageBasedLightingFactor_x = imageBasedLightingFactor_folder
  .add(guiParams, "imageBasedLightingFactor_x")
  .min(0)
  .max(1.0)
  .step(0.1);
listen_imageBasedLightingFactor_x.onChange(() => {
  changeModel(guiParams, targetRef);
});
let listen_imageBasedLightingFactor_y = imageBasedLightingFactor_folder
  .add(guiParams, "imageBasedLightingFactor_y")
  .min(0)
  .max(1.0)
  .step(0.1);
listen_imageBasedLightingFactor_y.onChange(() => {
  changeModel(guiParams, targetRef);
});

let listen_lightColor = gui.addColor(guiParams, "lightColor");
listen_lightColor.onChange(() => {
  changeModel(guiParams, targetRef);
});
