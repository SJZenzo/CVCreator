const cvData = {
  type: "EXAMPLE" as const,
  name: "Sławomir",
  surname: "Woryna",
  positon: "Frontend developer",
  phoneNumber: 536357781,
  email: "slawek.4363@gmail.com",
  linkedinProfile: "https://www.linkedin.com/in/sławomir-woryna-34a1791ba/",
  city: "Bielsko-Biała",

  education: [
    {
      degree: "inżynier",
      startYear: 2019,
      endYear: 2023,
      instytutionName: "Politecznika Śląska",
      fieldOfStudy: "Automatyka i robotyka",
    },
    {
      degree: "średnie",
      startYear: 2015,
      endYear: 2019,
      instytutionName:
        "Technikum nr.4 w ZS6 im. Króla Jana III Sobieskiego w Jastrzębiu-Zdroju",
      fieldOfStudy: "Mechatronik",
    },
  ],
  languages: [
    { language: "Polski", level: "ojczysty" },
    { language: "Angielski", level: "komunikatywny" },
    { language: "Niemiecki", level: "podstawowy" },
  ],
  profile:
    "some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text ",
  workExpirience: [
    {
      jobPosition: "Programista-serwistant",
      company: "Carboautomatyka",
      city: "Tychy",
      startDateYear: 2021,
      startDateMonth: 11,
      endDateYear: 0,
      endDateMonth: 0,
      description: "Progaramowanie PLC",
    },
    {
      jobPosition: "Specjalista ds. utrzymania ruchu i infrastruktury",
      company: "Autoland",
      city: "Pawłowice",
      startDateYear: 2020,
      startDateMonth: 5,
      endDateYear: 2021,
      endDateMonth: 10,
      description: "Utrzymanie ruchu",
    },
  ],
  certificates: [
    {
      description:
        "Programowanie SIEMENS SIMATIC S7-1200 w TIA PORTAL - poziom 1",
      organization: "EMT-SYSTEMS",
    },
    {
      description:
        "Programowanie SIEMENS SIMATIC S7-1200 w TIA PORTAL - poziom 2",
      organization: "EMT-SYSTEMS",
    },
  ],
  skills: ["skill 1", "skill 2", "skill 3", "skill 4"],
};

export default cvData;
