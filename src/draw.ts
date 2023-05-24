import { Cartesian3, Color, ColorMaterialProperty, Entity, PolygonHierarchy, StripeMaterialProperty } from "cesium";
import { viewer } from "./components";


export function drawPoint(xyz: Cartesian3, color: Color, id?: string) : Entity
{
    return viewer.entities.add({
        id: id,
        position: xyz,
        point: { pixelSize: 10, color: color }
    });
}

export function drawPolygon(positions: Cartesian3[], color: Color, id?: string) : Entity
{
    return viewer.entities.add({
        id: id,
        polygon: {
            hierarchy: new PolygonHierarchy(positions),
            material: new ColorMaterialProperty(color.withAlpha(0.5))
        }
    });
}

export function drawPolyline(positions: Cartesian3[], color: Color, id?: string) : Entity
{
    return viewer.entities.add({
        id: id,
        polyline: {
            positions: positions,
            width: 3,
            material: new StripeMaterialProperty({ evenColor: color, oddColor: Color.TRANSPARENT })
        }
    });
}
