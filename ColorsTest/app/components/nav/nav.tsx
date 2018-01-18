import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";

interface NavProps extends RouteComponentProps<any> { }

class Nav extends React.Component<NavProps, any> {

    render() {
        return (
            <div className="ns-nav">
                <div className="menu-bar">
                    <div className="menu-bar-title" onClick={() => { this.props.history.push("/people") }}>
                        Favourite Colors
                    </div>
                    <div className="menu-bar-item" onClick={() => { this.props.history.push("/people") }}>
                        <i className="fa fa-user-circle-o fa-fw"></i>
                    </div>
                    <div className="menu-bar-item" onClick={() => { this.goToColors() }}>
                        <i className="fa fa-paint-brush fa-fw"></i>
                    </div>
                </div>
            </div>
        );
    }

    goToColors(){
        this.props.history.push("/colors")
    }
}

export default withRouter(Nav);