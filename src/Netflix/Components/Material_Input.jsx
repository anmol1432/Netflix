import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

function Material_Input(props) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item >
                        {props.icon}
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label={props.label} name={props.name} value={props.value} onChange={ props.onChange}/>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Material_Input;
