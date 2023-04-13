import React from 'react';
import './App.css';

//simple header with 66% width design
const MainBody = () => {
  return (
    <main className='bg-slate-200 h-screen w-1/2 flex flex-col m-auto'>
      <div className="bg-slate-400 w-full z-2 py-2 max-h-60 text-center 
      text-4xl">
        Quick Music Theory Reference
      </div>
      <div className="flex-grow flex ml-16 mt-16">
        <div className="flex flex-col h-10 space-y-4">
          <h1 className="mb-10 block">Choose from the drop downs and get a list of results that match!</h1>
          <select required name="c-sel" className="bg-white w-52
           text-black py-2 px-4 rounded-lg"
            id='concept_select'>
            <option selected value="concept_select">Pick a theory concept</option>
            <option value="chords">chords</option>
            <option value="scales">scales</option>
            <option value="intervals">intervals</option>
          </select>
          <select required className="bg-white w-60 text-black py-2 px-4 
          rounded-lg"
            id='emotion_select'>
            <option selected value="sound_select">What should it sound like?</option>
            <option value="major">major</option>
            <option value="minor">minor</option>
            <option value="dissonant">dissonant</option>
            <option value="other">other</option>
          </select>
        </div>
      </div>
    </main>
  );
};
namespace Calculations {
  class InputGathering {

  }
}

const Calculator = () => {
  //retrieves value from above
}
function App() {
  return (
    <MainBody />
  );
}

export default App;
