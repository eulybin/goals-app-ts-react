import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import type { NewGoal } from '../types';

type NewGoalFormProps = {
    onSubmit: (newGoalObject: NewGoal) => void;
};

export default function NewGoalForm({ onSubmit }: NewGoalFormProps) {
    const [goalInput, setGoalInput] = useState('');
    const [summaryInput, setSummaryInput] = useState('');

    const handleGoalChange = (e: ChangeEvent<HTMLInputElement>) => {
        setGoalInput(e.target.value);
    };

    const handleSummaryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSummaryInput(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newGoalObject: NewGoal = {
            goal: goalInput.trim(),
            summary: summaryInput.trim(),
        };

        onSubmit(newGoalObject);
        setGoalInput('');
        setSummaryInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor='goal'>Your goal:</label>
                <input
                    onChange={handleGoalChange}
                    id='goal'
                    type='text'
                    value={goalInput}
                    placeholder='e.g. Learn Typescript'
                    required
                    autoFocus
                />
            </p>
            <p>
                <label htmlFor='summary'>Short Summary:</label>
                <input
                    onChange={handleSummaryChange}
                    id='summary'
                    type='text'
                    value={summaryInput}
                    placeholder='e.g. Learn to use typescript with React'
                    required
                />
            </p>
            <p>
                <button type='submit'>Add Goal</button>
            </p>
        </form>
    );
}
