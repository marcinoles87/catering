import React from "react";
import { ReactDOM } from "react";

const Test = () => {

    const itemList = ["Item1", "Item2", "Item3", "Item4", "Item5"];

    // Generate JSX code for Display each item
    const renderList = itemList.map((item, index) => 
                                 <div key={index}>{item}</div>
                               );
    return ( 
        <div>{renderList}</div>
     );
}
 
export default Test;