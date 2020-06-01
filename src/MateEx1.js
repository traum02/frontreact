import React from "react";
// import { Button } from "@material-ui/core";
import Button from "react-bootstrap/Button";

const MateEx1 = () => {
  return (
    <div>
      <Button variant="outlined">default</Button>
      <Button variant="outlined" color="primary">
        primary
      </Button>
      <Button variant="outlined" color="secondary">
        secondary
      </Button>
      <Button variant="outlined" color="inherit">
        inherit
      </Button>
      <Button variant="outlined" disabled>
        disabled
      </Button>
      <br></br>
      <Button variant="contained">default</Button>
      <Button variant="contained" color="primary">
        primary
      </Button>
      <Button variant="contained" color="secondary">
        secondary
      </Button>
      <Button variant="contained" color="inherit">
        inherit
      </Button>
      <Button variant="contained" disabled color="primary">
        primary
      </Button>
      <Button variant="contained" href="http://naver.com">
        inherit
      </Button>
      <br></br>
      <Button size="small" variant="contained">
        inherit
      </Button>
      <Button size="medium" variant="contained">
        inherit
      </Button>
      <Button size="large" variant="contained">
        inherit
      </Button>
    </div>
  );
};

export default MateEx1;
