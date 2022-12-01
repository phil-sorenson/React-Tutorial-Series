import React, { useState } from 'react';


//⭐ 'sfc' React snippet command to get the code below  --->
     //⭐ ALWAYS name component the same name as the file (e.g AddEntryForm)


const AddEntryForm = (props) => {
//⭐ Construct a new entry object that will eventually be added to the 'entries' Array --->
    // inside of our <form> ---> create a stateful variable for each input box
//⭐ In order to utilize onChange & input event, we need to update the state-'weight' variable to = input event (Do it through setWeight) --->
    //⭐⭐ every time we create a state variable we are also defining the function that is respobsible for updating it (setWeight or setDate) 
            //➡️ Example: 'setWeight' is a function that we must call to update state 'weight' variable
    const [weight, setWeight] =  useState(0);
    const [date,setDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        //❓ is preventDefault() a pre-built command/functionality? 
    }
    return ( 
        //⭐ When dealing with <FORM> we need to 'bind' the variables below to there respective <INPUTS> (Value attribute on the input tag)
        //⭐ Whenever a tpye= submit <button> is clicked the 'onSubmit' attribute 👇 will be triggered 
                //➡️ onSubmit Goal: Pass the submission of the <form> on to our handleSubmit() function above 
        <form onSubmit= {handleSubmit}>
            <label>Weight</label>
            {/*⭐ with the 'onChange' command 👇 the goal is to TAKE THE VALUE from user input & update that State variable (i.e Weight or Date) to be equal to the value that was just typed in */}
            {/* every letter typed into an input box also causes an INPUT EVENT to be triggered (Allows us to access the value inputed) */}
            <input type= 'number' value= {weight} onChange={(event)=> setWeight(event.target.value)}/>
            <label>Date</label>
            <input type= 'date' value={date} onChange={(event)=> setDate(event.target.value)}  />   {/*❓ Why '.target' & '.value' ? ---> What is there job/funtionality? */}
            <button type= 'submit'>ADD</button>
            {/*⭐ "SUBMITTING THE <FORM>": <button> = type submit (when button is clicked) a <form> is submitted. If inside HTML ---> the page will relaod */}
                    {/* Must create a function to handle this and pass through (SEE ABOVE👆: function handleSubmit) */}
            {/*⭐ 'type = date' gives you a date picker w/ drop down calender on your web browser  */}
            {/*❓ Why is do we need the () inside the 'onChange{}' command? */}
            {/*⭐ Everytime a letter is typed in to an input box from browser, a change event occurs ('onChange' command needed 👆) */}
        </form>
     );
}
 
export default AddEntryForm;