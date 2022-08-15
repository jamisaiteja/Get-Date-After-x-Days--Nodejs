// var addDays = require("date-fns/addDays");

// function x(days) {
//   let y = addDays(new Date(2020, 07, 22), days);
//   //   let d = pad(y.getDate());
//   //   let d = y.getDate();
//   //   let m = y.getMonth() + 1;
//   //   if (d < 10) {
//   //     d = "0" + d.toString();
//   //   } else {
//   //     d = y.getDate();
//   //   }
//   //   if (m < 10) {
//   //     m = "0" + m.toString();
//   //   } else {
//   //     m = y.getMonth() + 1;
//   //   }
//   //   //   let m = pad(y.getMonth());
//   //   let yr = y.getFullYear();
//   return `${y.getDate()}-${y.getMonth() + 1}-${y.getFullYear()}`;
// }

// module.exports = x();

const addDays = require("date-fns/addDays");

const getDateAfterXDays = (days) => {
  const newDate = addDays(new Date(2020, 7, 22), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};

module.exports = getDateAfterXDays;
