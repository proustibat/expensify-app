const getVisibleExpenses =  ( expenses, { text, sortBy, startDate, endDate } ) => {
    return expenses
        .filter( ( expense ) => {
            const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
            const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
            const textDateMatch = expense.description.toLowerCase().includes( text.toLowerCase() );
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
