import React from "react"
import ControlStick from "./ControlStick"

export default function Mask() {
    return (
        <div style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            zIndex: 1
        }}>
            <svg
                // width="1000"
                // height="600"
                viewBox="0 0 1000 600"
                preserveAspectRatio="none"
            >
                <path d="M 0 0 
                    L 1000 0 
                    L 1000 600 
                    L 800 600 
                    L 800 100 
                    L 200 100 
                    L 200 600
                    L 0 600
                    L 0 0"
                    fill="grey"
                />
                <ControlStick
                    offsetX={0}
                    offsetY={0}
                    stickType="Vertical"
                />
                <ControlStick
                    offsetX={800}
                    offsetY={0}
                    stickType="Horizontal"
                />
                <ControlStick
                    offsetX={0}
                    offsetY={200}
                    stickType="Vertical"
                />
                <ControlStick
                    offsetX={800}
                    offsetY={200}
                    stickType="Vertical"
                />
            </svg>
        </div>
    )
}