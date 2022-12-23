import React from 'react';
import './App.css';
import usePhotos from './hooks/usePhotos';

function App() {
  const { results } = usePhotos()
  console.log('results', results)
  return (
    <div className="App">
      Image gallery
    </div>
  );
}

export default App;
