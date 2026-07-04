
import { BrowserRouter as Router,  Route, Routes } from 'react-router'
import CreatPost from './pages/CreatPost.jsx'
import Feed from './pages/Feed.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <Feed/>
        }/>
        <Route path='/creat-post' element={
          <CreatPost/>
        }/>
      </Routes>
    </Router>
    
  )
}

export default App
