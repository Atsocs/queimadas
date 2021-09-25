import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = { placeholder_city: 'Busque por uma cidade',
                     placeholder_state: 'Digite o estado correspondente' };
    }
  
    render() {
      return (
        <div>
          <form method="POST" action="../../api/city">
            <label>
              <input className="SearchBar" type="text" placeholder={this.state.placeholder_city} name="city"/><br/>
              <input className="SearchBar" type="text" placeholder={this.state.placeholder_state} name="state"/><br/><br/>
            </label>
              <input type="submit" value="Procurar" name="search_button"/><br/><br/>
          </form>
        </div>
      );
    }
  }

export default SearchBar;