import { Cartesian3, Color } from "cesium";
import { drawPoint, drawPolygon, drawPolyline } from "./draw";
import { viewer } from "./components";

export function updatePoint(xyz: Cartesian3, color: Color, id: string) : void
{
    viewer.entities.removeById(id);
    drawPoint(xyz, color, id);
}

export function updatePolygon(positions: Cartesian3[], color: Color, id: string) : void
{
    viewer.entities.removeById(id);
    drawPolygon(positions, color, id);
}

export function updatePolyline(positions: Cartesian3[], color: Color, id: string) : void
{
    viewer.entities.removeById(id);
    drawPolyline(positions, color, id);
}
