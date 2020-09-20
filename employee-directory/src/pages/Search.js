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
    error: ""
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
  })


  this.setState({result: sortedResult})

  }

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
          <SearchResults result={this.state.result} />
        </Container>
      </div>
    );
  }
}

export default Search;
