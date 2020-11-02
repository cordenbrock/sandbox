//////////////////////////////////////////////  card deck ////////////////////////////////////////////// 

// function getDeck() {
//     let suits, values, deck;
//     suits = ["clubs", "spades", "hearts", "diamonds"];
//     values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
//     deck = [];
    
//     values.forEach(val => {
//         let i = 0;
//         let x  = 0;
//             suits.forEach(sui => {
//                 let card = {value: val, suit: sui}
//                 deck.push(card);
//                 x++;
//             })
//         i++;
//     });
//     return deck;
// };

////////////////////////////////////////////// palindromes ////////////////////////////////////////////// 

// $(document).ready(() => {
//     $('#form').submit(function(event) {
//       event.preventDefault();
  
//       const strOne = $('#word').val().split(" ").join("").toLowerCase();
//       const strTwo = $('#word').val().split("").reverse().filter(str => str != " ").join("").toLowerCase();
//       console.log(strOne);
//       console.log(strTwo);

//         if (strOne === strTwo) {
//             $("#print-result").text("palindrome affirmative");
//         } else {
//             $("#print-result").text("palindrome negatory");
//         }

//     });
//   });

////////////////////////////////////////////// roman numerals ////////////////////////////////////////////// 


// roman numeral library
const romanNumerals = [
    {val: 1000, numeral: "M"}, {val: 2000, numeral: "MM"}, {val: 3000, numeral: "MMM"}, {val: 100, numeral: "C"}, {val: 200, numeral: "CC"}, {val: 300, numeral: "CCC"}, {val: 400, numeral: "CD"}, {val: 500, numeral: "D"}, {val: 600, numeral: "DC"}, {val: 700, numeral: "DCC"}, {val: 800, numeral: "DCCC"}, {val: 900, numeral: "CM"}, {val: 10, numeral: "X"}, {val: 20, numeral: "XX"}, {val: 30, numeral: "XXX"}, {val: 40, numeral: "XL"}, {val: 50, numeral: "L"}, {val: 60, numeral: "LX"}, {val: 70, numeral: "LXX"}, {val: 80, numeral: "LXXX"}, {val: 90, numeral: "XC"}, {val: 1, numeral: "I"}, {val: 2, numeral: "II"}, {val: 3, numeral: "III"}, {val: 4, numeral: "IV"}, {val: 5, numeral: "V"}, {val: 6, numeral: "VI"}, {val: 7, numeral: "VII"}, {val: 8, numeral: "VIII"}, {val: 9, numeral: "IX"}
];
// deconstruct number input and remove(place values = 0) from array
function deconstructPlaceValues(num) {
    let ones, tens, hundreds, thousands, deconstructed;
    ones = Math.floor(num % 10);
    tens = Math.floor(num/10 % 10) * 10;
    hundreds = Math.floor(num/100 % 10) * 100;
    thousands = Math.floor(num/1000 % 10) * 1000;
    deconstructed = [thousands, hundreds, tens, ones];
    return deconstructed.filter(num => num != false)
};
// analyze deconstructed number and return roman numeral
function findRomanNumeral(num) {
    for (let obj of romanNumerals) {
        if (obj.val === num) {
            return obj.numeral;
        }
    }
};

// DOM -- UI
$(document).ready(() => {
    // form submission
    $('#form').submit(e => {
        e.preventDefault();
        // collect user input and convert number to roman numeral result
        let userNumber, deconstructedNumberArray, romanizedArray, romanResult;
        userNumber = parseInt($('#number').val());
        deconstructedNumberArray = deconstructPlaceValues(userNumber);
        romanizedArray = deconstructedNumberArray.map(num => {
            if (num >= 1000) {
                return findRomanNumeral(num);
            } else if (num >= 100 && num < 1000) {
                return findRomanNumeral(num);
            } else if (num >= 10 && num < 100) {
                return findRomanNumeral(num);
            } else if (num < 10 && num > 0) {
                return findRomanNumeral(num);
            }
        });
        if (userNumber === 69) {
            romanResult = '~ ~ alright alright alright ~ ~';
            /* feedback-derived-edit...they asked for it! */
        } else {
            romanResult = romanizedArray.join('');
        };
        // display converted number || invalidate input
        if (userNumber > 0 && userNumber < 4000) {
            $("#print-result").text(romanResult);
        } else {
            alert("Whoa tiger! That input is invalid for roman numeral conversion!");
            alert("Mess up again and Caesar's gonna throw ya into the Coliseum!!");
            alert("One more courtesy pop-up!!!");
        }
    })
});


///////////////////////////////////// Sieve of Eratosthenes -- Prime #'s ////////////////////////////////////

// function findPrimes(number) {
// //     let numArr = [];
// //     for (let i = 2; i <= number; i++) {
// //       numArr.push(i);
// //     }
// //     let primeArr = numArr.filter(num => {
// //       if (num === 2 || num === 3 || num === 5 || num === 7) {
// //         return num;
// //       } else if (num % 2 && num % 3 && num % 5 && num % 7) {
// //         return num;
// //       }
// //     });
// //     return primeArr;
// //   }
  
// //   $(document).ready(() => {
// //       $("#number").submit((e) => {
// //           e.preventDefault();
  
// //           let numberInput = parseInt($("#number-input").val());
    
// //           if (numberInput <= 1) {
// //               alert("Your number is too small!");
// //           } else {
// //             let primeNumbers = findPrimes(numberInput);
// //             primeNumbers.forEach(function(number) {
// //               $("#output").append("<li>" + number + "</li>");
// //             });
// //           }
// //       });
// //   });

// ///////////////////////////////////// Triangle Tracker /////////////////////////////////////

  
// $(document).ready(function () {
//     // let triangleType;
//     $("#triangle-sides").submit(function(e) {
//         e.preventDefault();
//         let side1, side2, side3;
//         side1 = parseInt($('#side1').val());
//         side2 = parseInt($('#side2').val());
//         side3 = parseInt($('#side3').val());

//         function triangleType() {
//             if (side1>0 && side2>0 && side3>0) {
//                 if (side1===side2 && side2===side3) {
//                 return ("equilateral")
//                 } else if (side1!=side2 && side2!=side3 && side3!=side1) {
//                 return ("scalene")
//                 } else {
//                 return ("isosceles")
//                 };
//             } else {
//             alert("this is not a triangle")
//             };
//         }
//         const triangle = triangleType();
//         // console.log(triangle)
//         $("#print-results").text(triangle)


//     });

// });

///////////////////////////////////// Temperature Converter /////////////////////////////////////

// function convertToFahr() {
//     let celsiusInput, fahrInput, celsiusConverted, fahrConverted;
//     celsiusInput = document.getElementById("celsius").value;
//     fahrInput = document.getElementById("fahrenheit").value
//     celsiusConverted = (fahrInput - 32) * (5/9);
//     fahrConverted = celsiusInput * (9/5) + 32;
//     document.querySelector('#print-conversion').innerHTML = `${fahrConverted} F`;
//     document.querySelector('#print-conversion').innerHTML = `${celsiusConverted} `;
//     document.getElementById("celsius").value = "";
//     document.getElementById("fahrenheit").value = "";
//   }

///////////////////////////////////// -- /////////////////////////////////////