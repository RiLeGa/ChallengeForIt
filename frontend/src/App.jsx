import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TaskList from './pages/TaskList'
import TaskItem from './pages/TaskItem'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* TaskList */}
          <Route path='/' element={<TaskList/>}/>
          {/* TaskItem */}
          <Route path='/TaskItem/:id' element={<TaskItem/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
