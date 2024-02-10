import { FC } from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router'

type PostCardProps = {
	id: number
	title: string
	body: string
	postHref: string
}

const PostCard: FC<PostCardProps> = ({ id, title, body, postHref }) => {
	const navigate = useNavigate()

	const onMoreButtonClick = (link: string) => {
		navigate(link)
	}

	const bodyParser = (body: string) => {
		return body?.length >= 100 ? `${body.substring(0, 100)}...` : body
	}

	return (
		<div className={styles.container}>
			<h3>{id}. {title}</h3>
			<div className={styles.body}>{bodyParser(body)}</div>
			<button className={styles.button} onClick={() => onMoreButtonClick(postHref)}>
				Подробнее...
			</button>
		</div>
	)
}

export default PostCard
