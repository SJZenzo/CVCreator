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
      id: 1,
      degree: "inżynier",
      startDate: "2019",
      endDate: "2023",
      instytutionName: "Politecznika Śląska",
      fieldOfStudy: "Automatyka i robotyka",
    },
    {
      id: 2,
      degree: "średnie",
      startDate: "2015",
      endDate: "2019",
      instytutionName:
        "Technikum nr.4 w ZS6 im. Króla Jana III Sobieskiego w Jastrzębiu-Zdroju",
      fieldOfStudy: "Mechatronik",
    },
  ],
  languages: [
    { id: 1, language: "Polski", level: "ojczysty" },
    { id: 2, language: "Angielski", level: "komunikatywny" },
    { id: 3, language: "Niemiecki", level: "podstawowy" },
  ],
  profile:
    "some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text ",
  workExpirience: [
    {
      id: 1,
      jobPosition: "Programista-serwistant",
      company: "Carboautomatyka",
      city: "Tychy",
      startDate: "2021",
      endDate: "obecnie",
      description: "Progaramowanie PLC",
    },
    {
      id: 2,
      jobPosition: "Specjalista ds. utrzymania ruchu i infrastruktury",
      company: "Autoland",
      city: "Pawłowice",
      startDate: "2020",
      endDate: "2021",
      description: "Utrzymanie ruchu",
    },
  ],
  certificates: [
    {
      id: 1,
      description:
        "Programowanie SIEMENS SIMATIC S7-1200 w TIA PORTAL - poziom 1",
      organization: "EMT-SYSTEMS",
    },
    {
      id: 2,
      description:
        "Programowanie SIEMENS SIMATIC S7-1200 w TIA PORTAL - poziom 2",
      organization: "EMT-SYSTEMS",
    },
  ],
  skills: [
    { id: 1, skill: "Umiejętność pracy w zespole" },
    { id: 2, skill: "Zanjomość gita i gitHuba" },
    { id: 3, skill: "3" },
    { id: 4, skill: "4" },
  ],
};

export default cvData;
