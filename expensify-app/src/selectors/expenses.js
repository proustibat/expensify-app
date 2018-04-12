import moment from 'moment';

const getVisibleExpenses =  ( expenses, { text, sortBy, startDate, endDate } ) => {
    return expenses
        .filter( ( expense ) => {
            // Dates
            const createdAtMoment = moment( expense.createdAt );
            const startDateMatch = startDate ? startDate.isSameOrBefore( createdAtMoment, 'day' ) : true;
            const endDateMatch = endDate ? endDate.isSameOrAfter( createdAtMoment, 'day' ) : true;

            // text filter
            const textDateMatch = expense.description.toLowerCase().includes( text.toLowerCase() );

            // All conditions
            return startDateMatch && endDateMatch && textDateMatch;
        } )
        .sort( ( a, b ) => {
            const criterion = sortBy === 'date' ? 'createdAt' : 'amount';
            return a[ criterion ] < b[ criterion ] ? 1 : -1;

            // if ( sortBy === 'date' ) {
            //     return a.createdAt < b.createdAt ? 1 : -1;
            // } else if ( sortBy === 'amount' ) {
            //     return a.amount < b.amount ? 1 : -1;
            // }
        } );
};

export default getVisibleExpenses;
