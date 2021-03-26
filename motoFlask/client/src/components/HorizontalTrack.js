import { useState } from "react"

export default function VerticalTrack({ offsetX, offsetY }) {
    return (
        <ellipse cx={offsetX + 101.4} cy={offsetY + 100} rx="90" ry="21.8" stroke="white"></ellipse>
    );
};