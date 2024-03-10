import { useState } from "react";
import Modal from "./Modal";
import './modal.css';
const ModalTest = () => {
    const [showModalPopup, setShowModalPopup] = useState(false);
    const handleClick = () => {
        setShowModalPopup(!showModalPopup);
    }
    const onClose = () => {
        setShowModalPopup(false);
    }
    return (
        <div>
            <button onClick={handleClick}>Open Modal Popup</button>
            {showModalPopup &&
                <Modal id={"custon-id"}
                    header={<h1>This is custom header</h1>}
                    footer={<h1>This is custom footer</h1>}
                    body={<div>Customized body</div>}
                    onClose={onClose} />
            }

        </div>
    );
};

export default ModalTest;
