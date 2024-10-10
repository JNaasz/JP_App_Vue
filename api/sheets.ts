import { google } from 'googleapis';
import credentials from '../secret/credentials.js';
import {
  SpreadsheetsValuesBatchResponse,
  SpreadsheetsValuesResponse,
  SpreadsheetsValues
} from './types/responses';

// Authenticate using a service account
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const sheets = google.sheets({ version: 'v4', auth });
const { sheetId } = credentials;
const range1 = 'Sheet1!A1:D5';
const range2 = ['Sheet1!A1:D5', 'Sheet2!A1:D5'];


/**
 * fetches sheet data as csv based on range input
 * returns usable data as json
 * @param {string} spreadsheetId
 * @param {string[] | string} range
 * @returns {Promise<SheetData>}
 */
export async function getSheetData(spreadsheetId: string = sheetId, range: string[] | string = range2): Promise<SheetData> {
  // determine whether request is for one or multiple sheets
  const getRequest = typeof range == 'string'
    ? getSheet
    : getSheetBatch;

  try {
    const response: SheetData = await getRequest(spreadsheetId, range);
    return response;
  } catch (error) {
    console.error(error);
    throw (error);
  }
}

/**
 * fetches a single sheet from a google sheet
 * @param {string} spreadsheetId 
 * @param {string} range 
 * @returns {Promise<SheetData>}
 */
async function getSheet(spreadsheetId: string, range: string): Promise<SheetData> {  
  try {
    const response: SpreadsheetsValuesResponse = await new Promise((resolve, reject) => {
      sheets.spreadsheets.values.get(
        {
          spreadsheetId,
          range,
        },
        (err, res) => {
          if (err) reject('The API returned an error: ' + err);
          else if (!res) reject('The API returned with null or undefined response: ' + res);
          else resolve(res); // TODO: fix this complaint
        }
      );
    });

    const responseData: SheetData = {
      spreadsheetId,
      sheets: []
    }

    if (response.data.values.length) {
      responseData.sheets.push(formatSheet(response.data));
      return responseData;
    } else {
      return responseData;
    }
  } catch (error) {
    console.error(error);
    throw (error);
  }
}

/**
 * fetches multiple sheets from a google sheet
 * @param {string} spreadsheetId
 * @param {string[]} ranges
 * @returns {Promise<SheetData>}
 */
async function getSheetBatch(spreadsheetId: string, ranges: string[]): Promise<SheetData> {
  try {
    const response: SpreadsheetsValuesBatchResponse = await new Promise((resolve, reject) => {
      sheets.spreadsheets.values.batchGet(
        {
          spreadsheetId,
          ranges,
        },
        (err, res) => {
          if (err) reject('The API returned an error: ' + err);
          else resolve(res); // TODO: fix this complaint
        }
      );
    });

    const responseData: SheetData = {
      spreadsheetId,
      sheets: []
    }

    if (response.data.valueRanges.length) {
      response.data.valueRanges.forEach(vRange => {
        responseData.sheets.push(formatSheet(vRange));
      });
      return responseData;
    } else {
      return responseData;
    }
  } catch (error) {
    console.error(error);
    throw (error);
  }
}

/**
 * Convert the csv response data to a more usable structure
 * @param {ValueRange} data
 * @returns {Sheet}
 */
function formatSheet({ range, values }: { range: string; values: string[][] }): Sheet { 
  const sheet: Sheet = {
    name: "",
    items: []
  };

  // Extract the name from the range by splitting at the "!"
  sheet.name = range.split("!")[0];

  const [headers] = values.slice(0, 1);
  const items: SheetItem[] = values.slice(1).map((row) => buildSheetItem(row, headers));

  sheet.items = items;
  return sheet;
}

/**
 * Convert the csv response data to a more usable structure
 * @param {string[]} row
 * @param {string[]} headers
 * @returns {SheetItem}
 */
function buildSheetItem(row: string[], headers: string[]): SheetItem {
  return headers.reduce((acc: SheetItem, header, i) => {
    acc[header] = row[i]; // Assign row values to corresponding headers
    return acc;
  }, {} as SheetItem);
}
