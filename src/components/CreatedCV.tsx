import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./Header";
import AsidePanel from "./AsidePanel";
import MainPanel from "./MainPanel";

const CreatedCV = () => {
  return (
    <div>
      <>
        <Grid
          templateAreas={{
            base: `"header""main""aside" `,
            lg: `"header header""aside main"`,
          }}
          templateColumns={{
            base: "1fr",
            lg: "500px 1fr",
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
    </div>
  );
};

export default CreatedCV;
