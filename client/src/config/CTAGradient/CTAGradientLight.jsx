import React, { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

const CTAGradientLight = ({ className = "", style = {} }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;
        const neat = new NeatGradient({
            ref: canvasRef.current,

            colors: [
        {
            color: '#FFFFFF',
            enabled: true,
        },
        {
            color: '#FFFFFF',
            enabled: true,
        },
        {
            color: '#2D5DED',
            enabled: true,
        },
        {
            color: '#7C4DFF',
            enabled: true,
        },
        {
            color: '#2D5DED',
            enabled: true,
        },
        {
            color: '#7C4DFF',
            enabled: true,
        },
    ],
    speed: 5,
    horizontalPressure: 4,
    verticalPressure: 5,
    waveFrequencyX: 4,
    waveFrequencyY: 3,
    waveAmplitude: 2,
    shadows: 4,
    highlights: 7,
    colorBrightness: 1,
    colorSaturation: 0,
    wireframe: false,
    colorBlending: 7,
    backgroundColor: '#00A2FF',
    backgroundAlpha: 1,
    grainScale: 100,
    grainSparsity: 0,
    grainIntensity: 0.05,
    grainSpeed: 0.3,
    resolution: 0.5,
    yOffset: 0,
        });
        return () => neat.destroy();
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="gradient"
            className={`absolute inset-0 w-full h-full z-0 ${className}`}
            style={style}
        />
    );
};

export default CTAGradientLight;
