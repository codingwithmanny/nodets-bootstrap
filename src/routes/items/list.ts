// Imports
// ========================================================
import { Router, Request, Response } from 'express';
import { buildSuccessResponse } from '../../utils/helpers';
import { LIST } from './queries';

// Config
// ========================================================
const router = Router();

// Route
// ========================================================
const ListItems = async (_req: Request, res: Response) => {
  const data = await LIST();
  return res.json(buildSuccessResponse(data));
};

// Middlewares
// ========================================================
router.get('/', ListItems);

// Exports
// ========================================================
export default router;
