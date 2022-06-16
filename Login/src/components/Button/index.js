import React from "react";
import { Button as Butoon } from "./style";

function Button({ children,...props }) {
  return(
      <Butoon {...props}>{children}</Butoon>
 )

}

export default Button;
