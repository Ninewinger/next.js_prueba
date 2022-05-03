import articleStyles from "../styles/Article.module.scss"
import ArticleItem from "./ArticleItem"

const ArticleList = ({ posts }) => {
    return (
        <div className={articleStyles.grid}>
            {posts.map(post => (
                <ArticleItem pos={post} key={post.id} />
            ))}
        </div>
    )
}

export default ArticleList