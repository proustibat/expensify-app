import React from 'react';
import Modal from 'react-modal';

export default class ConfirmModal extends React.Component {

    customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
        }
    };

    constructor( props ) {
        super( props );

        // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
        Modal.setAppElement( document.querySelector( '#app' ) );
    }

    render() {
        return (
            <Modal
                isOpen = { this.props.showModal }
                contentLabel = { 'Confirm choice modal' }
                style = { this.customStyles}
                onRequestClose = { this.props.handleCloseModal }
            >
                {/*Are you sure you wanna delete this expense?*/}
                <p>{ this.props.body }</p>
                <div className="button-container--space-around">
                    <button className="button button--cancel" onClick={ this.props.handleCloseModal }>{ this.props.cancelText }</button>
                    <button className="button button--valid" onClick={ this.props.handleConfirm }>{ this.props.confirmText }</button>
                </div>
            </Modal>
        );
    }
}

