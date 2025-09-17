import { useEffect, useRef } from 'react';

interface CubeVisualizationProps {
    color: 'purple' | 'pink' | 'blue';
}

export function CubeVisualization({ color }: CubeVisualizationProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const colorSchemes = {
        purple: {
            primary: '#9333ea',
            secondary: '#a855f7',
            accent: '#c084fc',
            glow: 'rgba(147, 51, 234, 0.4)'
        },
        pink: {
            primary: '#ec4899',
            secondary: '#f472b6',
            accent: '#fbb6ce',
            glow: 'rgba(236, 72, 153, 0.4)'
        },
        blue: {
            primary: '#3b82f6',
            secondary: '#60a5fa',
            accent: '#93c5fd',
            glow: 'rgba(59, 130, 246, 0.4)'
        }
    };

    const scheme = colorSchemes[color];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let animationId: number;
        let rotationX = 0;
        let rotationY = 0;

        const animate = () => {
            rotationX += 0.01;
            rotationY += 0.015;

            // Update CSS custom properties for 3D transform
            container.style.setProperty('--rotation-x', `${rotationX}rad`);
            container.style.setProperty('--rotation-y', `${rotationY}rad`);

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Glow effect */}
            <div 
                className="absolute inset-0 rounded-lg blur-xl opacity-60"
                style={{ backgroundColor: scheme.glow }}
            />
            
            {/* 3D Cube container */}
            <div
                ref={containerRef}
                className="relative w-full h-full perspective-1000"
                style={{
                    perspective: '1000px',
                    transformStyle: 'preserve-3d'
                }}
            >
                <div 
                    className="relative w-full h-full"
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: `rotateX(var(--rotation-x, 0)) rotateY(var(--rotation-y, 0))`
                    }}
                >
                    {/* Cube faces */}
                    {/* Front face */}
                    <div 
                        className="absolute inset-0 border-2 rounded-lg backdrop-blur-sm"
                        style={{
                            backgroundColor: `${scheme.primary}20`,
                            borderColor: scheme.primary,
                            transform: 'translateZ(100px)'
                        }}
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <div 
                                className="w-16 h-16 rounded-lg"
                                style={{ backgroundColor: scheme.accent }}
                            />
                        </div>
                    </div>

                    {/* Back face */}
                    <div 
                        className="absolute inset-0 border-2 rounded-lg backdrop-blur-sm"
                        style={{
                            backgroundColor: `${scheme.secondary}20`,
                            borderColor: scheme.secondary,
                            transform: 'translateZ(-100px) rotateY(180deg)'
                        }}
                    />

                    {/* Right face */}
                    <div 
                        className="absolute inset-0 border-2 rounded-lg backdrop-blur-sm"
                        style={{
                            backgroundColor: `${scheme.primary}15`,
                            borderColor: scheme.primary,
                            transform: 'rotateY(90deg) translateZ(100px)'
                        }}
                    />

                    {/* Left face */}
                    <div 
                        className="absolute inset-0 border-2 rounded-lg backdrop-blur-sm"
                        style={{
                            backgroundColor: `${scheme.secondary}15`,
                            borderColor: scheme.secondary,
                            transform: 'rotateY(-90deg) translateZ(100px)'
                        }}
                    />

                    {/* Top face */}
                    <div 
                        className="absolute inset-0 border-2 rounded-lg backdrop-blur-sm"
                        style={{
                            backgroundColor: `${scheme.accent}20`,
                            borderColor: scheme.accent,
                            transform: 'rotateX(90deg) translateZ(100px)'
                        }}
                    />

                    {/* Bottom face */}
                    <div 
                        className="absolute inset-0 border-2 rounded-lg backdrop-blur-sm"
                        style={{
                            backgroundColor: `${scheme.primary}10`,
                            borderColor: scheme.primary,
                            transform: 'rotateX(-90deg) translateZ(100px)'
                        }}
                    />
                </div>
            </div>

            {/* Floating particles around cube */}
            <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full animate-pulse"
                        style={{
                            backgroundColor: scheme.accent,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>
        </div>
    );
}