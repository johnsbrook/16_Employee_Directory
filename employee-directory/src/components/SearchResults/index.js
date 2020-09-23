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
      
      

        <div className="col-sm-12" style={{color: "black"}}>
        {props.result.map(res => (
          <div className="col-sm-12 col-md-7 mx-auto my-5 shadow card" id={res.id.value}>

            <div className="row">
              <div className="col-sm-12 text-center mt-2">
                <img src={res.picture.large} className="profile"/>
                <p class="mt-2 employeeName">{res.name.title} {res.name.first} {res.name.last}</p>
                <hr></hr>

                <div className="row details">
                  
                  <div className="col-sm-12">

                  <div className="row">
                      <div className="col-4 text-left">
                      Intergalactic Ship
                      </div>
                      <div className="col-8 text-left">{res.id.name}</div>
                  </div>
                  <div className="row">
                      <div className="col-4 text-left">
                      ID
                      </div>
                      <div className="col-8 text-left">{res.id.value}</div>
                  </div>
                  <div className="row">
                       <div className="col-4 text-left">
                       e-Mail
                      </div>
                      <div className="col-8 text-left">

<a href={"mailto:" + res.email}>{res.email}</a>

                      </div>
                  </div>
                  <div className="row">
                      <div className="col-4 text-left">
                      Phone No.
                      </div>
                      <div className="col-8 text-left">{res.phone}</div>
                  </div>
                  <div className="row">
                      <div className="col-4 text-left">
                      Cell No.
                      </div>
                      <div className="col-8 text-left">{res.cell}</div>
                  </div>
                  </div>
                </div>
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