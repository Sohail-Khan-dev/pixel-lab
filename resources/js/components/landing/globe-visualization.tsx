import { useEffect, useRef } from 'react';

export function GlobeVisualization() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const updateCanvasSize = () => {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * window.devicePixelRatio;
            canvas.height = rect.height * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };

        updateCanvasSize();
        window.addEventListener('resize', updateCanvasSize);

        let animationId: number;
        let time = 0;

        const animate = () => {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            
            // Clear canvas
            ctx.clearRect(0, 0, width, height);
            
            const centerX = width / 2;
            const centerY = height / 2;
            const radius = Math.min(width, height) * 0.35;

            // Draw outer glow
            const glowGradient = ctx.createRadialGradient(centerX, centerY, radius * 0.5, centerX, centerY, radius * 1.5);
            glowGradient.addColorStop(0, 'rgba(147, 51, 234, 0.3)'); // purple
            glowGradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.2)'); // blue
            glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            
            ctx.fillStyle = glowGradient;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius * 1.5, 0, Math.PI * 2);
            ctx.fill();

            // Draw main sphere
            const sphereGradient = ctx.createRadialGradient(
                centerX - radius * 0.3, 
                centerY - radius * 0.3, 
                0, 
                centerX, 
                centerY, 
                radius
            );
            sphereGradient.addColorStop(0, 'rgba(147, 51, 234, 0.8)'); // bright purple
            sphereGradient.addColorStop(0.3, 'rgba(99, 102, 241, 0.6)'); // indigo
            sphereGradient.addColorStop(0.7, 'rgba(59, 130, 246, 0.4)'); // blue
            sphereGradient.addColorStop(1, 'rgba(30, 41, 59, 0.8)'); // dark

            ctx.fillStyle = sphereGradient;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.fill();

            // Draw grid lines (longitude)
            ctx.strokeStyle = 'rgba(147, 197, 253, 0.3)';
            ctx.lineWidth = 1;
            
            for (let i = 0; i < 12; i++) {
                const angle = (i / 12) * Math.PI * 2 + time * 0.01;
                const x1 = centerX + Math.cos(angle) * radius * 0.3;
                const y1 = centerY - radius;
                const x2 = centerX + Math.cos(angle) * radius * 0.3;
                const y2 = centerY + radius;
                
                ctx.beginPath();
                // Create elliptical longitude lines
                ctx.ellipse(centerX, centerY, radius * Math.abs(Math.cos(angle)), radius, 0, 0, Math.PI * 2);
                ctx.stroke();
            }

            // Draw grid lines (latitude)
            for (let i = 1; i < 6; i++) {
                const y = centerY - radius + (radius * 2 * i / 6);
                const ellipseRadius = Math.sqrt(radius * radius - Math.pow(y - centerY, 2));
                
                ctx.beginPath();
                ctx.ellipse(centerX, y, ellipseRadius, ellipseRadius * 0.2, 0, 0, Math.PI * 2);
                ctx.stroke();
            }

            // Draw animated particles/nodes
            ctx.fillStyle = 'rgba(147, 197, 253, 0.8)';
            for (let i = 0; i < 20; i++) {
                const nodeAngle = (i / 20) * Math.PI * 2 + time * 0.02;
                const nodeRadius = radius * (0.8 + Math.sin(time * 0.03 + i) * 0.1);
                const x = centerX + Math.cos(nodeAngle) * nodeRadius * Math.cos(time * 0.01 + i);
                const y = centerY + Math.sin(nodeAngle) * nodeRadius * 0.5;
                
                ctx.beginPath();
                ctx.arc(x, y, 2 + Math.sin(time * 0.05 + i) * 1, 0, Math.PI * 2);
                ctx.fill();
            }

            time += 1;
            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', updateCanvasSize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ width: '100%', height: '100%' }}
            />
            {/* Additional decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Floating particles */}
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>
        </div>
    );
}