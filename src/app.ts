import "./app.css";
import * as Cesium from "cesium";
import { viewer } from "./main";
import * as dat from "dat.gui";

const gui = new dat.GUI({ name: "Cesium GUI", autoPlace: true });
gui.domElement.id = "gui";

let guiTarget: { [key: string]: any } = {
  type: "cesium",
};

guiTarget["Add a Cesium_Air Model"] = () => {
  createModel("./static/CesiumAir/Cesium_Air.glb", 5000.0);
};

gui.add(guiTarget, "Add a Cesium_Air Model");

const createModel = (url: string, height: number) => {
  viewer.entities.removeAll();

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

  const entity = viewer.entities.add({
    name: url,
    position: position,
    orientation: orientationProperty,
    model: {
      uri: url,
      minimumPixelSize: 128,
      maximumScale: 20000,
    },
  });
  viewer.trackedEntity = entity;
};
