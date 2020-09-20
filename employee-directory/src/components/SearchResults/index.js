import React from "react";
import "./style.css";

function SearchResults(props) {
 
  return (
    <div>
    {/* // <ul className="list-group search-results"> */}
      {props.result.map(result => (

        // <li key={result} className="list-group-item m-2">
          <div className="m-2 p-1 row">
            <div className="col-sm-2">
              
              <img alt="Person" src={result.picture.large} className="img-fluid" />
          </div>
            <div className="col-sm-10">
              <h5 class="eh5ployeeName">{result.name.first} {result.name.last}</h5>
            </div>
          </div>
        // </li>

      ))}
    {/* // </ul> */} </div>
  );
}

export default SearchResults;
