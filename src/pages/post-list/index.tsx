import { FC, useEffect, useRef, useState } from 'react'
import PostRow from '../../entities/post/ui/post-row'
import { useGetPostsQuery } from '../../shared/api/base'
import { useObserver } from '../../shared/hooks/useObserver'
import styles from './styles.module.css'

const PostsListPage: FC = () => {
	const [currentPostStart, setCurrentPostStart] = useState(0)
	const lastElement = useRef<HTMLDivElement>(null)
	const { data, isLoading, isError } = useGetPostsQuery({
		limit: 7,
		start: currentPostStart,
	})

	useObserver(lastElement, isLoading, () => setCurrentPostStart(prev => prev + 7))

	useEffect(() => {}, [currentPostStart])

	if (isError) {
		return <div>Error, Try again later</div>
	}

	if (isLoading) {
		return (
			<div className={styles.container}>
				<h1 className={styles.centered}>Loading...</h1>
			</div>
		)
	}

	return (
		<>
			<div className={styles.container}>
				<PostRow posts={data} />
			</div>
			<div style={{ height: 1 }} ref={lastElement}></div>
		</>
	)
}

export default PostsListPage
