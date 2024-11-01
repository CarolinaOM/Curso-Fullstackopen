//Ejemplo react
/*import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';

// Componente Hello con validación de props
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

// Validación de tipos de props en el componente Hello
Hello.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

// Componente App que usa el componente Hello
const App = () => {
  const name = 'Peter';
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};

// Renderiza el componente App en el DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);*/

//Funciones auxiliares del componente

/*import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';

// Componente Hello que recibe propiedades (props)
const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

// Validación de tipos de props en el componente Hello
Hello.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

// Componente principal App
const App = () => {
  const name = 'Peter';
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};

// Exporta el componente App para habilitar Fast Refresh
export default App;

// Renderiza el componente App en el DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);*/


//Desestructuración

import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';

// Componente Hello con validación de props
const Hello = (props) => {
  const { name, age } = props;

  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

// Validación de tipos de props en Hello
Hello.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

// Componente principal App
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={36} />
      <Hello name="Peter" age={10} />
    </div>
  );
};

// Exporta App para habilitar Fast Refresh
export default App;

// Renderiza el componente App en el DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);