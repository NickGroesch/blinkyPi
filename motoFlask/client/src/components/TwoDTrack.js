import { useState } from "react"

export default function TwoDTrack({ offsetX, offsetY }) {
    return (
        <ellipse cx={offsetX + 101.4} cy={offsetY + 100} rx="90.8" ry="90" stroke="white"></ellipse>
    );
};