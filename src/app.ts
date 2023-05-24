import { ScreenSpaceEventHandler, ScreenSpaceEventType, defined, Color } from "cesium";
import { positions, viewer } from "./components";
import { AddControls } from "./debug-functions";
import { drawPoint, drawPolygon, drawPolyline } from "./draw";
import { updatePoint, updatePolygon, updatePolyline } from "./update";

AddControls();

viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
    ScreenSpaceEventType.LEFT_DOUBLE_CLICK
);

const mapEventHandler = new ScreenSpaceEventHandler(viewer.canvas);

// MOVE
mapEventHandler.setInputAction((event: any) =>
{
    if (!defined(event.startPosition))
    {
        return;
    }

    const ray = viewer.camera.getPickRay(event.startPosition);
    const xyz = viewer.scene.globe.pick(ray, viewer.scene);

    if (!defined(xyz))
    {
        return;
    }

    if (viewer.entities.getById("vertex") == null)
    {
        drawPoint(xyz, Color.SALMON, "vertex");
    }
    else
    {
        updatePoint(xyz, Color.SALMON, "vertex");
    }

    if (positions.length > 1)
    {
        if (viewer.entities.getById("line") == null)
        {
            drawPolyline([positions.at(0), xyz, positions.at(-1)], Color.GREY, "line");
        }
        else
        {
            updatePolyline([positions.at(0), xyz, positions.at(-1)], Color.GREY, "line");
        }
    }
}, ScreenSpaceEventType.MOUSE_MOVE);

// CLICK
mapEventHandler.setInputAction((event: any) =>
{
    if (!defined(event.position))
    {
        return;
    }

    const ray = viewer.camera.getPickRay(event.position);
    const xyz = viewer.scene.globe.pick(ray, viewer.scene);

    if (!defined(xyz))
    {
        return;
    }
    positions.push(xyz);

    drawPoint(xyz, Color.MEDIUMPURPLE);
    if (viewer.entities.getById("polygon") == null)
    {
        drawPolygon(positions, Color.AQUAMARINE, "polygon");
    }
    else
    {
        updatePolygon(positions, Color.AQUAMARINE, "polygon");
    }

}, ScreenSpaceEventType.LEFT_CLICK);
