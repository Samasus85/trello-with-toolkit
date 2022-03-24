import Login from './components/Login'
import Container from './UI/Container'

import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'

function App() {
	return (
		<div className='app'>
			<BrowserRouter >
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/login' element={
						<Container className='formContainer'>
							<Login />
						</Container>} />
					<Route
						path='/trelloMain'
						element={
							<>
								<Header />
								<Container className='trello__container'>
									<Main />
								</Container>
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
