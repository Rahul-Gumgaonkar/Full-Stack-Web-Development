const orderBriyani = (callBack) => {
  TakeARice((Rice) => {
    MixMasalaInRice(Rice, (Masala) => {
      ServeTheBriyani(Masala, (Briyani) => {
        callBack(Briyani);
      });
    });
  });
};

function TakeARice(next) {
  setTimeout(() => {
    const Rice = "🍥";
    console.log("Sending ", Rice);
    next(Rice);
  }, 2000);
}

function MixMasalaInRice(Rice, next) {
  setTimeout(() => {
    const Masala = Rice + "🍘";
    console.log("Mixing the Masala", Masala);
    next(Masala);
  }, 2000);
}

function ServeTheBriyani(Masala, next) {
  setTimeout(() => {
    const Briyani = Masala + "🍚";
    console.log("Here is Your Briyani" + Briyani);
    next(Briyani);
  }, 2000);
}

function Reveive(Briyani) {
  console.log("Here is Your Notification for", Briyani);
}

orderBriyani(Reveive);
