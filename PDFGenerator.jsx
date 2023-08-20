import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ResultPage from "./ResultPage";

const PDFGenerator=()=>{
  const [pdf,setPdf]=useState(false);

  const downloadPDF=()=>{

    const capture=document.querySelector(<ResultPage/>)
    setPdf(true);
    html2canvas(capture).then((canvas)=>{
      const imgData=canvas.toDataUrl('img/png');
      const doc=new jsPDF('p','mm','a4')
      const componentWidth=doc.internal.pageSize.getWidth();
      const componentHeight=doc.internal.pageSize.getHeight();
      doc.addImage(imgData,'PNG',0,0,componentWidth,componentHeight);
      setPdf(false)
      doc.save('receipt.pdf')
    })

  }
}

export default PDFGenerator