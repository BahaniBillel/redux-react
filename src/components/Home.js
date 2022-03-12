import React, { Component } from "react";
import {
  Box,
  Container,
  Divider,
  Typography,
  CardActionArea,
  CardMedia,
  Grid,
} from "@material-ui/core";
import { Card, CardContent } from "@mui/material";
import FirstImage from "../images/image_1.jpg";
import { connect } from "react-redux";
class Home extends Component {
  //   state = {
  //     posts: [],
  //   };

  //   componentDidMount() {
  //     axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  //       console.log(res);
  //       this.setState({
  //         posts: res.data.slice(0, 6),
  //       });
  //     });
  //   }

  render() {
      console.log(this.props);
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <Grid container spacing={10} columns={3} wrap="flex-wrap">
            <Grid item xs={8}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image={FirstImage} />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.scondary">
                      {post.body}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        );
      })
    ) : (
      <div>the code</div>
    );

    return <div>{postList}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
