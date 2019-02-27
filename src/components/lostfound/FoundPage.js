import {Typography} from "@material-ui/core";
import lostItems from "../../asset/lostItems";
import React from "react";
import Grid from "@material-ui/core/Grid";
import ItemCard from "./ItemCard";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {};

const FoundPage = ({classes}) => (
    < div className={classes.section}>
        <Typography
            className={classes.subtitle}
            variant="h4"
        >
            Found Items
        </Typography>
        <Grid className={classes.root} spacing={8} container>
            {
                lostItems.map((lostitem, index) => (
                    <Grid key={index} item>
                        <ItemCard
                            lostitem={lostitem}
                        />
                    </Grid>
                ))
            }
        </Grid>
    </div>
);

export default withStyles(styles)(FoundPage);
