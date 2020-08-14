//Jumbotron (only on Home page)
import React from "react";

const styles = {
  jumboStyle: {
    backgroundImage: `url("https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")`,
    backgroundSize: "cover",
      paddingTop: "15%",
      paddingBottom: "20%",
      marginBottom: "0%",
  }
};
function Jumbotron() {
    return (

<div className="jumbotron jumbotron-fluid" style={styles.jumboStyle}>
  <div className="container">
  </div>
</div>
    )}

    export default Jumbotron;