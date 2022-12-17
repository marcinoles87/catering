import React from "react";

import  './Info.css'

class Info extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className="info-wrapper">
                <div className="info-main">
                    <h1>Info for our Customer !</h1>
                    <p>Tease people you know well because you are more 
                        likely to be in tune with what is sensitive to them. 
                        Certain topics should be off limits including but not limited
                         to politics, religion, race, gender, cultural belie</p>

                        <button> Click to see more</button>
                </div>
            </div>
        );
    }
}
 
export default Info;