import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Slide } from 'react-slideshow-image';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

const slideImages = [
  require("../asset/artisticSlideshow.jpg"),
  require("../asset/burgundySlideshow.jpg"),
  require("../asset/coralSlideshow.jpg"),
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const styles = theme => ({
  root: {
    alignItems: 'center',
  },

  search: {
    position: 'relative',
    boxShadow: theme.shadows[1],
    transition: [["box-shadow", "0.1s"]],
    '&:hover': {
      boxShadow: theme.shadows[4],
    },
    "&:focus": {
      boxShadow: theme.shadows[3],
    },
    marginTop: "3%",
    marginLeft: "10%",
    width: '80%',
  },
  searchIcon: {
    width: "100%",
    height: '100%',
    position: 'absolute',
    display: 'flex',
    pointerEvents: "none",
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: "95%",
    boxSizing: "border-box"
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    transition: theme.transitions.create('width'),
    width: '80%',
  },
  slideshowContainer: {
    marginTop: "5%",
  },
  slideshow: {
    height: "600px",
  },
  divider: {
    marginTop: "5%",
    marginBottom: "5%"
  },
  hot: {
    marginLeft: "10%",
    marginRight: "10%"
  },
  card: {
    maxWidth: 320,
  },
  media: {
    height: 140,
  },
});

class home extends React.Component {
  constructor(props) {
    super(props);
    this.searchContent = "";
  }

  handleSearchContent(evt){
    this.searchContent = evt.target.value;
    this.setState({
      searchContent: evt.target.value
    });
    console.log(this.searchContent);
  }

  handleSearch = (evt) =>{
    var code = evt.keyCode || evt.which;
    if(code === 13){
      if(this.searchContent === "wooden pen"){
        window.open('/wooden');
      }else if(this.searchContent === "pencil"){
        window.open('/pencil');
      }
    }
    
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>


        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon style={{ cursor: "pointer", pointerEvents: "all" }} />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            value={this.searchContent}
            onChange={evt=>{this.handleSearchContent(evt)}}
            onKeyPress={evt=>{this.handleSearch(evt)}}
          />
        </div>

        <div className={classes.divider}>
          <Divider />
        </div>

        <div className={classes.hot}>
          <Typography variant="h4" gutterBottom stype={{ marginLeft: "10%" }}>
            Featured
</Typography>
        </div>

        <div className={classes.slideshowContainer}>
          <Slide {...properties}>
            <div className="each-slide">
              <div className={classes.slideshow} style={{ 'backgroundImage': `url(${slideImages[0]})` }}>

              </div>
            </div>
            <div className="each-slide">
              <div className={classes.slideshow} style={{ 'backgroundImage': `url(${slideImages[1]})` }}>

              </div>
            </div>
            <div className="each-slide">
              <div className={classes.slideshow} style={{ 'backgroundImage': `url(${slideImages[2]})` }}>

              </div>
            </div>
          </Slide>
        </div>

        <div className={classes.divider}>
          <Divider />
        </div>

        <div className={classes.hot}>
          <Typography variant="h4" gutterBottom stype={{ marginLeft: "10%" }}>
            Hot
</Typography>

          <Grid container spacing={24}>
            <Grid item xs={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://www.texascrazy.com/wp-content/uploads/2016/02/texas-pen-set-f.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Classical Wooden Pen
            </Typography>
                    <Typography component="p">
                      Consists of a metal nib with capillary channels, like that of a fountain pen, mounted on a handle or holder, often made of wood. A dip pen usually has no ink reservoir and must be repeatedly recharged with ink while drawing or writing.
            </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Add to cart
          </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://www.texascrazy.com/wp-content/uploads/2016/02/texas-pen-set-f.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Classical Wooden Pen
            </Typography>
                    <Typography component="p">
                      Consists of a metal nib with capillary channels, like that of a fountain pen, mounted on a handle or holder, often made of wood. A dip pen usually has no ink reservoir and must be repeatedly recharged with ink while drawing or writing.
            </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Add to cart
          </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://www.texascrazy.com/wp-content/uploads/2016/02/texas-pen-set-f.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Classical Wooden Pen
            </Typography>
                    <Typography component="p">
                      Consists of a metal nib with capillary channels, like that of a fountain pen, mounted on a handle or holder, often made of wood. A dip pen usually has no ink reservoir and must be repeatedly recharged with ink while drawing or writing.
            </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Add to cart
          </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

home.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(home);