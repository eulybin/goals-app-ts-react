import goalsImg from './assets/goals.jpg';
import Header from './components/Header';
import CourseGoalList from './components/CourseGoalList';
import { useState } from 'react';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = () => {
    setGoals((prevState) => {
      const newGoal: CourseGoal = {
        title: 'Learn React.',
        description: 'Learn React in depth.',
        id: Math.random(),
      };

      return [...prevState, newGoal];
    });
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} />
    </main>
  );
}
