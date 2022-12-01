import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
//⭐ When importing ⬆️ './' allows you to look at anything that is currently inside the same folder as the file youre importing in to (e.g Allowing us to see all thing inside of src folder)
//⭐ DisplayEntries is a 'CHILD' of the APP component because it's being instantiated inside of the APP component
function App() {
  
  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}, {weight: 176, date: '11-24-2021'}])

  return (
    <div>
      <DisplayEntries  parentEntries={entries}/>

    </div>
  );
}

export default App;

//⭐ Passing data from one component down to another is done through PROPS (e.g. Passing 'entries' variable down to DisplayEntries from App.js)
//❔Even when you're calling certain JS variables, a { } is needed? (E.g {entries})