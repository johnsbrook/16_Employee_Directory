import React from "react";
import "./style.css";




function SearchResults(props) {
 


  return (
    <div>
      <div>This is your team from {props.galaxy}</div>
      
      {props.result.map(result => (

          
          <div className="m-2 p-1 row">
            <div className="col-sm-2">
              <img alt="Person" src={result.picture.large} className="img-fluid" />
          </div>
            <div className="col-sm-10">
              <h5 class="employeeName">{result.name.first} {result.name.last}</h5>
              <p class="galaxyName">{result.nat}</p>
            </div>
          </div>
       

      ))}

    </div>
  );
}

export default SearchResults;
