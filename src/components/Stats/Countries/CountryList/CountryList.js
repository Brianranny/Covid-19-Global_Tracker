import React from "react";

// import axios from "../../../../axios";
import CountryCard from "../CountryCard/CountryCard";
import styles from "./CountryList.module.css";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "2px",
    paddingRight: "2px",
  },
});

const CountryList = (props) => {
  const classes = useStyles();
  return (
    <Grid
      // container
      // direction="row"
      // justify="space-evenly"
      // alignItems="center"
      className={classes.gridContainer}
      spacing={2}
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
      {props.filteredCountries.map((country) => {
        return (
          <Grid
            spacing={0}
            item
            xs={4}
            lg={4}
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <CountryCard
              className={styles.CountryList}
              key={country.country}
              country={country.country}
              flag={country.countryInfo.flag}
              cases={country.cases}
              todayDeaths={country.todayDeaths}
              recovered={country.recovered}
              critical={country.critical}
              todayCases={country.todayCases}
              deaths={country.deaths}
              casesPerOneMillion={country.casesPerOneMillion}
              deathsPerOneMillion={country.deathsPerOneMillion}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CountryList;

// class CountryList extends Component {
//   state = {
//     countries: [],
//     loading: true,
//     error: false,
//   };
//   componentDidMount() {
//     axios
//       .get("/countries?sort=country.json")
//       .then((response) => {
//         console.log(response);
//         this.setState({ countries: response.data, loading: false });
//       })
//       .catch((error) => {
//         this.setState({ error: true });
//       });
//   }

//   render() {
//     let countries = <p>Loading...</p>;
//     if (!this.state.loading) {
//       if (!this.state.error) {
//         countries = this.state.countries.map((country) => {
//           return (
//             <CountryCard
//               key={country.country}
//               country={country.country}
//               flag={country.countryInfo.flag}
//               cases={country.cases}
//               todayDeaths={country.todayDeaths}
//               recovered={country.recovered}
//               critical={country.critical}
//               todayCases={country.todayCases}
//               deaths={country.deaths}
//               casesPerOneMillion={country.casesPerOneMillion}
//               deathsPerOneMillion={country.deathsPerOneMillion}
//             />
//           );
//         });
//       }
//     }
//     return <div className={styles.Row}>{countries}</div>;
//   }
// }

// export default CountryList;
