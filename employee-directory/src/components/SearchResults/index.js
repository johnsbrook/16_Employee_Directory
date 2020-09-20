import React from "react";
import "./style.css";

function SearchResults(props) {
 
  return (
    <ul className="list-group search-results">
      {props.result.map(result => (

        <li key={result} className="list-group-item">
          <img alt="Person" src={result} className="img-fluid" />
        </li>

      ))}
    </ul>
  );
}

export default SearchResults;
