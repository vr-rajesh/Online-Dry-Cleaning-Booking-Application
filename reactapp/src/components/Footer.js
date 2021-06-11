import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <footer style={{ backgroundColor: 'black' }} className="footer fixed-bottom">
              <p className="text-center text-light mt-3">Copyright © 2021 ClothesCare. All rights reserved.</p>
        </footer>
    );
  }
}
export default Footer;