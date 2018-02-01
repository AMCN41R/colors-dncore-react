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
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./index.scss";

import Nav from "./components/nav/nav";

import { PeopleList } from "./pages/people/list/people-list";
import { EditPerson } from "./pages/people/edit/edit-person";
import { ColorAdmin } from "./pages/colors/color-admin";

const NoMatch = ({ location }: RouteComponentProps<any>) => (
    <div>
        <h3>No match for <code>{location.pathname}</code></h3>
    </div>
)

const App = () => (
    <div>
        <Nav />
        <div className="container app-container">
            <Switch>
                <Redirect exact from="/" to="/people" />
                <Route path="/colors" component={ColorAdmin} />
                <Route path="/people/:id" component={EditPerson} />
                <Route path="/people" component={PeopleList} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </div>
)

ReactDOM.render((
    <HashRouter>
        <App />
    </HashRouter>),
    document.getElementById("app")
);
