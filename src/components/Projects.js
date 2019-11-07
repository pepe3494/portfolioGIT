import React, { Component } from "react";
import {
  Tabs,
  Tab,
  CardText,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

{
  /* Ziomek wykorzystuje tutaj props ze statem do ogarnieca i klase :(()) */
}
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/*Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i2.wp.com/www.nettecode.com/wp-content/uploads/2017/03/react_logo.png?fit=720%2C340&ssl=1) center / cover"
              }}
            >
              React Project @1
            </CardTitle>
            <CardText>
              <p> This is REACTYWACJA~!!!!!!!!~~!~!`1`11~!~!1` MUHAHAHAHA</p>
            </CardText>
            <CardActions border>
              <Button>GitHub</Button>
              <Button>CodePen</Button>
              <Button>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i2.wp.com/www.nettecode.com/wp-content/uploads/2017/03/react_logo.png?fit=720%2C340&ssl=1) center / cover"
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              <p> This is REACTYWACJA~!!!!!!!!~~!~!`1`11~!~!1` MUHAHAHAHA</p>
            </CardText>
            <CardActions border>
              <Button>GitHub</Button>
              <Button>CodePen</Button>
              <Button>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i2.wp.com/www.nettecode.com/wp-content/uploads/2017/03/react_logo.png?fit=720%2C340&ssl=1) center / cover"
              }}
            >
              React Project !3
            </CardTitle>
            <CardText>
              <p> This is REACTYWACJA~!!!!!!!!~~!~!`1`11~!~!1` MUHAHAHAHA</p>
            </CardText>
            <CardActions border>
              <Button>GitHub</Button>
              <Button>CodePen</Button>
              <Button>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/*Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.themescode.com/wp-content/uploads/edd/2016/12/logo-slider.jpg) center / cover"
              }}
            >
              Wordpress Project @1
            </CardTitle>
            <CardText>
              <p> This is REACTYWACJA~!!!!!!!!~~!~!`1`11~!~!1` MUHAHAHAHA</p>
            </CardText>
            <CardActions border>
              <Button>GitHub</Button>
              <Button>CodePen</Button>
              <Button>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.themescode.com/wp-content/uploads/edd/2016/12/logo-slider.jpg) center / cover"
              }}
            >
              Wordpress Project #2
            </CardTitle>
            <CardText>
              <p> This is REACTYWACJA~!!!!!!!!~~!~!`1`11~!~!1` MUHAHAHAHA</p>
            </CardText>
            <CardActions border>
              <Button>GitHub</Button>
              <Button>CodePen</Button>
              <Button>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/*Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://matysiewicz.com/wp-content/uploads/2019/05/1200px-Adobe_Photoshop_CC_icon.svg_.png) center / cover"
              }}
            >
              Photoshop Project @1
            </CardTitle>
            <CardText>
              <p> This is REACTYWACJA~!!!!!!!!~~!~!`1`11~!~!1` MUHAHAHAHA</p>
            </CardText>
            <CardActions border>
              <Button>GitHub</Button>
              <Button>CodePen</Button>
              <Button>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else {
      return (
        <div className="projects-grid">
          {/*Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i.pinimg.com/originals/83/1a/60/831a6060ab0c593b5d7a9ecfc56a9988.png) center / cover"
              }}
            >
              Illustrator Project @1
            </CardTitle>
            <CardText>
              <p> This is REACTYWACJA~!!!!!!!!~~!~!`1`11~!~!1` MUHAHAHAHA</p>
            </CardText>
            <CardActions border>
              <Button>GitHub</Button>
              <Button>CodePen</Button>
              <Button>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i.pinimg.com/originals/83/1a/60/831a6060ab0c593b5d7a9ecfc56a9988.png) center / cover"
              }}
            >
              Illustrator Project #2
            </CardTitle>
            <CardText>
              <p> This is REACTYWACJA~!!!!!!!!~~!~!`1`11~!~!1` MUHAHAHAHA</p>
            </CardText>
            <CardActions border>
              <Button>GitHub</Button>
              <Button>CodePen</Button>
              <Button>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i.pinimg.com/originals/83/1a/60/831a6060ab0c593b5d7a9ecfc56a9988.png) center / cover"
              }}
            >
              Illustrator Project !3
            </CardTitle>
            <CardText>
              <p> This is REACTYWACJA~!!!!!!!!~~!~!`1`11~!~!1` MUHAHAHAHA</p>
            </CardText>
            <CardActions border>
              <Button>GitHub</Button>
              <Button>CodePen</Button>
              <Button>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*Project 4 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i.pinimg.com/originals/83/1a/60/831a6060ab0c593b5d7a9ecfc56a9988.png) center / cover"
              }}
            >
              Illustrator Project $4
            </CardTitle>
            <CardText>
              <p> This is REACTYWACJA~!!!!!!!!~~!~!`1`11~!~!1` MUHAHAHAHA</p>
            </CardText>
            <CardActions border>
              <Button>GitHub</Button>
              <Button>CodePen</Button>
              <Button>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Wordpress</Tab>
          <Tab>Photoshop</Tab>
          <Tab>Illustrator</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
