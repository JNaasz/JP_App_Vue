
// response for getSheetBatch
interface SpreadsheetsValuesBatchResponse {
  config: {
    url: string;
    method: string;
  };
  data: SpreadsheetsValues;
  status: number;
  statusText: string;
}

// response for getSheet
interface SpreadsheetsValuesResponse {
  config: {
    url: string;
    method: string;
  };
  data: ValueRange;
  status: number;
  statusText: string;
}

// response for batchGet contains ValueRange
interface SpreadsheetsValues {
  spreadsheetId: string;
  valueRanges: ValueRange[];
}

interface ValueRange {
  range: string;
  majorDimension: 'ROWS' | 'COLUMNS';
  values: string[][]; // 2D array where each value is a string
}

export {
  SpreadsheetsValuesBatchResponse,
  SpreadsheetsValuesResponse,
  SpreadsheetsValues,
  ValueRange
};