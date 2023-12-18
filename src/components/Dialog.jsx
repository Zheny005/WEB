import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../css/Dialog.css';

const Dialog = ({ isOpen, onClose }) => {
    const [showDialog, setShowDialog] = useState(isOpen);

    const closeDialog = () => {
        setShowDialog(false);
        setTimeout(() => onClose(), 300);
    };

    return (
        <CSSTransition
            in={showDialog}
            timeout={300}
            classNames="dialog"
            unmountOnExit
            onExited={() => onClose()}
        >
            <div className="dialog">
                <h1>Welcome!</h1>
                <p>This is your greeting message.</p>
                <button onClick={closeDialog}>Close</button>
            </div>
        </CSSTransition>
    );
};

export default Dialog;