import { Link } from 'react-router-dom'
import LogoImage from '../../images/DM_logo_v4.webp'

const Logo = () => (
    <Link className='flex justify-center items-center' to='/'>
        <img src={LogoImage} alt='Logo with text' className='w-full max-w-4xl' />
    </Link>
)

export default Logo
