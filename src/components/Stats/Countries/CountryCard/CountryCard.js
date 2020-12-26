import React from "react";

import styles from "./CountryCard.module.css";
import Toggle from "../../../UI/Toggle/Toggle";

const CountryCard = (props) => {
  return (
    <div className={styles.Card}>
      <Toggle
        show={({ on, toggle }) => (
          <div>
            <article className={styles.Mb2}>
              <div onClick={toggle} className={styles.CardBody}>
                <div onClick={toggle} className={styles.Mb2}>
                  <span className={styles.CountryTitle}>
                    {" "}
                    <u> {props.country} </u>
                  </span>
                  <span>
                    <img className={styles.Img} src={props.flag} alt="  " />
                  </span>
                </div>

                {on && (
                  <div>
                    <p className={styles.CardText}>
                      <span className={(styles.CountryNum, styles.Cases)}>
                        {" "}
                        {props.cases}{" "}
                      </span>
                      total cases reported
                    </p>

                    <p className={styles.CardText}>
                      <span className={(styles.CountryNum, styles.Dead)}>
                        {props.deaths}
                      </span>
                      total dead
                    </p>

                    <p className={styles.CardText}>
                      <span className={(styles.CountryNum, styles.Recover)}>
                        {props.recovered}{" "}
                      </span>
                      patients have recovered{" "}
                    </p>

                    <p className={styles.CardText}>
                      <span className={(styles.CountryNum, styles.Critical)}>
                        {props.critical}{" "}
                      </span>{" "}
                      are in critical condition
                    </p>

                    <hr />

                    <p className={styles.cardText}>
                      <span className={(styles.CountryNum, styles.new)}>
                        {" "}
                        {props.todayCases}{" "}
                      </span>
                      cases today
                    </p>

                    <p className={styles.CardText}>
                      <span className={(styles.CountryNum, styles.Dead)}>
                        {props.todayDeaths}{" "}
                      </span>{" "}
                      have died today
                    </p>

                    <hr />

                    <p className={styles.CardText}>
                      <span className={styles.CountryNum}>
                        {props.casesPerOneMillion}{" "}
                      </span>
                      cases per one million
                    </p>

                    <p className={styles.CardText}>
                      <span className={(styles.CountryNum, styles.DeathPer)}>
                        {props.deathsPerOneMillion}{" "}
                      </span>
                      deaths per one million
                    </p>
                  </div>
                )}
              </div>
            </article>
          </div>
        )}
      />
    </div>
  );
};

export default CountryCard;

// import React, { Component } from "react";

// import axios from "axios";
// import CountryList from "../CountryList/CountryList";

// import styles from "./CountryCard.module.css";

// class CountryCard extends Component {
//   state = {
//     countries: [],
//     error: false,
//   };
//   componentDidMount() {
//     axios
//       .get("https://corona.lmao.ninja/v2/countries?sort=country.json")
//       .then((response) => {
//         console.log(response);
//         const countries = response.data;

//         const updatedCountries = countries.map((country) => {
//           return {
//             ...country,
//           };
//         });
//         this.setState({ countries: updatedCountries });
//         //   console.log(responce);
//       })

//       .catch((error) => {
//         this.setState({ error: true });
//       });
//   }

//   render() {
//     let countries = <p style={{ textAlign: "center" }}>Something went wrong</p>;
//     if (!this.state.error) {
//       countries = this.state.countries.map((country) => {
//         return (
// <CountryList
//   key={country.index}
//   country={country.country}
//   case={country.case}
//   todayDeaths={country.todayDeaths}
//   recovered={country.recovered}
//   critical={country.critical}
//   todayCases={country.todayCases}
//   deaths={country.deaths}
//   casesPerOneMillion={country.casesPerOneMillion}
//   deathsPerOneMillion={country.deathsPerOneMillion}
// />
//         );
//       });
//     }

//     return { countries };
//   }
// }

// export default CountryCard;

//     render() {
//         return (  );
//     }
// }

// export default CountryCard;

// const Card = (props) => {

//   return (
//     /* className="bg-washed-blue dib br3 pa5 ma2 grow bw2 shadow-5 " */
// <div className={styles.Card}>
//   <article className={styles.Mb2}>
//     <div className={styles.CardBody}>
//       <div className={styles.Mb2}>
//         <span className={styles.CountryTitle}>
//           {" "}
//           <u> {props.country} country </u>
//         </span>
//         {/* <span>
//           <img className={styles.Avatar} src="/" alt="  " />
//         </span> */}
//       </div>

//       <p className={styles.CardText}>
//         <span className={(styles.CountryNum, styles.Cases)}> {props.cases} </span>
//         total cases reported
//       </p>

//       <p className={styles.CardText}>
//         <span className={(styles.CountryNum, styles.Dead)}> {props.deaths} </span>{" "}
//         total dead{" "}
//       </p>

//       <p className={styles.CardText}>
//         <span className={(styles.CountryNum, styles.Recover)}>
//           {props.recovered}{" "}
//         </span>
//         patients have recovered{" "}
//       </p>

//       <p className={styles.CardText}>
//         <span className={(styles.CountryNum, styles.Critical)}>
//           {props.critical}{" "}
//         </span>{" "}
//         are in critical condition
//       </p>

//       <hr />

//       <p className={styles.cardText}>
//         <span className={(styles.CountryNum, styles.new)}>
//           {" "}
//           {props.todayCases}{" "}
//         </span>
//         cases today
//       </p>

//       <p className={styles.CardText}>
//         <span className={(styles.CountryNum, styles.Dead)}>
//           {props.todayDeaths}{" "}
//         </span>{" "}
//         have died today
//       </p>

//       <hr />

//       <p className={styles.CardText}>
//         <span className={styles.CountryNum}>{props.casesPerOneMillion} </span>
//         cases per one million
//       </p>

//       <p className={styles.CardText}>
//         <span className={(styles.CountryNum, styles.DeathPer)}>
//           {props.deathsPerOneMillion}{" "}
//         </span>
//         deaths per one million
//       </p>
//     </div>
//   </article>
// </div>
//   );
// };

// export default Card;

// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
// import Chip from "@material-ui/core/Chip";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import { red } from "@material-ui/core/colors";
// import { Paper } from "@material-ui/core";
// import Box from "@material-ui/core/Box";
// // import FavoriteIcon from '@material-ui/icons/Favorite';
// // import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%", // 16:9
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: "rotate(180deg)",
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// const CountryCard = (props) => {
//   const [expanded, setExpanded] = useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardHeader
//         avatar={<Avatar src={props.flag} />}
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title={<Typography>{props.country}</Typography>}
//         subheader="Current status"
//       />
//       <CardMedia title={<Typography>{props.country}</Typography>} />
//       <CardContent>
//         <Typography paragraph>
//           <Paper elevation="0">
//             <Box P={5}>
//               <Chip size="small" label={props.cases} color="primary" /> total
//               cases reported
//             </Box>
//           </Paper>
//         </Typography>

//         <Typography p="10">
//           <Paper elevation="0">
//             <Box P={5}>
//               <Chip size="small" label={props.deaths} color="primary" />
//               &nbsp; &nbsp;&nbsp;&nbsp;total dead
//             </Box>
//           </Paper>
//         </Typography>
//         <br />
//         <Typography paragraph align="inherent">
//           <Chip size="small" label={props.recovered} color="primary" />
//           &nbsp;patients have recovered
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         {/* <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton> */}
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography>Staticstics:</Typography>
//           <br />

//           <Typography paragraph>
//             <Chip label={props.critical} color="primary" /> are in critical
//             condition
//           </Typography>
//           <Typography paragraph>
//             <Chip label={props.todayCases} color="primary" /> total cases
//           </Typography>

//           <Typography paragraph>
//             <Chip label={props.todayDeaths} color="primary" /> have died today
//           </Typography>

//           <Typography paragraph>
//             <Chip label={props.casesPerOneMillion} color="primary" /> cases per
//             one million
//           </Typography>

//           <Typography paragraph>
//             <Chip label={props.deathsPerOneMillion} color="primary" /> deaths
//             per one million
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// };
// export default CountryCard;
