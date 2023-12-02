import express from 'express';
import bodyParser from 'body-parser';
import weatherRouter from './routes/weather';
import historyRouter from './routes/history';

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use('/weather', weatherRouter);
app.use('/history', historyRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
