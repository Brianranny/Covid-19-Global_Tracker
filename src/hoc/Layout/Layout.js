import React from "react";

import Aux from "../Auxillary/Auxillary";
import styles from "./Layout.module.css";

const layout = (props) => {
  return (
    <Aux>
      <div>Toolbar, Backdrop</div>
      <main className={styles.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
