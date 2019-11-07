import React, { Component } from "react";
import { Grid, Cell, List, ListItemContent, ListItem } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>PePE Cejlosky</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem ipsum sripsum tipsym moenitsum alotsitsum.Lorem ipsum
              sripsum tipsym moenitsum alotsitsum.Lorem ipsum sripsum tipsym
              moenitsum alotsitsum.Lorem ipsum sripsum tipsym moenitsum
              alotsitsum.
            </p>
          </Cell>
          <Cell col={6}>
            <h2> Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List style={{ width: "300px" }}>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    Bryan Cranston
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-fax" aria-hidden="true" />
                    Aaron Paul
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    Bob Odenkirk
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
