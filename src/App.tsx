import goalsImg from './assets/goals.jpg';
import Header from './components/Header';
import CourseGoalList from './components/CourseGoalList';
import { useState } from 'react';
import NewGoalForm from './components/NewGoalForm';
import type { CourseGoal, NewGoal } from './types';

export default function App() {
    const [goals, setGoals] = useState<CourseGoal[]>([]);

    const handleAddGoal = (newGoalObject: NewGoal) => {
        setGoals((prevState) => {
            const newGoal: CourseGoal = {
                title: newGoalObject.goal,
                description: newGoalObject.summary,
                id: Math.random(),
            };

            return [...prevState, newGoal];
        });
    };

    const handleDeleteGoal = (id: number) => {
        setGoals((prevState) => prevState.filter((goal) => goal.id !== id));
    };

    return (
        <main>
            <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
                <h1>Your Course Goals</h1>
            </Header>
            <NewGoalForm onSubmit={handleAddGoal} />
            <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
        </main>
    );
}
