import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="searchForm">
      <div className="form-group">
        <label htmlFor="searchTeam"><b>Search</b></label>
        <input value={props.search} onChange={props.handleInputChange} name="nat" type="text" list="countries" id="nat" className="searchTeam form-control" placeholder="Search Your Intergalactic Team..." />
        <datalist id="countries">
         
              <option value="AU" key="AU">Australia</option>
              <option value="BR" key="BR">Brazil</option>
              <option value="CA" key="CA">Canada</option>
              <option value="CH" key="CH">China</option>
              <option value="DE" key="DE">Germany</option>
              <option value="DK" key="DK">Denmark</option>
              <option value="ES" key="ES">Spain</option>
              <option value="FI" key="FI">Finland</option>
              <option value="FR" key="FR">France</option>
              <option value="GB" key="GB">Great Britain</option>
              <option value="IR" key="IR">Iran</option>
              <option value="IE" key="IE">Ireland</option>
              <option value="NO" key="NO">Norway</option>
              <option value="NL" key="NL">Netherlands</option>
              <option value="NZ" key="NZ">New Zealand</option>
              <option value="TR" key="TR">Turkey</option>
              <option value="US" key="US">United States</option>
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-dark mt-2">
          Let the Journey Begin
        </button>
        <button type="submit" onClick={props.handleSort} className="btn btn-dark mt-2">
          Organize Your Galaxy Members Alphabetically
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
