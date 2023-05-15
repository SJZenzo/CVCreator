import useFormStore from "../../data/store";
import CreatedCV from "./CreatedCV";

const EndResult = () => {
  const { firstFormData, secondFormData, thirdFormData } = useFormStore();
  if (firstFormData) {
    const userCvData = {
      type: "USERDATA" as const,
      firstFormDataInput: firstFormData,
      secondFormDataInput: secondFormData,
      thirdFormDataInput: thirdFormData,
    };
    return <CreatedCV inputData={userCvData} />;
  } else {
    return <div>Data error</div>;
  }
};

export default EndResult;
