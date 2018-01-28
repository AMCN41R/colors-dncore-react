import * as React from "react";

interface YesNoProps { value: boolean }

export class YesNo extends React.Component<YesNoProps, any>{
    render() {
        return (
            <span>{this.props.value ? "Yes" : "No"}</span>
        );
    }
}