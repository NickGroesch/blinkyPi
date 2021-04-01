import React, { useEffect, useState } from "react"
import ControlStick from "./ControlStick"
import VStick from "./VStick"
import HStick from "./HStick"
export default function Mask() {
    const [rightTrack, setRightTrack] = useState(0)
    const [leftTrack, setLeftTrack] = useState(0)
    const [pan, setPan] = useState(0)
    const [tilt, setTilt] = useState(0)

    useEffect(async () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([rightTrack, leftTrack, pan, tilt]),
        }
        const fetchRes = await fetch(`${process.env.REACT_APP_FLASK_IP}/api`, requestOptions)
        const unpacked = await fetchRes.json()
        console.log(unpacked)
    }, [rightTrack, leftTrack, pan, tilt])

    console.log("emitter", process.env.REACT_APP_ATOMIC_EMITTER_IP)
    console.log("flask", process.env.REACT_APP_FLASK_IP)

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
                <text x="450" y="50"> {leftTrack} REACT ROVER {rightTrack} </text>
                <VStick //Tilt
                    offsetX={0}
                    offsetY={0}
                    valY={tilt}
                    setValY={setTilt}
                    stickType="Vertical"
                />
                <HStick   //Pan
                    offsetX={800}
                    offsetY={0}
                    valX={pan}
                    setValX={setPan}
                    stickType="Horizontal"
                />
                <VStick //left
                    offsetX={0}
                    offsetY={200}
                    valY={leftTrack}
                    setValY={setLeftTrack}
                />
                <VStick //right
                    offsetX={800}
                    offsetY={200}
                    valY={rightTrack}
                    setValY={setRightTrack}
                />
            </svg>
        </div>
    )
}