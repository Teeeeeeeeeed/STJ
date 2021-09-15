import React, { useState } from "react";
import { TextField, Typography, Grid, Container, FormControl, InputLabel, Input, FormHelperText, Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const SubmitForm = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}} >
            <div style={{display: 'flex', flexGrow: 1, justifyContent:'center', alignItems:'center'}}>
                <FormControl>
                    <InputLabel htmlFor="my-input"> Project Name </InputLabel>
                    <Input id="my input" aria-describeby="The project name"/>
                    <FormHelperText id="The project name"> The Github Project Name</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input"> Github Url</InputLabel>
                    <Input id="my input" aria-describeby="The Github Url"/>
                    <FormHelperText id="The project name"> The Github Project url</FormHelperText>
                </FormControl>
            </div>
            <Button>Submit </Button>
        </div>
    )
};

export default SubmitForm;