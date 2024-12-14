import React from 'react';
import Board from './components/Board';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">FreeCHESS</h1>
        <Board />
      </div>
    </div>
  );
}

export default App;