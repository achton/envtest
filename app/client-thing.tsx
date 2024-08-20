// client side component for testing
"use client";

import React from 'react';

export default function ClientThing() {

  // print vars to client component
  console.log("process.env.TEST_VAR (client-thing): " + process.env.TEST_VAR);
  console.log("process.env.NEXT_PUBLIC_TEST_VAR (client-thing): " + process.env.NEXT_PUBLIC);

  const TEST_VAR = process.env.TEST_VAR;
  const PUBLIC_TEST_VAR = process.env.NEXT_PUBLIC_TEST_VAR;

  return (
    <div>
      <h3>Client Thing</h3>
      <p>
        <pre>TEST_VAR: {TEST_VAR}</pre>
        <pre>NEXT_PUBLIC_TEST_VAR: {PUBLIC_TEST_VAR}</pre>
      </p>
    </div>
  );


}
