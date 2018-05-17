import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import ConfirmModal from "./ConfirmModal";


export class PageEdit extends React.Component {
    state = {
        isModalOpen: false,
        modalBody: 'Are you sure?',
        modalConfirmText: 'Yes',
        modalCancelText: 'No',
        modalConfirmHandle: undefined
    };

    onSubmit = expense => {
        this.props.startEditExpense( this.props.expense.id, expense );
        this.props.history.push( '/' );
    };

    onRemove = e => {
        this.props.startRemoveExpense( { id: this.props.expense.id } );
        this.props.history.push( '/' );
    };

    openConfirmModal = expense => {
        let modalParams = {};
        if ( expense && expense.nativeEvent  ) {
            // Remove
            modalParams = {
                modalBody: 'Are you sure you wanna delete this expense?',
                modalConfirmText: 'Of course!',
                modalCancelText: 'Wait! No!',
                modalConfirmHandle: this.onRemove
            };
        }
        else {
            // Edit / Save
            modalParams = {
                modalBody: 'Do you wanna save your changes?',
                modalConfirmHandle: this.onSubmit.bind( this, expense )
            };
        }
        this.setState( () => ( {
            ...modalParams,
            isModalOpen: true
        } ) );
    };

    closeConfirmModal = () => {
        this.setState( () => ( { isModalOpen: false } ) );
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense = { this.props.expense }
                        onSubmit = { this.openConfirmModal }
                    />
                    <button className="button button--secondary" onClick = { this.openConfirmModal }>Remove Expense</button>
                </div>

                <ConfirmModal
                    showModal = { this.state.isModalOpen }
                    handleCloseModal = { this.closeConfirmModal }
                    handleConfirm = { this.state.modalConfirmHandle }
                    body={this.state.modalBody}
                    confirmText={this.state.modalConfirmText}
                    cancelText={this.state.modalCancelText}
                />
            </div>
        );
    }
}

const mapStateToProps = ( state, props ) => ( {
    expense: state.expenses.find( expense => expense.id === props.match.params.id )
} );

const mapDispatchToProps = dispatch => ( {
    startEditExpense: ( id, expense ) => dispatch( startEditExpense( id, expense ) ),
    startRemoveExpense: id => dispatch( startRemoveExpense( id ) )
} );

export default connect( mapStateToProps, mapDispatchToProps )( PageEdit );
