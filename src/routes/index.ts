import {Request, Response, Router} from 'express';

export function hey(name?: string): {hello: string} {
  return {hello: name ?? 'world'};
}

export default async () => {
  const router = Router();

  router.get('/hey', async (req: Request, res: Response) => {
    const greeting = hey(req.query.name as string | undefined);
    return res.json(greeting);
  });

  return router;
}
