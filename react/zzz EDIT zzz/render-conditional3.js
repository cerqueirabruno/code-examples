/*

  ternary operator

*/

import React, { useState } from 'react';

function Example() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <div>
      {isUserLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
}

export default Example;

/*

  Neste exemplo, se isUserLoggedIn for true, o componente renderiza "Welcome back!".
  Se isUserLoggedIn for false, ele renderiza "Please log in.".

*/