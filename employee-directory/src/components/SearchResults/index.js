import React from "react";
import "./style.css";




function SearchResults(props) {
 


  return (

  // Main div
  <div className="container">

      {/* Galaxy Team */}
      <div className="row">
        <div className="col-sm-12">
          <h1 className="text-center my-5 galaxyfont">{props.galaxy}</h1>
        </div>        
      </div>
      
      

        <div className="col-sm-12" style={{color: "black"}}>
        {props.result.map(result => (
          <div className="col-sm-12 col-md-4 mx-auto my-5 shadow card" id={result.id.value}>

            <div className="row">
              <div className="col-sm-12 text-center mt-2 p-2">
                <img src={result.picture.large} className="profile"/>
                <p class="mt-2 employeeName">{result.name.title} {result.name.first} {result.name.last}</p>
                <hr></hr>
                <p className="text-left px-2">
                  <strong>ID </strong><span>- </span><span> {result.id.name}</span><span>- </span><span> {result.id.value}</span><br></br>
                  e-Mail: <br></br>
                  Phone No: <br></br>
                  Cell No: <br></br>
                </p>
              </div>
            </div>

          </div>
          ))}
        </div>
      

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