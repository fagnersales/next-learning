import { articles } from '../../../data'

export default function handler (request, response) {
  response.status(200).json(articles)
}