import { useState } from "react"
import Joy from "./Joy"
import VerticalTrack from "./VerticalTrack"
import HorizontalTrack from "./HorizontalTrack"
import TwoDTrack from "./TwoDTrack"

export default function HStick({ offsetY, offsetX, valX, setValX }) {
    const [valY, setValY] = useState(0)//useless state, but who cares
    //could we equally mock with setValY=()=>null?
    return (
        <g>
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
        </g>

    )
}