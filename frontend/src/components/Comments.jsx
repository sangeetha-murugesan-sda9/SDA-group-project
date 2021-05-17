// NPM packages
import { useState ,useEffect} from "react";
import ApiCalls from "../api/ApiCalls";
import Methods from '../services/Methods'

export default function Comments({item}) {

//const username = Methods.getUsernameByEmail(item.ownerEmail)

  //console.log(username);

  return (

    <div className ="comment-bloc">

     <h3>{item.ownerEmail}</h3>
     <p> {item.body} </p>
     
    </div>
    
  );
}
