// shared between src and api
declare global {
	interface SheetData {
		spreadsheetId: string;
		sheets: Sheet[];
	}
	
	interface Sheet {
		name: string;
		items: SheetItem[];
	}
	
	interface SheetItem {
		Date: string;
		Duration: string;
		Place: string;
		Comment: string;
		[key: string]: string | number;
	}

	interface PostResponse {
		success: boolean;
		updatedCells?: number;
		error?: string;
	}
}

export type { SheetData, Sheet, SheetItem, PostResponse };

