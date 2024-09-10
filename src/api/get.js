export async function getSheetData() {
  try {
    const response = await fetch('http://localhost:3000/sheet-data');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const resJson = await response.json();
    return resJson;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Rethrow error if needed
  }
}

