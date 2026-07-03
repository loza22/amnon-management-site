// FORM SUBMIT
document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Inquiry submitted. We will respond shortly.");
});


// PDF EXPORT
document.getElementById("downloadPDF").addEventListener("click", async function(e) {
  e.preventDefault();

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("p", "mm", "a4");

  const element = document.querySelector(".pdf-area");

  const canvas = await html2canvas(element, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  const pageWidth = 210;
  const imgHeight = (canvas.height * pageWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, pageWidth, imgHeight);
  pdf.save("Amnon_Capability_Statement.pdf");
});
