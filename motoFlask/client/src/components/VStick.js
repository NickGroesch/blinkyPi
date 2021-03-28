import { useState } from "react"
import Joy from "./Joy"
import VerticalTrack from "./VerticalTrack"

export default function VStick({ offsetY, offsetX, valY, setValY }) {
    const [valX, setValX] = useState(0)//just to make joy happy
    return (
        <g>
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
        </g>
    )
}