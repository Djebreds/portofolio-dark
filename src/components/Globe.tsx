import React from 'react';
import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.082, 0.153, 0.247],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.082, 0.153, 0.247],
      markers: [{ location: [-7.031855, 107.51722], size: 0.03 }],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: 1 / 1 }}
      className={className}
      width={844}
      height={1200}
    />
  );
};
