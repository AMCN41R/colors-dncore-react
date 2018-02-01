import * as React from "react";
import { IColorViewModel } from "../edit-person";

interface IEditBooleanItemProps { 
    name: string,
    selected: boolean,
    clickHandler: (name: string) => void 
}

const EditBooleanItem = (props: IEditBooleanItemProps) => (
    <div className="edit-item" onClick={() => props.clickHandler(props.name)}>
        <span className="edit-item-name">{props.name}</span>
        <div className="edit-item-check pull-right">
        <i className={
            props.selected
                ? "fa fa-check-square-o fa-fw"
                : "fa fa-square-o fa-fw"
        }></i>
        </div>
    </div>
);

export default EditBooleanItem