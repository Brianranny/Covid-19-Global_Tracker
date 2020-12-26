import React, { Component } from "react";

import axios from "../../axios";
import CountryList from "../../components/Stats/Countries/CountryList/CountryList";
import Aux from "../../hoc/Auxillary/Auxillary";
import SearchBox from "../../components/Stats/SearchBox/SearchBox";
import styles from "./Covid19Statistics.module.css";
import { Grid } from "@material-ui/core";

class Covid19Statistics extends Component {
  state = {
    countries: [],
    loading: true,
    error: false,
    searchCountry: "",
  };
  componentDidMount() {
    axios
      .get("/countries?sort=country.json")
      .then((response) => {
        // console.log(response);
        this.setState({ countries: response.data, loading: false });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  handleInput = (event) => {
    console.log(event.target.value);
    this.setState({ searchCountry: event.target.value });
  };

  render() {
    let filteredCountries = this.state.countries.filter((country) => {
      return country.country
        .toLowerCase()
        .includes(this.state.searchCountry.toLowerCase());
    });

    if (this.state.loading) {
      if (!this.state.error) {
        return <h1>Loading</h1>;
      }
    } else {
      return (


<div className="container">
            <div className="home">
              {/* <Summary /> */}
              <SearchBox handleInput={this.handleInput} />
              <div className="row countries dt dt--fixed">
                <CountryList
                  className="dtc tc pv4"
                  filteredCountries={filteredCountries}
       
                />
              </div>
            </div>
          </div>
        
       
      );
    }
  }
}

export default Covid19Statistics;
