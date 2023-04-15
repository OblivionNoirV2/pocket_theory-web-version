import React, { useState, useEffect, Fragment } from 'react';
import './App.css';

//simple header with 66% width design
const MainBody = () => {
  return (
    <main className='bg-slate-200/90 h-screen w-1/2 flex flex-col m-auto'>
      <div className="bg-slate-300 w-full py-2 max-h-60 text-center 
      text-4xl">
        Quick Music Theory Reference
      </div>
      <div className="flex-grow flex ml-16 mt-16">
        <div className=" space-y-4">
          <h1>Choose from the drop downs and
            get a list of results that match!</h1>
          <select required name="c-sel" className="bg-white w-52
           text-black py-2 px-4 rounded-lg z-2 "
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
          <ResultsArea />
        </div>
      </div>
    </main>
  );
};
const ResultsArea = () => {
  return (
    <div className='ml-10 inline-block max-w-sm max-h-2xl bg-white 
    border-4 border-black/90 rounded-lg '>
      {/*results go here*/}
      <Calculator />
    </div>
  );
}
type result_maps = string | string[];

const diss_chords_array: string[] = [
  "Diminished: Any chord that usually is not dissonant, with a flattened note to make it so.Tense and unstable.\nExample: C D# F#(a C minor with the 5th flattened)",
  "Augmented: Any chord that usually is not dissonant, with a raised note to make it so.Tense and unstable.\nExample: C E G#(a C major with the 5th raised)"
];
const other_chords_array: string[] = [
  "\nPower chords: Two note chords with a neutral, but powerful sound.\nFormula: root, perfect 5th\nExample: C G",
  "\nsus2: Etherial, 'suspended' sound. There is generally not much distinction between sus2 and sus4.\nFormula: root, second note of major scale, perfect fifth\nExample: C D G",
  "\nsus4: Etherial, 'suspended' sound. There is generally not much distinction between sus2 and sus4.\nFormula: root, fourth note of major scale, perfect fifth\nExample: C F G",
  "\noctave: Chords containing 2 of the same note, often the root, at different octaves. Simple way to create a huge, epic sound.",
  "\n7ths and beyond: Any chord can have additional notes of the scale added in to create a larger sound. To do this, skip the next note in the scale and add the one after that. For example, a minor triad, C D# G, can have the C minor scale's A# added in to create a C minor 7th, C D# G A#. Doing this again would create a 9th, and so on.",
  "\nInversions: Notes in a chord do not follow a strict order. Change it up and experiment with different sounds! For example, C major can be played as C E G, E G C, G C E, or even E E G C to create variations on the same base sound."
];

const chords_map: Map<string, result_maps> = new Map<string, result_maps>([
  ["major", "\nMajor Triad: The most basic major chord.\nFormula: root, major 3rd, perfect 5th\nExample: C E G"],
  ["minor", "\nMinor Triad: The most basic minor chord.\nFormula: root, minor 3rd, perfect 5th\nExample: C D# G"],
  ["dissonant", diss_chords_array],
  ["other", other_chords_array],
]);
const scales_map = new Map([

]);
const intervals_map = new Map([

]);
function Calculator() {
  //retrieves value from above and matches with hash table
  return (
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Quo provident aut impedit excepturi nulla placeat sed totam
      incidunt sint veniam voluptate voluptas, libero, ducimus illo possimus! Et consequatur ab eligendi?
    </div>
  );
}
function App() {
  return (
    <MainBody />
  );
}

export default App;
