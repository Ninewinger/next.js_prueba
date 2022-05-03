import articleStyles from "../styles/Article.module.scss"
import Link from "next/link"

const ArticleItem = ({ pos }) => {
    return (
        <Link href="/article/[id]" as={`/article/${pos.id}`}>
            <a className={articleStyles.card}>
                <h3>{pos.title} &rarr;</h3>
                <p>{pos.body}</p>
            </a>
        </Link>
    )
}

export default ArticleItem