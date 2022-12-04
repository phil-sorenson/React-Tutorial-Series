// ⭐ == Important Notations or Elaborating on WHY we used certain code
// 📝== Definitions or explanations for certain code
// ❓== Question

import React, { useState } from 'react';
import './AddEntryForm.css';


//⭐ 'sfc' React snippet command to get the code below  --->
     //⭐ ALWAYS name component the same name as the file (e.g AddEntryForm)


const AddEntryForm = (props) => {
//⭐ Construct a new entry object that will eventually be added to the 'entries' Array --->
    // inside of our <form> ---> create a stateful variable for each input box
//⭐ In order to utilize onChange & input event, we need to update the state-'weight' variable to = input event (Do it through setWeight) --->
    //⭐⭐ every time we create a state variable we are also defining the function that is responsible for updating it (setWeight or setDate) 
            //➡️ Example: 'setWeight' is a function that we must call to update state 'weight' variable
    
    const [weight, setWeight] =  useState(0);
    const [date,setDate] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        //❓ is preventDefault() a pre-built command/functionality? (Helps to stop the page from refreshing when submit is clicked)
        //⭐ once user hits 'add' button - create a way to add this new entry to existing entries/table --->
        //     1. Create New 'entry object' 
        let newEntry = {
        // 'weight' & 'date' are considered KEY VALUE PAIRS  
            weight: weight,
            date: date
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }
    return ( 
        //⭐ When dealing with <FORM> we need to 'bind' the variables below to there respective <INPUTS> (Value attribute on the input tag)
        //⭐ Whenever a type= submit <button> is clicked the 'onSubmit' attribute 👇 will be triggered 
                //➡️ onSubmit Goal: Pass the submission of the <form> on to our handleSubmit() function above 
        <form onSubmit= {handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Weight</label>
                {/*⭐ with the 'onChange' command 👇 the goal is to TAKE THE VALUE from user input & update that State variable (i.e Weight or Date) to be equal to the value that was just typed in */}
                {/* every letter typed into an input box also causes an input EVENT 👇 to be triggered (Allows us to access the value inputted from browser) */}
                <input type= 'number' className='form-control' value= {weight} onChange={(event)=> setWeight(parseFloat(event.target.value))}/> {/*📝 'parseFloat' used to change the weight output from 'string' to int*/}
            </div>
            <div className='form-group'>
                <label>Date</label>
                <input type='date' className='form-control' value={date} onChange={(event)=> setDate(event.target.value)}  />   {/*❓ Why '.target' & '.value' ? ---> What is there job/funtionality? */}
                <button type='submit'className='btn btn-primary' style={{'margin-top':'1em'}}>ADD</button>
                {/*⭐ "SUBMITTING THE <FORM>": <button> = type submit (when button is clicked) a <form> is submitted. If inside HTML ---> the page will relaod */}
                        {/* Must create a function to handle this and pass through (SEE ABOVE👆: function handleSubmit) */}
                {/*⭐ 'type = date' gives you a date picker w/ drop down calender on your web browser  */}
                {/*❓ Why is do we need the () inside the 'onChange{}' command? */}
                {/*⭐ Every time a letter is typed in to an input box from browser, a change event occurs ('onChange' command needed 👆) */}
            </div>
            
        </form>
     );
}
 
export default AddEntryForm;