// const jonAvg = (89 + 120 + 103) / 3;
// const mikeAvg = (116 + 94 + 123) / 3;
// const maryAvg = (97 + 134 + 105) / 3;

// if (jonAvg > mikeAvg && jonAvg > maryAvg) {
//   console.log("Jon's average is " + jonAvg);
// } else if (mikeAvg > jonAvg && mikeAvg > maryAvg) {
//   console.log("Mike's average is " + mikeAvg);
// } else {
//   console.log("Mary's average is " + maryAvg);
// }

const billValues = {
  values: [124, 48, 268, 180, 42],

  percentCalc: function() {
    this.tips = [];
    this.values.map(amount => {
      if (amount < 50) {
        this.tips.push(amount + amount * 0.2);
      } else if (amount >= 50 && amount <= 200) {
        this.tips.push(amount + amount * 0.15);
      } else {
        this.tips.push(amount + amount * 0.1);
      }
    });
    return this.tips;
  }
};

console.log(billValues.percentCalc());
