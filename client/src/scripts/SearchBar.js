import React from "react";
import axios from "axios";
import toTitleCase from './title_case';

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = { placeholder_city: 'Busque por uma cidade',
                     placeholder_state: 'Digite o estado correspondente' };
      this.setAppData = props.setAppData;
    }

    getData(){
      const cityName = toTitleCase(document.getElementById("city").value);
      const stateName = toTitleCase(document.getElementById("state").value);
      axios.post("http://localhost:3001/api/city", {
        city: cityName,
        state: stateName,
      }).then((res) => {
        this.setAppData({
          found: true,
          cityName: cityName,
          cityFires: res.data.num_focos,
        })
      }).catch((e) => {
        console.log(e);
      })

      axios.post("http://localhost:3001/api/city", {
        city: "",
        state: stateName,
      }).then((res) => {
        this.setAppData({
          found: true,
          stateName: stateName,
          stateFires: res.data.num_focos,
        })
      }).catch((e) => {
        console.log(e);
      })
    }

    handleSubmit = (event) => {
      event.preventDefault();
      this.getData();
    }
  
    render() {
      return (
        <div>
          <form method="POST" action="../../api/city">
            <label>
              <input id="city" className="SearchBar" type="text" placeholder={this.state.placeholder_city} name="city"/><br/>
              <input id="state" className="SearchBar" type="text" placeholder={this.state.placeholder_state} name="state"/><br/><br/>
            </label>
              <input type="submit" value="Procurar" name="search_button" onClick={this.handleSubmit}/><br/><br/>
          </form>
        </div>
      );
    }
  }

export default SearchBar;