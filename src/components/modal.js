import React, { useState } from 'react';
import Modal from 'react-modal';
import SpeakerBio from './bio';
import { BsPersonLinesFill } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '500px',
        maxHeight: '80vh',
        overflow: 'auto',
    },
};

const BioModal = ({ speaker, isOpen, onRequestClose, hideTrigger }) => {
    const [internalOpen, setInternalOpen] = useState(false);

    const isControlled = isOpen !== undefined && onRequestClose !== undefined;
    const modalOpen = isControlled ? isOpen : internalOpen;
    const closeModal = isControlled ? onRequestClose : () => setInternalOpen(false);

    return (
        <>
            {!hideTrigger && (
                <button
                    onClick={() => setInternalOpen(true)}
                    className="space-x-4 text-xxl vertical-align-top hover:text-white"
                    aria-label="Speaker Bio"
                >
                    <BsPersonLinesFill />
                </button>
            )}
            <Modal
                appElement={document.getElementById('root') || document.body}
                isOpen={modalOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{speaker?.fullName}</h3>
                    <button
                        onClick={closeModal}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Close"
                    >
                        <MdClose className="text-2xl" />
                    </button>
                </div>
                <SpeakerBio speaker={speaker} />
            </Modal>
        </>
    );
};

export default BioModal;