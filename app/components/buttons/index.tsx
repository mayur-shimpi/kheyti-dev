import React from 'react';

interface PrimaryButtonProps {
    name: string;
    onClick?: () => void;
    className?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ name, onClick, className }) => {
    return (
        <button onClick={onClick} className={`bg-primary text-white px-8 py-3 rounded-full ${className || ''}`}>
            {name}
        </button>
    );
};
