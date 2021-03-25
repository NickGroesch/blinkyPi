// Inspiration https://dev.to/tvanantwerp/dragging-svgs-with-react-38h6

import { useState } from "react"

export default function Joy({ offsetY, valY, setValY, bounds, valX, setValX }) {
    console.log(valY)
    const chirality = "right" //STUB

    const [dragging, setDragging] = useState(false);
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
    const [origin, setOrigin] = useState({ x: 0, y: 0 });

    //const labelX = offset[0] + coordinates.x;
    const labelX = valX//+ coordinates.x; //shutoff horizontal
    const labelY = offsetY + coordinates.y
    // const transX = 
    const transY = labelY < bounds[1][0] ? bounds[1][0] :
        labelY > bounds[1][1] ? bounds[1][1] :
            labelY

    const goHome = () => {
        setValY(0)
        setCoordinates({ x: 0, y: 0 })
    }

    return (
        <g
            style={{
                cursor: '-webkit-grab',
                fill: 'rgb(0, 159, 214)',
                strokeWidth: 'inherit',
                pointerEvents: "all"
            }}
            transform={`translate(${labelX}, ${transY})`}
            onTouchStart={e => {
                console.log({
                    x: e.targetTouches[0].clientX,
                    y: e.targetTouches[0].clientY
                })
                setOrigin({
                    x: e.targetTouches[0].clientX,
                    y: e.targetTouches[0].clientY
                });
                setDragging(true);
            }}
            onTouchMove={e => {
                if (dragging) {
                    const thisY = -1 * Math.floor(e.targetTouches[0].clientY - origin.y)
                    const localY = thisY < bounds[1][0] ? bounds[1][0] :
                        thisY > bounds[1][1] ? bounds[1][1] :
                            thisY
                    setValY(localY)
                    setCoordinates({
                        x: e.targetTouches[0].clientX - origin.x,
                        y: e.targetTouches[0].clientY - origin.y,
                    });
                }
            }}
            onTouchEnd={() => {
                setDragging(false);
                setTimeout(() => goHome(), 200)
            }}
        >
            <ellipse cx="100.8" cy="100" rx="64.4" ry="32.2" stroke="white" fill='rgb(55, 159, 214)'>
                <text color="white">{valY}</text>
            </ellipse>
            <ellipse cx="100" cy="97" rx="43.2" ry="20.2" stroke="white" fill='rgb(55, 100
                ,222)'></ellipse>
        </g >
    )
};