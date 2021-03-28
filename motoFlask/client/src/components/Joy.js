// Inspiration https://dev.to/tvanantwerp/dragging-svgs-with-react-38h6

import { useState } from "react"

export default function Joy({
    offsetX,
    valX,
    setValX,
    offsetY,
    valY,
    setValY,
    bounds,
    joyType }) {
    // console.log(valY)
    const chirality = "right" //STUB

    const [dragging, setDragging] = useState(false);
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
    const [origin, setOrigin] = useState({ x: 0, y: 0 });

    const labelX = coordinates.x
    const labelY = coordinates.y
    const transX = labelX < bounds[0][0] ? bounds[0][0] :
        labelX > bounds[0][1] ? bounds[0][1] :
            labelX
    const transY = labelY < bounds[1][0] ? bounds[1][0] :
        labelY > bounds[1][1] ? bounds[1][1] :
            labelY

    const goHome = () => {
        setValY(0)
        setValX(0)
        setCoordinates({ x: 0, y: 0 })
    }

    return (
        <g
            style={{
                cursor: '-webkit-grab',
                fill: "whitesmoke",
                strokeWidth: 'inherit',
                pointerEvents: "all"
            }}
            transform={`translate(${transX}, ${transY})`}
            onTouchStart={e => {
                // console.log({
                //     x: e.targetTouches[0].clientX,
                //     y: e.targetTouches[0].clientY
                // })
                setOrigin({
                    x: e.targetTouches[0].clientX,
                    y: e.targetTouches[0].clientY
                });
                setDragging(true);
            }}
            onTouchMove={e => {
                if (dragging) {
                    const thisY = -1 * Math.floor(e.targetTouches[0].clientY - origin.y)
                    const boundY = thisY < bounds[1][0] ? bounds[1][0] :
                        thisY > bounds[1][1] ? bounds[1][1] :
                            thisY

                    const thisX = Math.floor(e.targetTouches[0].clientX - origin.x)
                    const boundX = thisX < bounds[0][0] ? bounds[0][0] :
                        thisX > bounds[0][1] ? bounds[0][1] :
                            thisX

                    setValY(Math.round(boundY / 5))
                    setValX(Math.round(boundX / 5))

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
            {joyType == "Vertical" ?
                <>
                    <ellipse cx={offsetX + 100.8} cy={offsetY + 100} rx="64.4" ry="32.2" stroke="white" fill='rgb(55, 159, 214)' />
                    <ellipse cx={offsetX + 100} cy={offsetY + 97} rx="43.2" ry="20.2" stroke="white" fill='rgb(55, 100 ,222)' />
                    <text x={offsetX + 90} y={offsetY + 100}>{valY}</text>
                </>
                : joyType == "2d" ?
                    <>
                        <ellipse cx={offsetX + 100} cy={offsetY + 100} rx="50.4" ry="50" stroke="white" fill='rgb(55, 159, 214)' />
                        <ellipse cx={offsetX + 100} cy={offsetY + 97} rx="40" ry="38.2" stroke="white" fill='rgb(55, 100,222)' />
                        <text x="45%" y="52%">{valY}</text>
                        <text x="45%" y="45%">{valX}</text>
                    </>
                    : //joyType=="Horizontal"
                    <>
                        <ellipse cx={offsetX + 100} cy={offsetY + 100} rx="32.2" ry="64.4" stroke="white" fill='rgb(55, 159, 214)' />
                        <ellipse cx={offsetX + 100} cy={offsetY + 97} rx="20.2" ry="43.2" stroke="white" fill='rgb(55, 100,222)' />
                        <text x={offsetX + 84} y={offsetY + 100}>{valX}</text>

                    </>}

        </g >
    )
};