/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import App from './App'
import Index from './pages'

const root = document.getElementById('root')

render(() => <App />, root)
