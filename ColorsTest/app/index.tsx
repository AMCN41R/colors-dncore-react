import * as React from "react";
import * as ReactDOM from "react-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";



const App = () => (
    <div className="container">
        <h2 className="bg-gray">Welcome!</h2>
    </div>
)

ReactDOM.render(
    <App />,
    document.getElementById("app")
);