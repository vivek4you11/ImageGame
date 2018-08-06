import React from 'react';
import { Alert } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

const Header = () => (
  <Alert bsStyle="info" style={{ textAlign: 'center' }}>
    <h2>Hola everyone!</h2> Let's play this mind Game, you're not going to win easily.
  </Alert>
);

export default Header;
