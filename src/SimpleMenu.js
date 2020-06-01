import React, { Component } from "react";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";

class SimpleMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorE1: "",
      id: 0,
    };
  }

  handleClick = (e) => {
    this.setState({
      anchorE1: e.currentTarget,
    });
  };

  handleClose = (e) => {
    this.setState({
      anchorE1: "",
      id: e.target.id,
    });
    console.log(e.target.id);
  };

  render() {
    return (
      <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={this.handleClick.bind(this)}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorE1}
          keepMounted
          open={Boolean(this.state.anchorE1)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose} id="1">
            Profile
          </MenuItem>
          <MenuItem onClick={this.handleClose} id="2">
            My account
          </MenuItem>
          <MenuItem onClick={this.handleClose} id="3">
            Logout
          </MenuItem>
        </Menu>
        {this.state.id == 1 && <div>asdasd1</div>}
        {this.state.id == 2 && <div>asdasd2</div>}
        {this.state.id == 3 && <div>asdasd3</div>}
      </div>
    );
  }
}

export default SimpleMenu;
