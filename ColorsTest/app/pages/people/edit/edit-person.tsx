import * as React from "react";
import * as classnames from "classnames";
import { RouteComponentProps } from "react-router";
import { IPerson, PeopleApi } from "../../../api/people-api";
import { IColor, ColorsApi } from "../../../api/colors-api";

import EditBooleanItem from "./components/edit-boolean-item";

export interface EditPersonProps extends RouteComponentProps<any> { }
export interface EditPersonState { person: IPerson, colors: IColorViewModel[] }

export class EditPerson extends React.Component<EditPersonProps, EditPersonState>{
    constructor(props: EditPersonProps) {
        super(props);

        this.state = {
            person: null,
            colors: []
        };
    }

    render() {
        const person = this.state.person;

        if (person === null) {
            return (
                <div>
                    <i className="fa fa-cog fa-spin fa-2x"></i>
                </div>
            );
        }

        return (
            <div className="ns-edit-person">

                <div className="panel">

                    <div className="edit-person-header">
                        Update {person.fullName}
                    </div>

                    <EditBooleanItem
                        name="Is Authorised"
                        selected={person.isAuthorised}
                        clickHandler={this.setAuthorised.bind(this)}>
                    </EditBooleanItem>

                    <EditBooleanItem
                        name="Is Enabled"
                        selected={person.isEnabled}
                        clickHandler={this.setEnabled.bind(this)}>
                    </EditBooleanItem>

                    <div>
                        <div className="edit-person-colors">
                            Colors
                        </div>

                        {
                            this.state.colors.map(x =>
                                <EditBooleanItem
                                    key={x.id}
                                    name={x.name}
                                    selected={x.selected}
                                    clickHandler={this.colorClicked.bind(this)}>
                                </EditBooleanItem>
                            )
                        }

                    </div>

                    <div className="panel-footer">
                        <button className="btn btn-primary" onClick={() => this.save()}>
                            Save
                        </button>
                        <button className="btn btn-default" onClick={() => this.cancel()}>
                            Cancel
                        </button>
                    </div >

                </div >
            </div>
        );
    }

    private allColors: IColor[];

    componentDidMount() {
        this.fetchData(this.props.match.params.id);
    }

    componentDidUpdate(prevProps: EditPersonProps) {

        const personId = this.props.match.params.id;

        if (personId !== prevProps.match.params.id) {
            this.fetchData(personId);
        }
    }

    async fetchData(personId: number) {
        this.allColors = await ColorsApi.getColors();

        const person = await PeopleApi.getPerson(personId);

        const colors = this.allColors.map(x => {
            return {
                id: x.id,
                name: x.name,
                selected: person.colors.some(y => y.id == x.id)
            }
        });

        this.setState({
            person: person,
            colors: colors
        });
    }

    private async save() {
        const person = this.state.person;

        person.colors = this.state.colors.filter(x => x.selected).map(x => {
            return {
                id: x.id,
                name: x.name
            };
        });

        await PeopleApi.updatePerson(person);

        this.props.history.push("/people");
    }

    private cancel() {
        this.props.history.push("/people");
    }

    private setAuthorised() {
        const person = this.state.person;
        person.isAuthorised = !person.isAuthorised;
        this.setState({
            person: person
        });
    }

    private setEnabled() {
        const person = this.state.person;
        person.isEnabled = !person.isEnabled;
        this.setState({
            person: person
        });
    }

    private colorClicked(name: string) {
        const colors = this.state.colors;
        const color = colors.find(x => x.name == name);
        color.selected = !color.selected;
        this.setState({
            colors: colors
        });
    }
}

export interface IColorViewModel {
    id: number,
    name: string;
    selected: boolean;
}

