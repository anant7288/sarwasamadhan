import React from "react";
import reactDOM from "react-dom";
import "./styles/style.scss";
import Routes from "./Routes.js";

// const template = React.createElement('h1', null, 'Sarwa Samadhan is Under Construction!!!')

//

const App = () => {
  return (
    <div>
      <h1>Sarwa Samadhan is Under Construction!!!</h1>
      <h3>Coming Soon</h3>
    </div>
  );
};
reactDOM.render(<Routes />, document.getElementById("root"));
