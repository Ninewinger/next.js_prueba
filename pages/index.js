import ArticleList from "../components/ArticleList";

export default function Home({ posts }) {
  return (
    <>
      <div>
        <h1>Hello</h1>
      </div>
      <ArticleList posts={posts} />
    </>
  )
};


export const getStaticProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts = await data.json();
  return {
    props: {
      posts
    }
  }
}