import React from 'react';
import { Alert } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

const Header = () => (
  <Alert className="footer" bsStyle="info" style={{ textAlign: 'center' }}>
    <strong>© Copyright 2018 Image Mind Game</strong> - All Rights Reserved.
  </Alert>
);

export default Header;
