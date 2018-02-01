import * as React from "react";
import { RouteComponentProps } from "react-router";
import { IPerson, PeopleApi } from "../../../api/people-api";
import { PersonTable } from "./components/person-table";

export interface PeopleListProps extends RouteComponentProps<any> { }
export interface PeopleListState { people: IPerson[]; }

export class PeopleList extends React.Component<PeopleListProps, PeopleListState>{
    constructor(props: PeopleListProps) {
        super(props);

        this.state = {
            people: [],
        }
    }

    async componentWillMount() {
        this.setState({
            people: await PeopleApi.getPeople()
        })
    }

    render() {
        const people = this.state.people;

        const content = (
            people && people.length > 0
                ? <PersonTable people={people} clickHandler={(id) => this.props.history.push(`/people/${id}`)}></PersonTable>
                : <div>There are no people to display.</div>
        );

        return (
            <div className="ns-people-list">
                <h1>People</h1>
                {content}
            </div>
        );
    }
}

