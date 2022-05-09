import React from 'react';
import { Modal } from '@mui/material';

type modal = {
    isOpen: boolean,
    onClose: any,
    selectedStatusButton: any,
    setSelectedStatusButton: any
}

const StatusModal = ({isOpen, onClose}: modal) => {
    return (
        <Modal>

        </Modal>
    )
}

export default StatusModal;