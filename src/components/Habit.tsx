import React from "react";

export interface HabitProps {
    name: string;
    description: string;
}

export const Habit: React.FC<HabitProps> = ({ name, description }) => {
    return (
        <div className="bg-zinc-100 w-10 h-10 text-white rounded-md">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
};
