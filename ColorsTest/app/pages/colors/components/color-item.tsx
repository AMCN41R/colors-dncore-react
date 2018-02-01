import { IColor } from "../../../api/colors-api";
import * as React from "react";

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

export default ColorItem;