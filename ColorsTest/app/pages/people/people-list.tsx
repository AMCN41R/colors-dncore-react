import * as React from "react";
import { RouteComponentProps } from "react-router";

export interface PeopleListProps extends RouteComponentProps<any> { }

export class PeopleList extends React.Component<PeopleListProps, any>{

    render() {
        return (
            <div>
                <h3>People</h3>
            </div>
        );
    }
}