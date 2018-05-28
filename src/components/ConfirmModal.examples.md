```js
class ModalExample extends React.Component {
    constructor() {
        super()
        this.state = { isModalOpen: false };
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleDecline = this.handleDecline.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    
    openModal(){
        this.setState( () => ({
            isModalOpen: true
        }))
    }
  
    closeModal(){
        this.setState( () => ({
            isModalOpen: false
        }))
    }
  
    handleConfirm() {
        alert( 'User said yes' );
        this.closeModal();
    }
  
    handleDecline() {
        alert( 'User said No' );
        this.closeModal();
    }
  
    render() {
        return (
            <div>
                <button onClick={this.openModal}>Open</button>
                <ConfirmModal
                    showModal = { this.state.isModalOpen }
                    handleCloseModal = { this.handleDecline }
                    handleConfirm = { this.handleConfirm }
                    body="Are you sure?"
                    confirmText="Yes"
                    cancelText="No"
                />
            </div>
        );
    }
};
<ModalExample />
```

