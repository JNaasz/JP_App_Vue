/**
 * sends a request to the server to fetch sheet data
 * @param {string | null} sheetRange 
 * @returns {SheetData}
 */
export async function getSheetData(sheetRange: string | null): Promise<SheetData> {
  try {
    let url = 'http://localhost:3000/sheet-data';
    if (sheetRange) {
      url += `/${sheetRange}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const resJson: SheetData = await response.json(); // Specify the expected type here
    return resJson;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Rethrow error if needed
  }
}
