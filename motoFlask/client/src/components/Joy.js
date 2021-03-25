import { useState } from "react"

export default function Joy({ center, name, value }) {
    const chirality = "right" //STUB

    const [dragging, setDragging] = useState(false);
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
    const [origin, setOrigin] = useState({ x: 0, y: 0 });

    const labelX = center[0] + coordinates.x;
    const labelY = center[1] + coordinates.y

    return (
        <g className={`analog-stick analog-stick-${chirality}`}
            data-button={`stick-${chirality}`}
            data-bounding-box={`analog-stick${chirality}-bouding-box`}
            style={{
                cursor: '-webkit-grab',
                fill: 'rgb(0, 159, 214)',
                strokeWidth: 'inherit'
            }}
            transform={`translate(${labelX}, ${labelY})`}
            onMouseDown={e => {
                setOrigin({ x: e.clientX, y: e.clientY });
                setDragging(true);
            }}
            onMouseMove={e => {
                // As long as we haven't let go of the mouse button,
                // we are still dragging.
                if (dragging) {
                    setCoordinates({
                        x: e.clientX - origin.x,
                        y: e.clientY - origin.y,
                    });
                }
            }}
            onMouseUp={() => {
                // We let go of the mouse, ending our drag.
                setDragging(false);
            }}
        >
            <circle cx="50.4" cy="50" r="32.2" stroke="white"></circle>
            <circle cx="50" cy="48.5" r="21.6" stroke="white"></circle>
        </g>
    )
};