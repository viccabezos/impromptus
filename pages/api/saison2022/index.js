// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { songs } from "../../../data/dataSaison";

export default function handler(req, res) {
  res.status(200).json(songs);
}
