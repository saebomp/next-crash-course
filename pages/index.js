import Head from 'next/head'
import ArticleList from '../components/ArticleList'


export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
} 



// npm run dev
// https://www.youtube.com/watch?v=mTz0GXj8NN0  56:31


// package.js에서 "Script" 에서 "build": "next build && next export", 로 바꾸고

// npm run build
// npm i -g serve
// serve -s out -p 8000
// localhost:8000에서 돌아감

//out 폴더 빼고 다 지워도 앱 돌아감