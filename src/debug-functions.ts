import { positions, viewer } from "./components";

export function AddControls()
{
    const removeAllButton = document.getElementById("remove-all");

    removeAllButton.addEventListener("click", () => {
        viewer.entities.removeAll();
    });

    const savePolygonButton = document.getElementById("save-polygon");
    savePolygonButton.addEventListener("click", () => {
        positions.length = 0;
    });
}
