import { articles } from '../../../data'

export default function handler (request, response) {
  const { id } = request.query;
  const filtered = articles.filter(article => article.id == id)

  if (filtered.length > 0) {
    response.status(200).json(filtered[0])
  } else {
    response.status(404).json({ msg: `Article with the id of ${id} is not found.` })
  }
}