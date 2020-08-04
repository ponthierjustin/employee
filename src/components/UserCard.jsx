import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
/* import CardMedia from "@material-ui/core/CardMedia"; */
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});


//background colors
// employees header needs more spize
// date of birth in differnt fromat(per Jamey Gronewalding)

const UserCard = (props) => {
  const classes = useStyles();

  return (
    <Box m={2} width={300} mx="auto">
      <Card className={classes.root}>
        <CardActionArea>
          <Avatar
            className={classes.media}
            src={props.image}
            title="Employee"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.firstName} {props.lastName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Email: {props.email}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Phone Number: {props.phone}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Date of Birth: {props.dob}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
      </Box>
  );
};

export default UserCard;
