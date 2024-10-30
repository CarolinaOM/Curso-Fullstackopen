//1.3: Información del Curso, paso 3
/*import PropTypes from 'prop-types';

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

Header.propTypes = {
  course: PropTypes.string.isRequired,
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

Part.propTypes = {
  part: PropTypes.shape({
    name: PropTypes.string.isRequired,
    exercises: PropTypes.number.isRequired,
  }).isRequired,
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  );
};

Content.propTypes = {
  part1: PropTypes.shape({
    name: PropTypes.string.isRequired,
    exercises: PropTypes.number.isRequired,
  }).isRequired,
  part2: PropTypes.shape({
    name: PropTypes.string.isRequired,
    exercises: PropTypes.number.isRequired,
  }).isRequired,
  part3: PropTypes.shape({
    name: PropTypes.string.isRequired,
    exercises: PropTypes.number.isRequired,
  }).isRequired,
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{' '}
      {props.part1.exercises + props.part2.exercises + props.part3.exercises}
    </p>
  );
};

Total.propTypes = {
  part1: PropTypes.shape({
    exercises: PropTypes.number.isRequired,
  }).isRequired,
  part2: PropTypes.shape({
    exercises: PropTypes.number.isRequired,
  }).isRequired,
  part3: PropTypes.shape({
    exercises: PropTypes.number.isRequired,
  }).isRequired,
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  );
};

export default App;*/

//1.4: Información del Curso paso 4
/*import PropTypes from 'prop-types';

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

Header.propTypes = {
  course: PropTypes.string.isRequired,
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

Part.propTypes = {
  part: PropTypes.shape({
    name: PropTypes.string.isRequired,
    exercises: PropTypes.number.isRequired,
  }).isRequired,
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  );
};

Content.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      exercises: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{' '}
      {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  );
};

Total.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      exercises: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;*/

//1.5: Información del Curso paso 5
import PropTypes from 'prop-types';

const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

Header.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

Part.propTypes = {
  part: PropTypes.shape({
    name: PropTypes.string.isRequired,
    exercises: PropTypes.number.isRequired,
  }).isRequired,
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  );
};

Content.propTypes = {
  course: PropTypes.shape({
    parts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        exercises: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{' '}
      {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
    </p>
  );
};

Total.propTypes = {
  course: PropTypes.shape({
    parts: PropTypes.arrayOf(
      PropTypes.shape({
        exercises: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
