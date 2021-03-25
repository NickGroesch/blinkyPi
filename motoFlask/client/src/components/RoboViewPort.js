import { useState } from "react"

export default function ControlStick({ chirality }) {
    return (
        <svg viewbox="0 0 100 100">
            <g className="bubble">
                <ellipse cx="200" cy="100" rx="180" ry="80" fill="goldenrod" stroke="purple"></ellipse>
            </g>
        </svg>
    )
}