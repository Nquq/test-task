import { FC } from 'react'
import { Post } from '../../../../shared/api/model'
import styles from './styles.module.css'
import PostCard from '../post-card'
type PostRowProps = {
	posts: Post[] | undefined
}

const PostRow: FC<PostRowProps> = ({ posts }) => {
	return (
		<div className={styles.container}>
			{posts?.map(post => (
				<PostCard
					key={post?.id}
					title={post?.title}
					body={post?.body}
					postHref={`/${post?.id}`}
					id={post?.id}
				/>
			))}
		</div>
	)
}

export default PostRow
