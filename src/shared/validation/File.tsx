export function isValidDocumentFile(file: File | undefined): string {
  const fileErrorMessage = 'Selecteer eerst een bestand alvorens naar de volgende stap te gaan.';
  const fileInvalidMessage = 'Selecteer een geldig bestand (.pdf, .docx, .jpg, .png).';
  const validMimeTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];

  if (!file) {
    return fileErrorMessage;
  }

  if (!validMimeTypes.some((type) => (file ? type === file.type : false))) {
    return fileInvalidMessage;
  }

  return '';
}
