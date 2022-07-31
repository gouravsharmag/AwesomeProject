import moment from 'moment';

// format DD-MM-YYYY
export function getParsedDate(date) {
   const formatedDate = moment(date).format('DD-MM-YYYY');
   return formatedDate;
}

// format YYYY-MM-DD
export function getParsedDateYear(date) {
   const formatedDate = moment(date).format('YYYY-MM-DD');
   return formatedDate;
}