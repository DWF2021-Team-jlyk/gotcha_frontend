import React from "react";
import {TextField} from "@material-ui/core";

const AccountTextField = (props) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id={props.type}
            label={props.type}
            name={props.type}
        />
    )
}