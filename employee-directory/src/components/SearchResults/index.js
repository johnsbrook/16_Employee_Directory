import React from "react";
import "./style.css";

function SearchResults(props) {
 
  return (
    <div>
    {/* // <ul className="list-group search-results"> */}
      {props.result.map(result => (

        // <li key={result} className="list-group-item m-2">
          <div className="m-2 p-1 row">
            <div className="col-2">
          <img alt="Person" src={result.picture.large} className="img-fluid" />
          </div>
            <div className="col-10">
              This is the employee description.
            </div>
          </div>
        // </li>

      ))}
    {/* // </ul> */} </div>
  );
}

export default SearchResults;
