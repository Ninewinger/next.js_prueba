

export default function Home({posts}) {
  return (
    <div>
      <h1>Hello</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>Id: {post.userId}</h2>
          <h2>Title: {post.title}</h2>
          <h2>Body: {post.body}</h2>
        </div>
      ))}
    </div>
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