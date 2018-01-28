import * as React from "react";
import { IPerson } from "../../../../api/people-api";
import { YesNo } from "../../../../components/yes-no";

interface IPersonRowProps { person: IPerson }

export class PersonRow extends React.Component<IPersonRowProps, any>{
    render() {
        const person = this.props.person;

        return (
            <tr>
                <td>
                    <a>
                        {person.fullName}
                    </a>
                </td>
                <td className="align-center"><YesNo value={person.isAuthorised}></YesNo></td>
                <td className="align-center"><YesNo value={person.isEnabled}></YesNo></td>
                <td className="align-center"><YesNo value={person.isPalindrome}></YesNo></td>
                <td>{person.colors.map(x => x.name).join(", ")}</td>
            </tr>
        );
    }
}