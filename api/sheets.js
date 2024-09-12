import { google } from 'googleapis';
import credentials from '../secret/credentials.js';

// Authenticate using a service account
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const sheets = google.sheets({ version: 'v4', auth });
const { sheetId } = credentials;
const range1 = 'Sheet1!A1:D5';
const range2 = ['Sheet1!A1:D5', 'Sheet2!A1:D5'];

async function getSheet(spreadsheetId, range) {
  try {
    const response = await new Promise((resolve, reject) => {
      sheets.spreadsheets.values.get(
        {
          spreadsheetId,
          range,
        },
        (err, res) => {
          if (err) reject('The API returned an error: ' + err);
          else resolve(res);
        }
      );
    });

    return response.data.values.length
      ? response
      : 'No data found. Sheet empty.';
  } catch (error) {
    console.error(error);
  }
}

async function getSheetBatch(spreadsheetId, ranges) {
  try {
    const response = await new Promise((resolve, reject) => {
      sheets.spreadsheets.values.batchGet(
        {
          spreadsheetId,
          ranges,
        },
        (err, res) => {
          if (err) reject('The API returned an error: ' + err);
          else resolve(res);
        }
      );
    });

    console.log(response.data.valueRanges);

    return response.data.valueRanges.length
      ? response
      : 'No data found. Sheet empty.';
  } catch (error) {
    console.error(error);
  }
}

// Call the API to fetch the data
export async function getSheetData(spreadsheetId = sheetId, range = range2) {
  console.log('getSheetData', { spreadsheetId, range }, typeof range);
  const getRequest = typeof range == 'string' 
    ? getSheet
    : getSheetBatch;

  try {
    const response = await getRequest(spreadsheetId, range); // Pass the correct arguments
    // convert to object
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getSpreadsheetDetails(spreadsheetId) {
  try {
    const response = await sheets.spreadsheets.get({
      spreadsheetId: spreadsheetId,
      includeGridData: false,  // Set to true to get the actual cell data as well
    });

    console.log(response.data);
  } catch (err) {
    console.error('Error retrieving spreadsheet metadata:', err);
  }
}
