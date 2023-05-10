interface educationProps {
  degree: string;
  startYear: number;
  endYear: number;
  istytutionName: string;
  fieldOfStudy: string;
}

export interface FormProperities {
  id: number;
  education: educationProps[];
}

const ThirdForm = () => {
  return <div>ThirdForm</div>;
};

export default ThirdForm;
