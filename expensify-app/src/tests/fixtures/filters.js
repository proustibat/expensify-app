import moment from 'moment';

const filters = {
    startDate: undefined,
    endDate: undefined,
    text: '',
    sortByd: 'date'
};

const altFilters = {
    startDate: moment( 0 ),
    endDate: moment( 0 ).add( 3, 'days' ),
    text: 'bills',
    sortByd: 'amount'
};

export {
    filters,
    altFilters
}
