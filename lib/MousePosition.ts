import { useEffect } from 'react';

// Define the type of props that the MousePosition component expects
interface MousePositionProps {
    onMouseMove: (position: { x: number; y: number }) => void;
}

const MousePosition: React.FC<MousePositionProps> = ({ onMouseMove }) => {
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const pos = { x: event.clientX, y: event.clientY };
            onMouseMove(pos);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [onMouseMove]);

    return null; // No UI to render, just capturing mouse movement
};

export default MousePosition;
