import React, { useState, useEffect} from 'react';
import { Chart } from "react-google-charts";
import App from '../../App';


// ⭐ The # Values in 'data' are the first numbers to be plotted on the chart itself
const EntriesChartTracker = (props) => {

    const [chartData, setChartData] = useState([])

    //⭐ useEffect Hook takes in 2 things (1 mandatory = anonymous function, 1 optional)
        // runs 2 different times in the 'life' of a component...first time, is when it hits the screen and then second, when updates

    //⭐ Since we did an 'optional array'(below), we must tell the program to run again when it notices the 'props.parentEntries' has changed in value
    useEffect(()=> {
        let tempChartData = props.parentEntries.map(entry => {
        //⭐ return = The chart format type
            return [entry.date, entry.weight];
        });
        //⭐ (tempChartData) 👇 is the result of the useEffect function above
        setChartData(tempChartData);
    // 👇'optional array' inserted in order to stop useEffect from constantly running over and over
    }, [props.parentEntries])

    return ( 
        <Chart
            chartType="LineChart"
            data={[["Date", "Weight"],...chartData]}
            width="100%"
            height="400px"
            legendToggle
        />
     );
}
 
export default EntriesChartTracker;

// TODO: - Take the data from our entries[] (from App component) & plug it directly into the chart
        //⭐ Identify how to plug 'parentEntries' data into the chart (data)--because our data is not the same format as the installed chart, we must modify our data (map function)(useEffect Hook)
// ToDO: Inside the useEffect: • Restructure our 'parentEntries' data into the chart → → → Create another state variable inside 'EntriesChartTracker'
/* CONSOLE WATRNING: "Key" error (on console): Each child in a list should have a unique "key" prop (DisplayEntries)
    SOLUTION: When generating HTML tags inside of a map, each HTML tag must be assigned a key attribute */