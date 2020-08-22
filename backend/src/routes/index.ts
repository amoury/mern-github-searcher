import { Router, Request as Req, Response as Res, NextFunction as NF } from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/RequestValidationError';
import { search } from '../controllers/search.controller';
import { client } from '../cache';

const router = Router();

const searchQueryValidations = [
  body('entity')
    .matches(/\b(users|repositories)\b/)
    .withMessage('The search type should either be users or repositories'),
  body('query')
    .trim()
    .isLength({ min: 3, max: 255 })
    .withMessage('The search query must be atleast 3 characters'),
];

router.post('/api/search', searchQueryValidations, async (req: Req, res: Res, next: NF) => {
  const { entity, query } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) throw new RequestValidationError(errors.array());

  const items = await search({ entity, query });
  res.status(200).json({ items });
});

router.get('/api/clear-cache', (req: Req, res: Res) => {
  client.flushall();
  res.json({ message: 'Success' });
});

export { router };
