import { useState } from "react"
import Joy from "./Joy"
import VerticalTrack from "./VerticalTrack"
import HorizontalTrack from "./HorizontalTrack"
import TwoDTrack from "./TwoDTrack"

export default function ControlStick({ offsetY, offsetX, valY, setValY, valX, setValX }) {
    return (
        <g>
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
        </g>
    )
}