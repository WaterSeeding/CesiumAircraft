import "./app.css";
import * as Cesium from "cesium";
import * as dat from "dat.gui";
import { viewer } from "./main";
import { createModel, flyModel } from "./model";

let targetRef: any = {
  getValue: (): any => {
    return null;
  },
};

const gui = new dat.GUI({ name: "Cesium GUI", autoPlace: true });
gui.domElement.id = "gui";

let guiParams: { [key: string]: any } = {
  type: "cesium",
  show: true,
  runAnimations: true,
};

let listenShow = gui.add(guiParams, "show");
listenShow.onChange(() => {
  changeModel(guiParams, targetRef);
});

let runAnimationsShow = gui.add(guiParams, "runAnimations");
runAnimationsShow.onChange(() => {
  changeModel(guiParams, targetRef);
});

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

const changeModel = (guiParams: any, targetRef: any) => {
  let modelEntity = targetRef.getValue() as Cesium.Entity;
  if (modelEntity) {
    let modelGraphics = modelEntity.model;
    modelGraphics.show = guiParams.show;
    modelGraphics.runAnimations = guiParams.runAnimations;
  }
};
