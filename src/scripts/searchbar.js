import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', 
                    placeholder: 'Pesquise por uma cidade',
                };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      ////// colocar função de autocomplete
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
      //////colocar a função que trata a cidade pesquisada pelo usuário
    }
  
    render() {
      return (
        <div>
          <form>
            <label>
              <input className="searchbar" type="text" placeholder={this.state.placeholder} onChange={this.handleChange} name="search_text"/>
            </label>
              <input type="submit" value="Procurar" name="search_button" onClick={this.handleSubmit}/>
          </form>
        </div>
      );
    }
  }

export default SearchBar;