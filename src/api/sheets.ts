export async function getSheetData(): Promise<SheetData> {
  try {
    const response = await fetch('http://localhost:3000/sheet-data');

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
