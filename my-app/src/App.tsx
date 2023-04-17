import React, { useRef, useState, useEffect, Fragment } from 'react';
import './App.css';

//simple header with 66% width design
const MainBody = () => {
  const [btn, showBtn] = useState(false);
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
          <button className='block hover:bg-white px-2 py-1 rounded-md'
            onClick={() => showBtn(true)}>Submit</button>
        </div>
        {/*when button is clicked, swap this out for the calculation*/}
        {btn ? <Calculator /> :
          <div className="max-w-lg pb-3 ml-12 mr-auto h-fit bg-white border-4 border-black/80 rounded-lg">
            Output will be here...
          </div>
        }

      </div>
    </main>
  );
};

type result_maps = string | string[];
//chords
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

//scales 
const major_scales_array: string[] = [
  "\nMajor(Ionian): A simple, happy sounding scale.\nFormula: whole, whole, half, whole, whole, whole, half Example: C D E F G A B",
  "\nLydian: A happy sounding scale that is similar to major, but with a raised 4th that can give it a unique, mystical quality.\n Formula: whole, whole, whole, half, whole, whole, half Example: C D E F# G A B"
];
const minor_scales_array: string[] = [
  "\nMinor(Aeolian): A scale that tends to sound sad and dark. Very versatile.\nFormula: whole, half, whole, whole, half, whole Example: C D D# F G G# A#",
  "\nMelodic Minor: A slightly brighter minor scale with the unique quality of sometimes having a different formula ascending and descending. The choice is up to you.\nFormula, ascending: whole, half, whole, whole, whole, whole\nFormula, descending(same as Aeolian): whole, half, whole, whole, half, whole\nExample: C D D# F G A B / A# G# G F D# D C", "\nHarmonic Minor: The Aeolian scale with a raised 7th, which creates a slight sense of darkness and unease.Very Classical sound.\nFormula: whole, half, whole, whole, half, whole + half Example: C D D# F G G# B", "\nPhrygian: Not to be confused with the Phrygian Dominant. Has a very dark, epic quality to it.\nFormula: half, whole, whole, whole, half, whole Example: C C# D# F G G# A#"
];
const diss_scales_array: string[] = [
  "\nLocrian: A tense, very dark scale that can sound unstable or scary.\nFormula: half, whole, whole, half, whole, whole\nExample: C C# D# F F# G# A#",
  "\nSuper Locrian(Altered Scale): A more extreme version of Locrian.Very tense and unstable.\nFormula: half, whole, half, whole, whole, whole\nExample: C C# D# E F# G# A#",
  "\nChromatic: The opposite of a scale, pretty much. Any order of notes. Usually extremely dissonant and unpleasant, more often used in unison with an existing scale."
];
const other_scales_array: string[] = [
  "\nDorian: A unique, hard to describe scale that is often said to sound medieval and folk-ish.\nFormula: whole, half, whole, whole, whole, half\nExample: C D D# F G A A#", "\nMixolydian: The Ionian scale with a flattened 7th, and a very common scale in blues and jazz.\nFormula: whole, whole, half, whole, whole, half\nExample: C D E F G A A#",
  "\nWhole Tone: A unique, dreamy, etherial sounding scale with 6 notes instead of 7.\nFormula: whole, whole, whole, whole, whole\nExample: C D E F# G# A#",
  "\nHirajoshi: A 5 note scale that sounds very orential or Japanese.\nFormula: whole, half, whole + whole, half\nExample: C D D# G G#"
];
const scales_map: Map<string, result_maps> = new Map<string, result_maps>([
  ["major", major_scales_array],
  ["minor", minor_scales_array],
  ["dissonant", diss_scales_array],
  ["other", other_scales_array],
]);

//intervals
const major_intervals_array: string[] = [
  "\nMajor 2nd: 2 semitones",
  "\nMajor 3rd: 4 semitones",
  "\nMajor 6th: 9 semitones",
  "\nMajor 7th: 11 semitones"
];
const minor_intervals_array: string[] = [
  "\nMinor 2nd: 1 semitone",
  "\nMinor 3rd: 3 semitones",
  "\nMinor 6th: 8 semitones",
  "\nMinor 7th: 10 semitones"
];
const diss_intervals_array: string[] = [
  "\nAug 2nd: 3 semitones",
  "\nAug 3rd: 5 semitones",
  "\nAug 4th: 6 semitones",
  "\nAug 5th: 8 semitones",
  "\nAug 6th: 10 semitones",
  "\nAug 7th: 12 semitones",
  "\nDim 2nd: 1 semitone",
  "\nDim 3rd: 2 semitones",
  "\nDim 4th: 4 semitones",
  "\nDim 5th: 6 semitones",
  "\nDim 6th: 7 semitones",
  "\nDim 7th: 9 semitones"
];
const other_intervals_array: string[] = [
  "\nerfect 4th: 5 semitones",
  "\nPerfect 5th: 7 semitones",
  "\nOctave: 12 semitones"
];
const intervals_map = new Map([
  ["major", major_intervals_array],
  ["minor", minor_intervals_array],
  ["dissonant", diss_intervals_array],
  ["other", other_intervals_array],
]);
//hell

function Calculator() {
  //retrieves value from above and matches with hash table
  const concept_select = document.getElementById('concept_select') as HTMLSelectElement;
  const emotion_select = document.getElementById('emotion_select') as HTMLSelectElement;
  const concept = concept_select.value;
  const emotion = emotion_select.value;
  let text = "test";
  if (concept === 'concept_select' || emotion === 'sound_select') {
    alert('Please select a concept and a sound!');
  }
  else {
    console.log(concept + ' ' + emotion);
    //pull from the map and display the results
    switch (concept) {
      case 'chords':
        //console.log(chords_map.get(emotion));
        break;
      case 'scales':
        break;
      case 'intervals':
        break;
    }
  }
  return (
    <div className="max-w-lg pb-3 ml-12 mr-auto h-fit bg-white border-4 border-black/80 rounded-lg">
      testing
    </div>
  );
};
function App() {
  return (
    <MainBody />
  );
};

export default App;
