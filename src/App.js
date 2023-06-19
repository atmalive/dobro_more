import { Route, Routes } from 'react-router-dom'
import { Blog } from './pages/Blog/Blog'
import { Layout } from './components/Layout/Layout'
import { RecoveryProgram } from './pages/RecoveryProgram/RecoveryProgram'
import { DobroMoreNorth } from './pages/DobroMoreNorth/DobroMoreNorth'
import { DobroMoreSouth } from './pages/DobroMoreSouth/DobroMoreSouth'
import { Press } from './pages/Press/Press'
import { About } from './pages/About/About'


const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Blog />} />
                <Route path='about' element={<About />} />
                <Route path='recovery' element={<RecoveryProgram />} />
                <Route path='dobroNorth' element={<DobroMoreNorth />} />
                <Route path='dobroSouth' element={<DobroMoreSouth />} />
                <Route path='press' element={<Press />} />
            </Route>
        </Routes>
    )
}

export default App
