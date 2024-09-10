import { getSheetData } from './sheets.js';
import express from 'express';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));
app.use(cors({
  origin: 'http://localhost:8080' // Allow requests only from this origin
}));

// // Optional: Serve index.html manually from a different location
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/sheet-data', async (req, res) => {
  try {
    const response = await getSheetData();
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data from Google Sheets');
  }
});

app.listen(port, () => {
	console.log(`App is now listening on port ${port}`);
});