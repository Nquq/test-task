import { FC } from 'react'
import styles from './styles.module.css'
import { useGetPostByIdQuery } from '../../shared/api/base'
import { useNavigate, useParams } from 'react-router'

const PostDetailsPage: FC = () => {
	const { postId } = useParams()
	const navigate = useNavigate()
	const { data, isLoading, isError } = useGetPostByIdQuery(+postId!)

	const onBackButtonClick = () => {
		navigate('/')
	}

	if (isError) {
		return (
			<div className={styles.container}>
				<h1 className={styles.heading}>Error, Try again later</h1>
			</div>
		)
	}

	if (isLoading) {
		return (
			<div className={styles.container}>
				<h1 className={styles.heading}>Loading...</h1>
			</div>
		)
	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Title: {data?.title}</h1>
				<h2>Number: {data?.id}</h2>
				<div className={styles.body}>Body: {data?.body}</div>
				<button className={styles.button} onClick={onBackButtonClick}>
					Назад
				</button>
			</div>
		</div>
	)
}

export default PostDetailsPage
