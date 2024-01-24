import SignPDF from "./SignPDF";
import fs from "node:fs";
import path from "node:path";

async function main() {
  const pdfBuffer = new SignPDF(
    path.resolve('/Users/jairr/Downloads/Tabla_Amortizacion_194666.pdf'),
    path.resolve('/Users/jairr/OneDrive/Documentos/Web Proyects/Firmar/pdf_sign/src/files/firma.p12')
  );

  const signedDocs = await pdfBuffer.signPDF();
  const randomNumber = Math.floor(Math.random() * 5000);
  const pdfName = `./exports/exported_file_${randomNumber}.pdf`;

  fs.writeFileSync(pdfName, signedDocs);
  console.log(`New Signed PDF created called: ${pdfName}`);
}

main();
