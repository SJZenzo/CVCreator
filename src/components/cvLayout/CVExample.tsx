import CreatedCV from "./CreatedCV";
import cvData from "../../data/cvDataExample";
import PdfCreator from "./PdfCreator";

const CVExample = () => {
  const containerId = "exampleCV";

  return (
    <>
      <div id={containerId}>
        <CreatedCV inputData={cvData} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PdfCreator
          containerId={containerId}
          title={cvData.name + cvData.surname + "CV"}
        />
      </div>
    </>
  );
};

export default CVExample;
