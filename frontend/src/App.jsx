import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TaskList from './pages/TaskList'
import TaskItem from './pages/TaskItem'
import '/src/assets/stylesheets/styles.css'
import TaskCreate from './pages/TaskCreate'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* TaskList */}
          <Route path='/' element={<TaskList/>}/>
          {/* TaskItem */}
          <Route path='/TaskItem/:id' element={<TaskItem/>}/>
          {/* TaskCreate */}
          <Route path='/TaskCreate' element={<TaskCreate/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
