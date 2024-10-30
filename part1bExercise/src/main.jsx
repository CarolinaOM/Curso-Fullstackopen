import PropTypes from 'prop-types';

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

export default App;
