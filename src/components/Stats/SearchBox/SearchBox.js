import React from "react";

import styles from "./SearchBox.module.css";

const SearchBox = (props) => {
  return (
    <div className={styles.Row}>
      <div className={(styles.Colmd12, styles.CountrySearch)}>
        <input
          type="text"
          placeholder="Search by country "
          className={styles.FormControl}
          // ref={(value) => (this.myValue = value)}
          onChange={props.handleInput}
        />
      </div>
    </div>
  );
};

export default SearchBox;
