import express, { Request, Response } from 'express';
import { randomChalk } from 'ody-utils';

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.json({ message: `Hello World!`, data: req.headers });
});

app.listen(port, () => {
  randomChalk(`Server is running on port ${port}`);
});
