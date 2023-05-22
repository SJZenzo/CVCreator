import { Grid, GridItem } from "@chakra-ui/react";
import HeaderPanel from "./HeaderPanel";
import AsidePanel from "./AsidePanel";
import MainPanel from "./MainPanel";
import formDataConverter, { CvDataType } from "../../data/formDataConverter";

interface Props {
  inputData: CvDataType;
}

const CreatedCV = ({ inputData }: Props) => {
  const dataToComp = formDataConverter(inputData);

  if (dataToComp)
    return (
      <div className="container-sm">
        <Grid
          templateAreas={{
            base: `"header""main""aside" `,
            lg: `"header header""aside main"`,
          }}
          templateColumns={{
            base: "1fr",
            lg: "350px 1fr",
            xl: "400px 1fr",
          }}
        >
          <GridItem area="header">
            <HeaderPanel inputData={dataToComp.headerObj} />
          </GridItem>
          <GridItem area="aside">
            <AsidePanel inputData={dataToComp.asideObs} />
          </GridItem>
          <GridItem area="main">
            <MainPanel inputData={dataToComp.mainObj} />
          </GridItem>
        </Grid>
      </div>
    );
  else return <div>Data error</div>;
};

export default CreatedCV;
