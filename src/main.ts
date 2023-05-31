import "cesium/Build/Cesium/Widgets/widgets.css";
import { Ion, Cartesian3, Viewer } from "cesium";

Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwZWQ3OWFlZC1kOTg3LTRlZjctYTAyYy0xNjFmODE1MWE2NGUiLCJpZCI6MjU5LCJpYXQiOjE2ODI5NDYzODh9.DEH4GpqliH-xsDE7h-ZCICtHgnGu32wdSjt4hFqw7lU";

const options: Viewer.ConstructorOptions = {
  infoBox: false,
  selectionIndicator: false,
  shadows: true,
  shouldAnimate: true,
};

export const viewer = new Viewer("cesium-container", options);

export const positions: Cartesian3[] = [];
