import TodoList from './components/TodoList'
import "./index.css"

function App() {
  return (
    <div className='bg-gray-800 h-screen'>
     <TodoList />
     <a href='https://pobierak.jeja.pl/images/d/e/c/650668_monitoring-w-turcji.jpg' target='_blank' rel='noreferrer' className='px-2 py-1 bg-gray-800 text-gray-800 rounded-md absolute right-4 bottom-4 hover:bg-red-500'>🤍</a>
    </div>
  )
}

export default App
