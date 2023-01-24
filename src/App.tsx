import React from "react";
import { Heading, Stack } from "@chakra-ui/react";

function App(): JSX.Element {
  return (
    <Stack spacing={6}>
      <Heading as="h1" size="4xl" noOfLines={1}>
        (4xl) In love with React & Next
      </Heading>
    </Stack>
  );
}
export default App;
