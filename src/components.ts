import "cesium/Build/Cesium/Widgets/widgets.css";
import "./app.css";
import { Cartesian3, Viewer } from "cesium";


const options : Viewer.ConstructorOptions = {
    sceneModePicker: false,
    baseLayerPicker: false,
    timeline: false,
    animation: false,
    fullscreenButton: false,
    selectionIndicator: false,
    infoBox: false
};

export const viewer = new Viewer('cesium-container', options);

export const positions: Cartesian3[] = [];
