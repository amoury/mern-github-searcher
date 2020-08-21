import { Router, Request, Response } from 'express';
import { search } from '../controllers/search.controller';
import { client } from '../cache';

const router = Router();

router.post('/api/search', async (req: Request, res: Response) => {
  const { entity, query } = req.body;
  try {
    const items = await search({ entity, query });
    res.status(200).json({ items });
  } catch (error) {}
});

router.get('/api/clear-cache', async (req: Request, res: Response) => {
  client.flushall();
  res.json({ message: 'Success' });
});

export { router };
