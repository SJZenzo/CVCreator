import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import NavButton from "./NavButton";

interface Props {
  containerId: string;
  title: string;
}

const PdfCreator = ({ containerId, title }: Props) => {
  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(
      document.querySelector("#" + containerId) as HTMLElement
    );
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(title + ".pdf");
  };

  return <NavButton onClick={createPDF}>Pobierz</NavButton>;
};

export default PdfCreator;
