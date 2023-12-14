/*

  if else

*/

import React, { useState } from 'react';

function ExampleB() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  let message;
  if (isUserLoggedIn) {
    message = <p>Welcome back!</p>;
  } else {
    message = <p>Please log in.</p>;
  }

  return <div>{message}</div>;
}

export default ExampleB;

/*

  Neste exemplo, se isUserLoggedIn for true, o componente renderiza "Welcome
  back!". Se isUserLoggedIn for false, ele renderiza "Please log in.".

*/