import React, { useState } from 'react';

// set type for props
type Props = {
    handleDeleteComplete: () => void;
    handleShowComplete: () => void;
    handleShowUnComplete: () => void;
    handleShowAll: () => void;
}

const TodoActionButton: React.FC<Props> = ({ handleDeleteComplete, handleShowComplete, handleShowUnComplete, handleShowAll }) => {
    // logic for select pressedButton
    const [pressedButton, setPressedButton] = useState<string>('showAll');

    const handleClick = (buttonName: string, action: () => void) => {
        setPressedButton(buttonName);
        action();
        console.log(pressedButton)
    };

    const handleShowAllClick = () => {
        handleClick('showAll', handleShowAll);
    };

    const handleShowUnCompleteClick = () => {
        handleClick('showUnComplete', handleShowUnComplete);
        
    };

    const handleShowCompleteClick = () => {
        handleClick('showComplete', handleShowComplete);
        
    };

    const handleDeleteCompleteClick = () => {
        handleClick('deleteComplete', handleDeleteComplete);
        
    };

    return (
        <>
            {/* show or not the button with condition */}
            {pressedButton !== 'showAll' && (
                <button className="deleteButtonFoot" onClick={handleShowAllClick}>Show All</button>
            )}
            {pressedButton !== 'showUnComplete' && pressedButton !== 'showComplete' && pressedButton !== 'deleteComplete' && (
                <button className="deleteButtonFoot" onClick={handleShowUnCompleteClick}>Show UnComplete</button>
            )}
            {pressedButton !== 'showComplete' && pressedButton !== 'showUnComplete' && pressedButton !== 'deleteComplete' && (
                <button className="deleteButtonFoot" onClick={handleShowCompleteClick}>Show Complete</button>
            )}
            {pressedButton === 'showAll' ||  pressedButton === 'showComplete' && (
                <button className="deleteButtonFoot" onClick={handleDeleteCompleteClick}>Delete Complete</button>
            )}
        </>
    );
};

export default TodoActionButton;
