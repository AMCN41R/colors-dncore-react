import * as React from "react";
import { RouteComponentProps } from "react-router";

export interface EditPersonProps extends RouteComponentProps<any> { }

export class EditPerson extends React.Component<EditPersonProps, any>{

    render() {
        return (
            <div>
                <h3>Person {this.props.match.params.id}</h3>
            </div>
        );
    }
}