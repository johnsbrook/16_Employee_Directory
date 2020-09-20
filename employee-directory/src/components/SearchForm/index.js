import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="searchForm text-center">
      <div className="form-group">
        <label htmlFor="searchTeam"><b>Filter Members by Intergalactic Team</b></label>
        <input value={props.search} onChange={props.handleInputChange} name="nat" type="text" list="galaxies" id="nat" className="searchTeam form-control" placeholder="Search Team By Galaxy..." />
        <datalist id="galaxies">         
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
          <option value="IE" key="IE">Pinwheel</option>
          <option value="NO" key="NO">Sculptor</option>
          <option value="NL" key="NL">Southern Pinwheel</option>
          <option value="NZ" key="NZ">Triangulum</option>
          <option value="TR" key="TR">Whirlpool</option>
          <option value="US" key="US">Wolf-Lundmark-Melotte</option>
        </datalist>

        {/* Filter the users by at least one property. (by Galaxy Name) */}
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-dark mt-2 mx-auto">
          Let the Journey Begin
        </button>

        {/* Sort the table by at least one category (alphabetically) */}
        <button type="submit" onClick={props.handleSort} className="btn btn-dark mt-2 ml-2">
          Organize Galaxy Members Alphabetically
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
