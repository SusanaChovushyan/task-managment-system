import React  from "react";
import { createPortal } from "react-dom"; 
import { useRef } from "react";

function Modal(props) { 

    const ref = useRef(null);
    console.log(ref)

    const handleOutsideClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            props.onClose();
        }
    };

    return createPortal(
        <div id="container" className="modal-container" onClick={handleOutsideClick}>
            <div className="modal-content" ref={ref}>
            <button onClick={props.onClose} className="close">x</button>
            <input
            type="text"
            placeholder="Title"
            />
            <textarea
            type="text"
            placeholder="Description"
            />
            <input
            type="text"
            placeholder="Assignee"
            />
            <div className="modal-actions">
                <button>Cancel</button>
                <button>Save</button>
            </div>
                {props.children}
            </div>
        </div>, document.getElementById('root2')
    )
}

export default Modal;