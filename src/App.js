import { Route, Routes } from 'react-router-dom'
import { Blog } from './pages/Blog/Blog'
import { Layout } from './components/Layout/Layout'
import { RecoveryProgram } from './pages/RecoveryProgram/RecoveryProgram'
import { DobroMoreNorth } from './pages/DobroMoreNorth/DobroMoreNorth'
import { DobroMoreSouth } from './pages/DobroMoreSouth/DobroMoreSouth'
import { Press } from './pages/Press/Press'
import { About } from './pages/About/About'
import { Archive } from './pages/Archive/Archive'
import { Team } from './pages/Team/Team'
import { NotFound } from './pages/NotFound/NotFound'
import { Gallery } from './pages/Gallery/Gallery'



const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Blog />} />
                <Route path='about' element={<About />} />
                <Route path='archive' element={<Archive />} />
                <Route path='recovery' element={<RecoveryProgram />} />
                <Route path='dobroNorth' element={<DobroMoreNorth />} />
                <Route path='dobroSouth' element={<DobroMoreSouth />} />
                <Route path='team' element={<Team />} />
                <Route path='press' element={<Press />} />
                <Route path='gallery' element={<Gallery />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App
