import Form from "./Form";

const FormsHolder = () => {
  const addFormData = (data: FormProperities) => {
    console.log(data);
  };
  interface FormProperities {
    id: number;
    name: string;
    surname: string;
    positon: string;
    phoneNumber: number;
    email: string;
    linkedin: string;
    city: string;
  }

  return <Form receivedFormData={(obj: FormProperities) => console.log(obj)} />;
};

export default FormsHolder;
