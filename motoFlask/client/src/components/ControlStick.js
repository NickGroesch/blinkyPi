import { useState } from "react"
import Joy from "./Joy"
import VerticalTrack from "./VerticalTrack"

export default function ControlStick({ chirality, stickType, className }) {
    const [valY, setValY] = useState(0)
    return (
        <div className={className}>

            <svg viewBox="0 0 200 224">
                {/* <style>
                    .small {font: italic 13px sans-serif; }

                </style> */}
                <g className="analog-stick-bounding-box">
                    {stickType == "2d" ?
                        <ellipse cx="50.7" cy="56.4" rx="49.9" ry="48.1" stroke="white"></ellipse>
                        : <VerticalTrack />}
                    <Joy
                        bounds={[[0, 0], [-50, 50]]}
                        offsetY={0}
                        valY={valY}
                        setValY={setValY}
                        valX={0} />
                    {/* <g className={`analog-stick analog-stick-${chirality}`}
                    data-button={`stick-${chirality}`}
                    data-bounding-box={`analog-stick${chirality}-bouding-box`}
                    style={{
                        cursor: '-webkit-grab',
                        fill: 'rgb(0, 159, 214)',
                        strokeWidth: 'inherit'
                    }}
                    transform="translate(0)">
                    <circle cx="50.4" cy="50" r="32.2" stroke="white"></circle>
                    <circle cx="50" cy="48.5" r="21.6" stroke="white"></circle>
                </g> */}
                </g>
            </svg>
        </div>
    )
}