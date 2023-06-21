import './Popup.css'

const Popup = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null
    }

    const overlayClasses = `z-20 popup-overlay  ${isOpen ? 'open' : ''}`
    const contentClasses = `popup-content  ${isOpen ? 'open' : ''}`

    const handleClose = (e) => {
        console.log('Overlay clicked') // Добавим вывод в консоль
        e.stopPropagation()
        if (onClose) {
            // Проверим, есть ли функция onClose
            onClose()
        }
    }

    return (
        <div className={overlayClasses} onClick={handleClose}>
            <div className={contentClasses} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Popup
