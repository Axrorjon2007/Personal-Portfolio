import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes/routes';
function App() {
  const content = useRoutes(routes);
  return <div>{content}</div>;
}

export default App;

