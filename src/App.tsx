import goalsImg from './assets/goals.jpg';
import Header from './components/Header';
import CourseGoal from './components/CourseGoal';

export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title='Typescript + React'>
        <p>Learn typescript with React in 2025</p>
      </CourseGoal>
    </main>
  );
}
