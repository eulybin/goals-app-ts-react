import CourseGoal from './CourseGoal';
import { type CourseGoal as CourseGoalType } from '../types';

type CourseGoalListProps = {
    goals: CourseGoalType[];
    onDelete: (id: number) => void;
};

export default function CourseGoalList({ goals, onDelete }: CourseGoalListProps) {
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal id={goal.id} onDelete={onDelete} title={goal.title}>
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            ))}
        </ul>
    );
}
