const numbersHash = {
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
};

const difficultNumbersHash = {
    1: "ten",
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
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
};

module.exports = function toReadable(mainNumber) {
    let digitsInNumber = mainNumber.toString().length;
    let firstDigit, secondDigit, thirdDigit;
    let resultThreeDigits, resultTwoDigits, resultOneDigits;
    let result;

    if (digitsInNumber == 3) {
        firstDigit = Math.floor(mainNumber / 100);
        secondDigit = Math.floor((mainNumber % 100) / 10);
        thirdDigit = mainNumber % 10;
        if (secondDigit == 1) {
            secondDigit = mainNumber % 100;
            thirdDigit = "";
        }

        result = resultThreeDigits = `${numbersHash[firstDigit]} hundred${
            difficultNumbersHash[secondDigit]
                ? ` ${difficultNumbersHash[secondDigit]}`
                : ""
        } ${numbersHash[thirdDigit] ? numbersHash[thirdDigit] : ""}`;
        return result.replace("zero", "").trim("")
            ? result.replace("zero", "").trim("")
            : result.trim("");
    } else if (digitsInNumber == 2) {
        firstDigit = Math.floor(mainNumber / 10);
        secondDigit = mainNumber % 10;

        if (firstDigit == 1) {
            firstDigit = mainNumber;
            secondDigit = "";
        }

        result = resultTwoDigits = `${
            difficultNumbersHash[firstDigit]
                ? difficultNumbersHash[firstDigit]
                : ""
        } ${numbersHash[secondDigit] ? numbersHash[secondDigit] : ""}`;
        return result.replace("zero", "").trim("")
            ? result.replace("zero", "").trim("")
            : result.trim("");
    } else if (digitsInNumber == 1) {
        firstDigit = mainNumber;

        return (resultOneDigits = `${numbersHash[firstDigit]}`);
    }
};
