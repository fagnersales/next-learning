import { useRouter } from 'next/router'
import { server } from '../../../config/index'
import Link from 'next/link'
import Meta from '../../../components/Meta'

const article = ({ article }) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <div> This is article {article.title} </div>
      <p>{article.body}</p>
      <Link href="/">Go Back</Link>
    </>
  )
}

// export const getStaticProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//   const article = await res.json()

//   return {
//     props: {
//       article
//     }
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   const articles = await res.json()

//   const ids = articles.map(article => article.id)
//   const paths = ids.map(id => ({ params: { id: id.toString() } }))

//   return { paths, fallback: false }

// }

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`)
  const article = await res.json()

  return {
    props: {
      article
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false
  }
}

export default article