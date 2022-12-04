
const DisplayEntries = (props) => {
    return ( 
        <table className='table'>
            <thead>
            <tr>
                <th>Entry Number</th>
                <th>Weight</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
            {/* ( ) used because their will be multiple lines of code we want returned */}
            {/* 'index' in our map func represents the index number of the thing it's iterating/looping over (e.g [1]) */}
            {/* Adding the {index + 1} allowed our <td> tags to be moved over 1 spot */}
            {/* 'entries' gets changed to 'props.parentEntries.map' because we're taking the value from the state variable (entries), passing it down to DisplayEntries component, which has recieved a new key Value pair (parentEntries) */}
                {/* parentEntries === entries */}
            {props.parentEntries.map((entry, index)=> {
                return (
            // key MUST be unique so each row it generates is uniques itself and can be identified (use INDEX 👆)
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{entry.weight}</td>
                    <td>{entry.date}</td>
                </tr>

                )
            })}
            </tbody>
        </table>
     );
}
 
export default DisplayEntries;