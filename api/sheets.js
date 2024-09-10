import { google } from 'googleapis';
import credentials from '../secret/credentials.js';


// Authenticate using a service account
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const sheets = google.sheets({version: 'v4', auth});

const { sheetId } = credentials;
const range = 'Sheet1!A1:D5';

// TODO: data comes back as csv, convert to json before passing back to the client

// Call the API to fetch the data
export async function getSheetData() {
  try {
    const response = await new Promise((resolve, reject) => {
      sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: range,
      }, (err, res) => {
        if (err) {
          reject('The API returned an error: ' + err);
        } else {
          resolve(res);
        }
      });
    });

    const rows = response.data.values;

    if (rows.length) {
      return response;
    } else {
      return 'No data found.';
    }
  } catch (error) {
    console.error(error);
  }
}
