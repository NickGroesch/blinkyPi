import { useState } from "react"
import Joy from "./Joy"
import VerticalTrack from "./VerticalTrack"

export default function ControlStick({ chirality, stickType, className }) {
    return (
        <div className={className}>

            <svg viewBox="0 0 100 100">
                <g className="analog-stick-bounding-box">
                    {stickType == "2d" ?
                        <ellipse cx="50.7" cy="56.4" rx="49.9" ry="48.1" stroke="white"></ellipse>
                        : <VerticalTrack />}
                    <Joy center={[0, 0]} />
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