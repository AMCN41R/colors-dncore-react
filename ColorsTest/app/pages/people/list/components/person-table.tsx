import * as React from "react";
import { IPerson } from "../../../../api/people-api";
import { PersonRow } from "./person-row";

interface IPersonTableProps { people: IPerson[], clickHandler: (id: number) => void }

export class PersonTable extends React.Component<IPersonTableProps, any>{
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="align-center">Is Authorised</th>
                        <th className="align-center">Is Enabled</th>
                        <th className="align-center">Is Palindrome</th>
                        <th>Colors</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.people.map(x => <PersonRow key={x.id} person={x} clickHandler={this.props.clickHandler}></PersonRow>)}
                </tbody>
            </table>
        );
    }
}