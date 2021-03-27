import React, { useState } from "react"
import ControlStick from "./ControlStick"

export default function Mask() {
    const [tracks, setTracks] = useState([0, 0])
    // const handleTrackChange = () => {
    //     API.
    // }



    return (
        <div style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            zIndex: 1
        }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '100vw', height: '100vh' }}
                // width="1000"
                // height="600"
                viewBox="0 0 1000 500"
                preserveAspectRatio="none"
            // preserveAspectRatio="xMaxYMin"
            >
                <path d="M 0 0 
                    L 1000 0 
                    L 1000 500 
                    L 800 500 
                    L 800 100 
                    L 200 100 
                    L 200 500
                    L 0 500
                    L 0 0"
                    fill="grey"
                />
                <text x="450" y="50"> REACT ROVER</text>
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