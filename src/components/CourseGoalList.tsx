import CourseGoal from './CourseGoal';
import InfoBox from './InfoBox';
import { type CourseGoal as CourseGoalType } from '../types';
import type { ReactNode } from 'react';

type CourseGoalListProps = {
    goals: CourseGoalType[];
    onDelete: (id: number) => void;
};

export default function CourseGoalList({ goals, onDelete }: CourseGoalListProps) {
    if (goals.length === 0) {
        return <InfoBox mode='hint'>No course goals yet. Start adding some!</InfoBox>;
    }

    let warningBox: ReactNode;
    if (goals.length >= 4) {
        warningBox = (
            <InfoBox mode='warning' severity='medium'>
                You already have a few goals. Don't over do it.
            </InfoBox>
        );
    }
    return (
        <>
            {warningBox}
            <ul>
                {goals.map((goal) => (
                    <li key={goal.id}>
                        <CourseGoal id={goal.id} onDelete={onDelete} title={goal.title}>
                            <p>{goal.description}</p>
                        </CourseGoal>
                    </li>
                ))}
            </ul>
        </>
    );
}
