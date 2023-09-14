function bookRailwayTicket() {
  const seat = "a3";
  const name = "rahul";
  const payment = 5645;
  selectSeat(seat)
    .then((seat) => {
      enterDetails(name, seat);
    })
    .then((details) => {
      submitPayment(name, seat, payment);
    });
}

function selectSeat(seat) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("seat conformed", seat);
      resolve("confirmed ", seat);
    }, 2000);
  });
}

function enterDetails(name, seat) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("name binded", name, "with", seat);
      resolve("confirmed ", name, seat);
    }, 2000);
  });
}
function submitPayment(name, seat, payment) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("payment confirm", name, "with", payment);
      resolve("confirmed ", name, seat, payment);
    }, 2000);
  });
}
bookRailwayTicket();
