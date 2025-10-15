type CourseGoalProps = {
  title: string;
  description: string;
};

const CourseGoal = ({ title, description }: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <button>Delete</button>
      </div>
    </article>
  );
};

export default CourseGoal;
