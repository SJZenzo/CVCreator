import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import AsidePanel from "./components/AsidePanel";
import MainPanel from "./components/MainPanel";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"header""main""aside" `,
          lg: `"header header""aside main"`,
        }}
        templateColumns={{
          lg: "500px 1fr",
          base: "1fr",
        }}
      >
        <GridItem area="header">
          <Header />
        </GridItem>
        <GridItem area="aside">
          <AsidePanel />
        </GridItem>
        <GridItem area="main">
          <MainPanel />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
