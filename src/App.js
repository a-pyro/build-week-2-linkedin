import React, { Component } from "react";
import Footer from "./components/Footer";

export default class App extends Component {
  // componentDidMount = async () => {
  //   const resp = await fetch(
  //     'https://striveschool-api.herokuapp.com/api/profile/5fc4ae95b708c200175de88d',
  //     {
  //       headers: {
  //         Authorization:
  //           'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMWEyNzZmZDIyODAwMTUzZmRiYjEiLCJpYXQiOjE2MTc2OTczMTksImV4cCI6MTYxODkwNjkxOX0.bSzAALu5Ose7Gdie6QifObaHxeHflzff7nHtUlrYWfI',
  //       },
  //     }
  //   );
  //   const data = await resp.json();
  //   console.log(data);
  // };
  render() {
    return (
      <div>
        <Footer />
      </div>
    );
  }
}
