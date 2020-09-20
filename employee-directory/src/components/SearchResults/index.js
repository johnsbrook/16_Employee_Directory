import React from "react";
import "./style.css";




function SearchResults(props) {
 


  return (

    // Main div
    <div className="">

      {/* Galaxy Team */}
      <div className="row">
        <div className="col-sm-12">

          <h1 className="text-center my-5 galaxyfont">{props.galaxy}</h1>

        </div>
        
            
       

      </div>
      
      {props.result.map(result => (
          
          <div className="m-2 p-1 row ">
            
            {/* Location of image */}
            <div className="col-sm-2">
              <img alt="Person" src={result.picture.large} className="img-fluid" />
            </div>

            {/* Location of employee info */}
            <div className="col-sm-6">
              <p class="employeeName">{result.name.first} {result.name.last} | Galactic Team: {props.galaxy}</p>
              
            </div>

          </div>      

      ))}

    </div>
    // End of results
  );
}

export default SearchResults;
