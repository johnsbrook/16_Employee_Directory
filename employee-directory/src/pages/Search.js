import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    // search: "",
    // employees: [],
    // results: [],
    // error: ""
    users: [],
    store: []
  };

  // When the component mounts, get a list of all available base employees and update this.state.employees
  componentDidMount() {
    API.getBaseEmployeesList()
        .then(json => console.log(json))
        .then(json => json.data.results.map(result => ({
          name: `${result.name.title} ${result.name.first} ${result.name.last}`,
          id: result.registered
        })))
        .then(newData => this.setState({
          users: newData,
          store: newData
        }))
      // .then(res => this.setState({ employees: res.data.message }))
        .catch(err => console.log(err));
  }

  filterNames(event){
    this.setState({
      users: this.state.store.filter(
        item => item.name.toLowerCase().includes(event.target.value.toLowerCase())
      )})
  }

//   handleInputChange = event => {
//     this.setState({ search: event.target.value });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     API.getEmployeessOfEmployee(this.state.search)
//       .then(res => {
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
          
//         }
//         this.setState({ results: res.data.message, error: "" });
//       })
//       .catch(err => this.setState({ error: err.message }));
//   };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center mt-4">Search In Employee Database</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            employees={this.state.employees}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
