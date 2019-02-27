import React from 'react';
import * as PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import FavItems from './FavItems';
import classNames from "classnames";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        width: "80%",
        margin: "auto",
    },
    gridList: {
        flex: 1,
    },
    gridRoot: {
        marginBottom: theme.spacing.unit * 2,
        "&:last-child": {
            marginBottom: 0,
        }
    },
    bigAvatar: {
        margin: theme.spacing.unit * 2,
        width: 85,
        height: 85,
    },
    cover: {
        minWidth: 151,
        minHeight: 200,
    },
    card: {
        display: "flex",
    },
    newsCard: {
        minHeight: 350,
    }
});

function ImageGridList(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <Grid container alignItems="center" spacing={16}>
                <Grid item xs={2}>
                    <Avatar
                        src="http://www.heyhuangshan.com/uploadfile/2018/0426/20180426094043361.jpg"
                        className={classes.bigAvatar}/>
                </Grid>
                <Grid item xs>
                    <Typography variant="h5" gutterBottom>Ou Foaly</Typography>
                    <Typography variant="subheading" color="textSecondary" gutterBottom>School of Computer Science and
                        Engineering</Typography>
                    <Typography variant="body1">
                        Design is not just what it looks like and feels like. Design is how it works.
                    </Typography>
                </Grid>
            </Grid>

            <Grid className={classes.gridRoot} container spacing={16}>
                <Grid item>
                    <Typography variant="subtitle1" align="left" component={"div"}
                                gutterBottom>Announcement</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cover}
                            image={"http://youmeitu.oss-cn-hongkong.aliyuncs.com/docs/allimg/180225/4-1P225111956.jpg"}
                        />
                        <CardContent>
                            <Typography variant="h6">
                                Go Explore the World
                            </Typography>
                            <Typography variant="subheading" color="textSecondary">
                                GEM Office
                            </Typography>
                            <Typography className={classes.info} paragraph variant="body2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
                                numquam
                                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Vestibulum ante dui,
                                tristique tempus mi eget, vulputate eleifend ligula. Duis leo lacus, porta ut bibendum
                                id
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cover}
                            image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfGrbjkH562mDLJM958c_6bfLWZGprYf4Y5HOcu5zhOcXgI2uB"}
                        />
                        <CardContent>
                            <Typography variant="h6">
                                Vestibulum rutrum
                            </Typography>
                            <Typography variant="subheading" color="textSecondary">
                                arcu justo sed
                            </Typography>
                            <Typography className={classes.info} paragraph variant="body2">
                                Donec quis posuere purus. Quisque vehicula leo nec nibh volutpat varius. Vestibulum non
                                eros at velit pharetra ultrices. In sit amet fermentum augue. Duis imperdiet mattis
                                sodales. Cras malesuada mauris at rhoncus bibendum. Pellentesque eleifend in lorem id
                                tempus. Praesent vel mi eget orci volutpat iaculis id id augue. Integer tortor nunc,
                                rhoncus nec erat eget, sagittis tincidunt nulla. Curabitur a ante eu libero pretium
                                commodo. Curabitur eget vehicula odio.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid className={classes.gridRoot} container spacing={16}>
                <Grid item xs={12}>
                    <Typography className={classes.info} variant="subtitle1">News</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classNames(classes.card, classes.newsCard)}>
                        <Grid container alignContent="top" direction="column">
                            <Grid item>
                                <CardMedia
                                    component="img"
                                    alt="canteen-picture"
                                    className={classes.media}
                                    height="140"
                                    width="120"
                                    image="https://i.ytimg.com/vi/qhNcjHqYdns/maxresdefault.jpg"
                                    title="canteen-picture"
                                />
                            </Grid>
                            <Grid item xs>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">

                                    </Typography>
                                    <Typography component="p">
                                        Scrumptious Si Chuan mixed rice. They provide both spicy and non-spicy food
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classNames(classes.card, classes.newsCard)}>
                        <Grid container alignContent="top" direction="column">
                            <Grid item>
                                <CardMedia
                                    component="img"
                                    alt="canteen-picture"
                                    className={classes.media}
                                    height="140"
                                    width="120"
                                    image="https://www.ntu.edu.sg/PublishingImages/new/News/9thsatellite.jpg"
                                    title="canteen-picture"
                                />
                            </Grid>
                            <Grid item xs>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Scientists from Nanyang Technological University, Singapore’s (NTU Singapore)
                                        has successfully launched and deployed its ninth satellite.
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classNames(classes.card, classes.newsCard)}>
                        <Grid container alignContent="top" direction="column">
                            <Grid item>
                                <CardMedia
                                    component="img"
                                    alt="canteen-picture"
                                    className={classes.media}
                                    height="140"
                                    width="120"
                                    image=" https://www.ntu.edu.sg/PublishingImages/new/News/Union.jpg"
                                    title="canteen-picture"
                                />
                            </Grid>
                            <Grid item xs>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">

                                    </Typography>
                                    <Typography component="p">
                                        The Nanyang Technological University, Singapore's Students
                                        Union (NTUSU) today launched two new initiatives to give fresh graduates a head
                                        start in their careers.
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>

            <Grid className={classes.card} container>
                <Grid xs={12}>
                    <Typography className={classes.info} variant="subtitle1">Guess you will like:</Typography>
                </Grid>
                <Grid>
                    <FavItems/>
                </Grid>
            </Grid>

        </div>
    );
}

ImageGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);