import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PostsListPage from '../pages/post-list'
import PostDetailsPage from '../pages/post-details'

import 'normalize.css'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<PostsListPage />} />
				<Route path='/:postId' element={<PostDetailsPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
