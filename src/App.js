import React from "react";

import Layout from "./hoc/Layout/Layout";
import Covid19Statistics from "./containers/Covid19Statistics/Covid19Statistics";

function App() {
  return (
    <Layout>
      <Covid19Statistics />
    </Layout>
  );
}

export default App;
