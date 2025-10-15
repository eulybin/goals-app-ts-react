import type { FormEvent } from 'react';
import type { NewGoal } from '../types';
import { useRef } from 'react';

type NewGoalFormProps = {
    onSubmit: (newGoalObject: NewGoal) => void;
};

export default function NewGoalForm({ onSubmit }: NewGoalFormProps) {
    const goalInputRef = useRef<HTMLInputElement>(null);
    const summaryInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newGoalObject = {
            goal: goalInputRef.current!.value,
            summary: summaryInputRef.current!.value,
        };

        onSubmit(newGoalObject);
        e.currentTarget.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor='goal'>Your goal:</label>
                <input id='goal' type='text' ref={goalInputRef} required />
            </p>
            <p>
                <label htmlFor='summary'>Short Summary:</label>
                <input id='summary' type='text' ref={summaryInputRef} required />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    );
}
