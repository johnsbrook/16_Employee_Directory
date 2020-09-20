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

        <div>
          {/* Location of image */}
          <div className="m-2 p-1 row ">
            <div className="col-sm-12">
              <img alt="Person" src={result.picture.large} className="img-fluid" />
            </div>
          </div>
            
                     
           
            {/* Location of employee info */}
          <div className="m-2 p-1 row ">
            <div className="col-sm-12">
              <p class="employeeName">{result.name.first} {result.name.last} | Galactic Team: {props.galaxy}</p>
            </div>
          </div>      
        </div>
      ))}

    </div>
    // End of results
  );
}

export default SearchResults;


{/* <div className="col-sm-12">

<div className="row">
<div className="card" style="width: 18rem;">
    <img src={props.result.picture.large} className="card-img-top" alt={props.result.name.first + " " + props.result.name.last} />
    <div classNameName="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
</div> */}