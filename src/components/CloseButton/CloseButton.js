import { CloseButtonIcon } from '../../utils/Icons'

const CloseButton = ({ position, onClose }) => {
    return (
        <button
            onClick={onClose}
            type='button'
            className={`bg-white text-gray-400 hover:text-gray-500 hover:bg-gray-100 ${
                position ? position : ''
            } rounded-md p-2 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
        >
            <span className='sr-only'>Close menu</span>
            <CloseButtonIcon />
        </button>
    )
}

export default CloseButton
