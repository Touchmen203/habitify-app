import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<h1>Arif Habitify Login</h1>
			<form>
				<input type='text' placeholder='name' /> <br/>
				<input type='text' placeholder='password' /><br />
				<input type="submit" value={"Sign in"} />
			</form>
		</>
	)
}

export default App
