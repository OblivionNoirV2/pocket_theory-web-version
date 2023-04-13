import React from 'react';
import './App.css';
import * as calculator from './calculate';
//simple header with 66% width design
const MainBody = () => {
  return (
    <main className='bg-slate-200 h-screen w-1/2 flex flex-col m-auto'>
      <div className="bg-slate-400 w-full z-2 py-2 max-h-60 text-center 
      text-4xl">
        Quick Music Theory Reference
      </div>
      <div className="flex-grow flex justify-center items-center">
        <div className="flex space-x-4">
          <select className="bg-white text-black py-2 px-4 rounded">
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <select className="bg-white text-black py-2 px-4 rounded">
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>
    </main>
  );
};

const Calculator = () => {
  //calls from the other file
}
function App() {
  return (
    <MainBody />
  );
}

export default App;
