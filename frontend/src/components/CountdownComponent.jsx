import React from "react";
import Countdown from "react-countdown";


export default function CountdownComponent() {

    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(0,0,0,0)


    return (
        <div className="countdown">
            <p> New King in </p>
            <strong><Countdown date={tomorrow} daysInHours={true}/> </strong> 
              
        </div>
    );
};
