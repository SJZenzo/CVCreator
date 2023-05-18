import useFormStore from "../../data/store";
import CreatedCV from "./CreatedCV";
import PdfCreator from "./PdfCreator";

const EndResult = () => {
  const { firstFormData, secondFormData, thirdFormData } = useFormStore();
  const containerId = "createdCV";

  if (firstFormData) {
    const userCvData = {
      type: "USERDATA" as const,
      firstFormDataInput: firstFormData,
      secondFormDataInput: secondFormData,
      thirdFormDataInput: thirdFormData,
    };
    return (
      <>
        <div id={containerId}>
          <CreatedCV inputData={userCvData} />;
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
            title={firstFormData.name + firstFormData.surname + "CV"}
          />
        </div>
      </>
    );
  } else {
    return <div>Data error</div>;
  }
};

export default EndResult;
