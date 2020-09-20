import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    breeds: [],
    result: [],
    error: "",
    galaxy: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  // List of countries populated directly from website due to random list excepting some records.
  // componentDidMount() {
  //   // API.getBaseBreedsList()
  //   //   .then(res => this.setState({ breeds: res.data.results.nat }))
  //   //   .then(res => console.log(res.data.results.nat))
  //   //   .catch(err => console.log(err));
  // }

  handleInputChange = event => {
    this.setState({ search: event.target.value })
    
  };

  handleSort = event => {

    event.preventDefault();
    let sortedResult =  this.state.result.sort(function(a, b){
        if(a.name.first < b.name.first) { return -1; }
        if(a.name.first >  b.name.firs) { return 1; }
        return 0;    
      });
          this.setState({result: sortedResult})
  }

  showGalaxy = event => {
      let galaxyTeam = this.state.galaxy;
      if(galaxyTeam === "AU") { galaxyTeam = "Andromeda"; this.setState({ galaxy: galaxyTeam}); };
      // this.galaxyTeam(); };
      if(galaxyTeam === "BR") { galaxyTeam = "Black Eye"; this.setState({ galaxy: galaxyTeam}); };
      // this.galaxyTeam(); };
      if(galaxyTeam === "CA") { galaxyTeam = "Cartwheel"; this.setState({ galaxy: galaxyTeam}); };
      // this.galaxyTeam(); };
      if(galaxyTeam === "CH") { galaxyTeam = "Cosmos"; this.setState({ galaxy: galaxyTeam}); };
      // this.galaxyTeam(); };
      if(galaxyTeam === "DE") { galaxyTeam = "Eye of Sauron"; this.setState({ galaxy: galaxyTeam}); };
      // this.galaxyTeam(); };
      if(galaxyTeam === "DK") { galaxyTeam = "Fireworks"; this.setState({ galaxy: galaxyTeam}); };
      // this.galaxyTeam(); };
      if(galaxyTeam === "ES") { galaxyTeam = "Hockey Stick"; this.setState({ galaxy: galaxyTeam}); };
      // this.galaxyTeam(); };
      if(galaxyTeam === "FI") { galaxyTeam = "Large Magellanic"; this.setState({ galaxy: galaxyTeam}); };
      // this.galaxyTeam(); };
      if(galaxyTeam === "FR") { galaxyTeam = "Large Sombrero"; this.setState({ galaxy: galaxyTeam}); };
      // this.galaxyTeam(); };
      if(galaxyTeam === "GB") { galaxyTeam = "Medusa Merger"; this.setState({ galaxy: galaxyTeam}); };
      // this.galaxyTeam(); };
      if(galaxyTeam === "IR") { galaxyTeam = "Milky Way"; this.setState({ galaxy: galaxyTeam}); };
      // this.galaxyTeam(); };
      if(galaxyTeam === "IE") { galaxyTeam = "Pinwheel"; this.setState({ galaxy: galaxyTeam}); };
      // this.galaxyTeam(); };
      if(galaxyTeam === "NO") { galaxyTeam = "Sculptor"; this.setState({ galaxy: galaxyTeam}); };
      // this.galaxyTeam(); };
      if(galaxyTeam === "NL") { galaxyTeam = "Southern Pinwheel"; this.setState({ galaxy: galaxyTeam}); };
      // this.galaxyTeam(); };
      if(galaxyTeam === "NZ") { galaxyTeam = "Triangulum"; this.setState({ galaxy: galaxyTeam}); };
      // this.galaxyTeam(); };
      if(galaxyTeam === "TR") { galaxyTeam = "Whirlpool"; this.setState({ galaxy: galaxyTeam}); };
      // this.galaxyTeam(); };
      if(galaxyTeam === "US") { galaxyTeam = "Wolf-Lundmark-Melotte"; this.setState({ galaxy: galaxyTeam}); };
      // this.galaxyTeam(); };
    
  }
 
  // galaxyTeam = event => {
  //   console.log("Final state: ",this.state.galaxy)
  // }

  handleFormSubmit = event => {
    
    event.preventDefault();
    console.log(this.state.search)
    API.getEmployeesByTeam(this.state.search)
        .then(res => {
          if (res.data.status === "error") {
            throw new Error(res.data.results);
          }
          this.setState({ result: res.data.results, error: "" });
        })
        .then(res => console.log(this.state.search))
        .then(this.setState({ galaxy: this.state.search }))
        .then(res => console.log("Galaxy State", this.state.galaxy ))
        .then(res => this.showGalaxy())
        .catch(err => this.setState({ error: err.result }));
        
  };
  
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%", backgroundColor: "black", color: "white" }}>
          <h1 className="text-center pt-5">Search Your Intergalactic Team</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            handleSort = {this.handleSort}
            breeds={this.state.breeds}
          />
          <SearchResults 
            result={this.state.result}
            galaxy={this.state.galaxy}
          />
        </Container>
      </div>
    );
  }
}

export default Search;
