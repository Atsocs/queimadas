import React from "react";
import axios from "axios"
class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = { placeholder_city: 'Busque por uma cidade',
                     placeholder_state: 'Digite o estado correspondente' };
    }

    getData(){
      const resCity = axios.post("http://localhost:3001/api/city", {
        city: document.getElementById("city").value,
        state: document.getElementById("state").value
      }).then((res) => {
        const body = res.body;
        this.setState({
          resCity: res.data
        })
        console.log(this.state)
      }).catch((e) => {
        console.log(e);
      })

      const resState = axios.post("http://localhost:3001/api/city", {
        city: "",
        state: document.getElementById("state").value
      }).then((res) => {
        const body = res.body;
        this.setState({
          resState: res.data
        })
        console.log(this.state)
      }).catch((e) => {
        console.log(e);
      })
    }

    handleSubmit = (event) => {
      event.preventDefault();
      console.log(this)
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