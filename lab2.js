// 1. implement another method getTime and print out current time;

const calendar = {
  getDate: function () {
    return new Date().toDateString();
  },
  getTime: function (){
    return new Date().toLocaleTimeString();
  }
};




console.log(calendar.getDate());
console.log(calendar.getTime());
