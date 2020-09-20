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
         
              <option value="AU" key="AU">Andromeda</option>
              <option value="BR" key="BR">Black Eye</option>
              <option value="CA" key="CA">Cartwheel</option>
              <option value="CH" key="CH">Cosmos</option>
              <option value="DE" key="DE">Eye of Sauron</option>
              <option value="DK" key="DK">Fireworks</option>
              <option value="ES" key="ES">Hockey Stick</option>
              <option value="FI" key="FI">Large Magellanic</option>
              <option value="FR" key="FR">Large Sombrero</option>
              <option value="GB" key="GB">Medusa Merger</option>
              <option value="IR" key="IR">Milky Way</option>
              <option value="IE" key="IE">Milky Way</option>
              <option value="NO" key="NO">Pinwheel</option>
              <option value="NL" key="NL">Sculptor</option>
              <option value="NZ" key="NZ">Southern Pinwheel</option>
              <option value="TR" key="TR">Whirlpool</option>
              <option value="US" key="US">Wolf-Lundmark-Melotte</option>
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
