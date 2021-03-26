import { useState } from "react"
import Joy from "./Joy"
import VerticalTrack from "./VerticalTrack"
import HorizontalTrack from "./HorizontalTrack"
import TwoDTrack from "./TwoDTrack"

export default function ControlStick({ stickType, offsetY, offsetX }) {
    const [valY, setValY] = useState(0)
    const [valX, setValX] = useState(0)
    return (
        <g>
            {stickType == "2d" ? //I feel like I am missing a composable approach here
                <>
                    <TwoDTrack
                        offsetX={offsetX}
                        offsetY={offsetY}
                    />
                    <Joy joyType="2d"
                        bounds={[[-50, 50], [-50, 50]]}
                        valX={valX}
                        setValX={setValX}
                        offsetX={offsetX}
                        valY={valY}
                        setValY={setValY}
                        offsetY={offsetY}
                    />
                </>
                : stickType == "Vertical" ? <>
                    <VerticalTrack
                        offsetX={offsetX}
                        offsetY={offsetY}
                    />
                    <Joy joyType="Vertical"
                        valX={0}
                        setValX={setValX}
                        offsetX={offsetX}
                        bounds={[[0, 0], [-50, 50]]}
                        valY={valY}
                        setValY={setValY}
                        offsetY={offsetY}
                    />
                </>
                    :
                    <>
                        <HorizontalTrack
                            offsetX={offsetX}
                            offsetY={offsetY}
                        />
                        <Joy joyType="Horizontal"
                            valX={valX}
                            setValX={setValX}
                            offsetX={offsetX}
                            bounds={[[-50, 50], [0, 0]]}
                            valY={0}
                            setValY={setValY}
                            offsetY={offsetY}
                        />
                    </>
            }
        </g>

    )
}