import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


export default class DrawerExample extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  render() {
    return (
      <div style={{textAlign: 'left', position: 'relative'}}>
        {/* <RaisedButton
          label="Toggle menu"
          onClick={this.handleToggle}
        /> */}
            <div style={{position: 'absolute', left: 50, top: 50, zIndex: 100}}>
           <IconButton onClick={this.handleToggle} style={{outline: 'none'}}>
                <MenuIcon style={{ fontSize: 40, color: 'white', outline: 'none'}} />
          </IconButton>
          </div>
        <Drawer open={this.state.open}
        ModalProps={{ onBackdropClick: this.handleToggle }}
        variant="temporary"
        >
        <div style={{width: 200}}>
          {this.props.children}
          </div>
        </Drawer>
      </div>
    );
  }
}