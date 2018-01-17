import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Switch,
    Redirect,
    withRouter,
    RouteComponentProps
} from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const Colors = () => (
    <div>
        <h3>Colors</h3>
    </div>
)

const People = () => (
    <div>
        <h3>People</h3>
    </div>
)

const Person = ({ match }: RouteComponentProps<any>) => (
    <div>
        <h3>Person {match.params.id}</h3>
    </div>
)

const NoMatch = ({ location }: RouteComponentProps<any>) => (
    <div>
        <h3>No match for <code>{location.pathname}</code></h3>
    </div>
)

const App = () => (
    <div>
        <Switch>
            {/* <Redirect from="/" to="/people" /> */}
            <Route path="/colors" component={Colors} />
            <Route path="/people/:id" component={Person} />
            <Route path="/people" component={People} />
            <Route component={NoMatch} />
        </Switch>
    </div>
)

ReactDOM.render((
    <HashRouter>
        <App />
    </HashRouter>),
    document.getElementById("app")
);
