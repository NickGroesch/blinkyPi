import { useState } from "react"

export default function ControlStick({ chirality }) {
    return (
        <svg viewbox="0 0 100 100">
            <g className="analog-stick-bounding-box">

                <ellipse cx="50.7" cy="56.4" rx="49.9" ry="48.1" stroke="white"></ellipse>
                <g className={`analog-stick analog-stick-${chirality}`}
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
                </g>
            </g>
        </svg>
    )
}