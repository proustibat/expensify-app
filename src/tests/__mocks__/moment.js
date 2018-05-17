// import moment from 'moment';
const moment = require.requireActual( 'moment' );

export default ( timerstamp = 0 ) => {
  return moment( timerstamp );
};
