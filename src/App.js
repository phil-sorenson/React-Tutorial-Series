import React, { useState } from 'react';


function App() {
  
  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Entry Number</th>
            <th>Weight</th>
            <th>Date</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default App;
