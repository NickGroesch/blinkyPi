// Inspiration https://dev.to/tvanantwerp/dragging-svgs-with-react-38h6

import { useState } from "react"

export default function Joy({ center }) {
    const chirality = "right" //STUB

    const [dragging, setDragging] = useState(false);
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
    const [origin, setOrigin] = useState({ x: 0, y: 0 });

    const labelX = center[0] + coordinates.x;
    const labelY = center[1] + coordinates.y

    return (
        <g
            // className={`analog-stick analog-stick-${chirality}`}
            //     data-button={`stick-${chirality}`}
            //     data-bounding-box={`analog-stick${chirality}-bouding-box`}
            style={{
                cursor: '-webkit-grab',
                fill: 'rgb(0, 159, 214)',
                strokeWidth: 'inherit',
                pointerEvents: "all"
            }}
            transform={`translate(${labelX}, ${labelY})`}
            onTouchStart={e => {
                console.log("that tickles", origin, coordinates, dragging)
                console.log(e)
                setOrigin({
                    x: e.targetTouches[0].clientX,
                    y: e.targetTouches[0].clientY
                });
                setDragging(true);
            }}
            onTouchMove={e => {
                if (dragging) {
                    console.log(e.targetTouches[0])
                    console.log("ha-ha", origin, coordinates, dragging)
                    setCoordinates({
                        x: e.targetTouches[0].clientX - origin.x,
                        y: e.targetTouches[0].clientY - origin.y,
                    });
                }
            }}
            onTouchEnd={() => {
                console.log("what a relief", origin, coordinates, dragging)
                setDragging(false);
            }}
        >
            <circle cx="50.4" cy="50" r="32.2" stroke="white"></circle>
            <circle cx="50" cy="48.5" r="21.6" stroke="white"></circle>
        </g>
    )
};