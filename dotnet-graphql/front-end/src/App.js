import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useQuery } from '@apollo/react-hooks';
import { GET_HEALTHCHECKS } from './graphql/queries';

function App() {
  const { data, loading, error } = useQuery(GET_HEALTHCHECKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error - {error.message}</p>;

  return (
    <div className="App">
      <div className="container">
        {data &&
          data.healthChecks &&
          data.healthChecks.map((healthCheck, index) => (
            <div key={index}>
              <p>{healthCheck.id} - {healthCheck.name}</p>
            </div>
          ))}
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
