import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const dir = path.resolve('./public', 'data');
  const projects = await fs.readFileSync(path.join(dir, 'projects.json'));
  res.status(200).json(projects);
}
