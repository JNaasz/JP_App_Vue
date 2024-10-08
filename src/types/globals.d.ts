// src/types/globals.d.ts

// Example global type for SheetData
declare global {
	interface SheetData {
			range: string;
			majorDimension: string;
			values: string[][];
	}

	// add new interfaces here
}

export {};
