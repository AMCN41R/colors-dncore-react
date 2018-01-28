import * as React from "react";
import { IColor, ColorsApi } from "../../api/colors-api";

interface IColorAdminState { colors: IColor[] }

export class ColorAdmin extends React.Component<any, IColorAdminState> {
    constructor(props: any) {
        super(props);

        this.state = {
            colors: []
        };
    }

    async componentWillMount() {
        this.setState({
            colors: await ColorsApi.getColors()
        })
    }

    render() {
        const colors =
            this.state.colors && this.state.colors.length > 0
                ? this.state.colors.map(x => <ColorItem key={x.id} color={x}></ColorItem>)
                : <div>There are no colors to display.</div>;

        return (
            <div className="ns-colors">

                <div className="panel">

                    <div className="colors-header flex-container">
                        <div className="colors-header-title">
                            Available Colors
                        </div>
                        <div className=" colors-header-add pull right">
                            <i className="fa fa-plus"></i>
                        </div>
                    </div>

                    {colors}

                </div >

            </div >
        );
    }
}

interface IColorItemProps { color: IColor }

const ColorItem = (props: IColorItemProps) => (
    <div className="color-item">
        <span className="color-item-name">{props.color.name}</span>
        <div className="pull-right flex-container">
            <div className="action-icon">
                <i className="fa fa-trash fa-fw"></i>
            </div>
        </div>
    </div>
);