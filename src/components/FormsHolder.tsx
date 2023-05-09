import FirstForm, { FormProperities } from "./FirstForm";

const FormsHolder = () => {
  const addFormData = (data: FormProperities) => {
    console.log(data);
  };

  return <FirstForm dataToSend={addFormData} />;
};

export default FormsHolder;
