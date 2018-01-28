import * as React from "react";
import { withRouter, RouteComponentProps, NavLink } from "react-router-dom";

export default class Nav extends React.Component<any, any> {

    render() {
        return (
            <div className="ns-nav">
                <div className="menu-bar">
                    <NavLink to="/people" className="menu-bar-title">
                        <div>
                            Favourite Colors
                        </div>
                    </NavLink>
                    <NavLink to="/people" className="menu-bar-item">
                        <div>
                            <i className="fa fa-user-circle-o fa-fw"></i>
                        </div>
                    </NavLink>
                    <NavLink to="/colors" className="menu-bar-item">
                        <div>
                            <i className="fa fa-paint-brush fa-fw"></i>
                        </div>
                    </NavLink>
                </div>
            </div>
        );
    }
}
