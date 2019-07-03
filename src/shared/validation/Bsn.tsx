export function isValidBSN(bsn?: number): boolean {
  if (!bsn) {
    return false;
  }
  let bsnString = bsn.toString();
  if (bsnString.length < 9) {
    bsnString = `0${bsn}`;
  }

  let checksum: number = 0;
  for (let i = 0; i < 8; i++) {
    checksum = checksum + parseInt(bsnString.charAt(i), 10) * (9 - i);
  }
  checksum -= parseInt(bsnString.charAt(8), 10);

  // ongeldig nummer
  if (checksum % 11 !== 0) {
    return false;
  }
  return true;
}
