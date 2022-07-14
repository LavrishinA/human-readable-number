const dataObj = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
    1000: "thousand",
    1000000: "million",
};

module.exports = function toReadable(n) {
    let resultString = "";

    function from1to19(n) {
        return dataObj[n];
    }

    function from20to100(n) {
        return n % 10
            ? `${dataObj[Math.floor(n / 10) * 10]} ${dataObj[n % 10]}`
            : dataObj[n];
    }

    if (n >= 0 && n <= 19) resultString = from1to19(n).trim();
    if (n >= 20 && n <= 99) resultString = from20to100(n).trim();
    if (n >= 100 && n <= 999)
        resultString = `${from1to19(Math.floor(n / 100))} ${from20to100(100)} ${
            n % 100 === 0 ? "" : toReadable(n % 100)
        }`.trim();
    if (n >= 1000 && n <= 999999)
        resultString = `${toReadable(Math.floor(n / 1000))} ${from20to100(
            1000
        )} ${n % 1000 === 0 ? "" : toReadable(n % 1000)}`.trim();

    return resultString;
};
