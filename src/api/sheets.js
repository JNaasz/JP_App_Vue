export function getSheetData() {
	return new Promise((resolve) => {
    // Simulate a delay of 2 seconds
    setTimeout(() => {
      const data = 'this is just a string for now until we set up the apiiii';
      resolve(data);
    }, 2000);
  });
}