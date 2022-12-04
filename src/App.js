import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
//⭐ When importing ⬆️ './' allows you to look at anything that is currently inside the same folder as the file you're importing in to (e.g Allowing us to see all thing inside of src folder)
//⭐ DisplayEntries is a 'CHILD' of the APP component (Parent) because it's being instantiated inside of the APP component
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';
import './App.css';

function App() {
  
  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}, {weight: 176, date: '11-24-2021'}])
  //⭐ in order to pass 'AddEntryForm' UP to app component we must create a 'function reference'
  //⭐ how to update a state-variable ---> Use the function that is responsible for updating it (state variable: entries/ updating function: setEntries)
  function addNewEntry(entry) {
    //⭐⭐ 'tempEntries' is just another variable we created (Initially set to an empty array)---> THE NEW ENTRY BEING PASSED UP is what will fill that array with
    let tempEntries = [...entries,entry];
    /*⭐⭐ 'Spread It Apart'(...)👆 -- taking every value inside of "entries" [array] and placing it inside of the new [array] below 👇 
            Takes the WHOLE array and places it inside. (just a ',' in between 'entry' and 'entries' would give us a "nested array") */   
    //❓ further Explain "spread it apart" when it comes to the tempEntries array 

    setEntries(tempEntries);

    //⭐ Doing it this way 👉 ('entries.push(entry)') we can run into issues.  
    //       1. This way, we're not actually updating the state-variable (ONLY THE FUNCTION responsible for updating it can do that)
    //       2. pushing entry on to entries and set it equal, it would get react mixed up
  }

    
  
    
    
  //!⭐ After 'addNewEntry' function is formed, we must pass it down to 'AddEntryForm' component ---> Define some sort of property for AddEntryForms's prop object 
              //! (or Add an attribute to the props object for 'AddEntryForm' component) 
  return (
  //! Start splitting these components and tell them where on the page you want them → → 
        //! utilize <> by giving it a 'className.' - container (gives you ability to move comps) fluid (makes screen span across whole screen) 
      <div className='container-fluid'>
        <div className='row'>
          <h3 style={{'margin': '1em'}}>Weight 
          <small className='text-muted'>Tracker</small></h3>
          <div className='col-md-6'>
            <div className='border-box'>
              <DisplayEntries  parentEntries={entries}/>
                {/* If () at the end of {addNewEntry} 👇 it would be a 'function call' & we would be SETTING IT EQUAL TO THE RESULT of the function as opposed to the array[] inside  */}
                {/*❓ --> Set it to the 'Function Reference' (like a pointer or a name) */}
                {/* Whatever we name it here 👇 is how we need to reference it inside the child component(AddEntryForm.jsx = child component) */}
            </div>
            <div className='border-box'>
              <AddEntryForm addNewEntryProperty= {addNewEntry} />
            </div>
          </div>
          <div className='column-md-6'>
            <div className='border-box'>
              <EntriesChartTracker parentEntries={entries} />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;

// TODO: Tutorial #8: Style our Application - identify where you'd like your components to go on the page and use 'bootstraps'(CSS Libraries) that best fit need.
//⭐ Passing data from one component down to another is done through PROPS (e.g. Passing 'entries' variable down to DisplayEntries from App.js)
//❓Even when you're calling certain JS variables, a { } is needed? (E.g {entries})
//❓ When do we use camel case and when do we use 'pascal casing'
// ❓ When nevin switched from tempEntries= [entry,...entries] to tempEntries= [...entries, entry] explain why that made new entries go to the bottom instead of the top
//➕ Work on syntax and where to add certain properties, variables and objects
//⭐⭐ Pages are always broken down into 12 columns
// ❓ Why did we have to break it up into so many <div></div> tags?
