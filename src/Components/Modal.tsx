import { useCardContext } from "../Context/CardsContext"

export default function Modal() {

    const {setModalVisible, modalContent}:any = useCardContext()

    function handleCloseModal() {
        setModalVisible(false)
    }
    return (
        <div className="modal">
            <div className="frame-modal">
                <h3 className="title-modal">{modalContent.title}</h3>
                <img src={modalContent.src} alt="drink-pinacolada" />
                <div className="line-separator"></div>
                <p className="desc-modal">{modalContent.content}</p>
                <input type="button" value="Close" onClick={() => handleCloseModal()} />
            </div>
        </div>
    )
}