exports.dateFormat = (date) => {
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;

  return date.getFullYear() + '-' + month + '-' + day;
}

exports.monthAgoFromNow = (month) => {
  const date = new Date();
  date.setMonth(date.getMonth() - month);
  return date;
}

exports.beforeDateFilter = curry(dateFilter)('before');

exports.afterDateFilter = curry(dateFilter)('after');

dateFilter = (standard, date) => {
  return {
    "timestamp": standard,
    "created_time": {
      standard: date
    }
  }
}