// var test = true;

// if (!!test) {
//     // alert(123)
// }

// // Tinh tien phat the tin dung



// document.getElementById('Calculate').onclick = function () {
//     var creditCardBalance = +document.getElementById('creditCardBalance').value;
//     var payment = +document.getElementById('payment').value;

//     if (payment < creditCardBalance) {
//         var balance = creditCardBalance - payment;
//         var penalty = balance * 0.015;
//         document.getElementById('result').innerHTML = penalty.toLocaleString();
//     }
// }

// // Tinh tien lam OT

// document.getElementById('Calculate').onclick = function () {
//     var workedHours = +document.getElementById('workedHours').value;
//     var wage = +document.getElementById('wage').value;
//     var salary;
//     const COEFFICIENT = 1.5;

//     if (workedHours > 40) {
//         var hourOT = workedHours - 40;
//         salary = (40 * wage) + (hourOT * (wage * 1.5));
//     } else {
//         salary = workedHours * wage;

//     }
//     document.getElementById('result').innerHTML = `Salary is $${salary}`;

// }

// // Tinh tien don hang

// // document.getElementById('Calculate').onclick = function () {
// //     var itemName = document.getElementById('itemName').value;
// //     var quantity = +document.getElementById('quantity').value;
// //     var price = +document.getElementById('price').value;
// //     var total;

// //     if (quantity < 50) {
// //         total = 0;
// //         total = price * quantity;
// //     } else if (quantity >= 50 && quantity <= 100) {
// //         total = 0;
// //         total = 49 * price + (quantity - 49) * price * 0.92;

// //     } else {
// //         total = 0;
// //         total = 100*price + (quantity-100)*price*0.88
// //     }
// //     document.getElementById('result').innerHTML = total;

// // }

// function Cart() {
//     var itemName = document.getElementById('itemName').value;
//     var quantity = +document.getElementById('quantity').value;
//     var price = +document.getElementById('price').value;
//     var total;

//     if (quantity < 50) {
//         total = 0;
//         total = price * quantity;
//     } else if (quantity >= 50 && quantity <= 100) {
//         total = 0;
//         total = 49 * price + (quantity - 49) * price * 0.92;

//     } else {
//         total = 0;
//         total = 100 * price + (quantity - 100) * price * 0.88
//     }
//     document.getElementById('result').innerHTML = total;
// }

// document.getElementById('Calculate').onclick = Cart;

// // Tính điểm TB

// function grading() {
//     var math = +document.getElementById('math').value;
//     var physic = +document.getElementById('physics').value;
//     var chemistry = +document.getElementById('chemistry').value;

//     var avg = 0;

//     if (!isNaN(math) && !isNaN(physic) && !isNaN(chemistry)) {
//         avg = (math + physic + chemistry) / 3;
//     } else {
//         document.getElementById('academicPerf').innerHTML = 'Please enter valid numbers.';
//     }
//     document.getElementById('avgGrade').innerHTML = avg.toLocaleString();

//     var academicPerf = '';

//     if (avg >= 8.5) {
//         document.getElementById('academicPerf').innerHTML = 'Very Good';
//     } else if (avg >= 6.5 && avg < 8.5) {
//         document.getElementById('academicPerf').innerHTML = 'Good';
//     } else if (avg >= 5 && avg < 6.5) {
//         document.getElementById('academicPerf').innerHTML = 'Average';
//     } else {
//         document.getElementById('academicPerf').innerHTML = 'Weak';
//     }

// }

// document.getElementById('calculateAvg').onclick = grading;

// // Nhap so, in ra cach doc

// // document.getElementById('search').onclick = function () {
// //     var number = +document.getElementById('number').value;

// //     switch (number) {
// //         case 1:
// //             document.getElementById('spelling').innerHTML = 'O-N-E';
// //             break;

// //         case 2:
// //             document.getElementById('spelling').innerHTML = 'T-W-O';
// //             break;

// //         case 3:
// //             document.getElementById('spelling').innerHTML = 'T-H-R-E-E';
// //             break;

// //         case 4:
// //             document.getElementById('spelling').innerHTML = 'F-O-U-R';
// //             break;
// //         default:
// //             document.getElementById('spelling').innerHTML = 'Enter a number from 1 to 4';

// //     }
// // }

// // const spellings = {
// //     1: 'O-N-E',
// //     2: 'T-W-O',
// //     3: 'T-H-R-E-E',
// //     4: 'F-O-U-R'
// // };

// // document.getElementById('search').onclick = function () {
// //     const number = +document.getElementById('number').value;
// //     const spelling = spellings[number] || 'Enter a number from 1 to 4';
// //     document.getElementById('spelling').innerHTML = spelling;
// // }


// document.getElementById('check').onclick = function () {
//     const month = document.getElementById('month').value;

//     switch (month) {
//         case 'Jan':
//         case 'Mar':
//         case 'May':
//         case 'Jul':
//         case 'Aug':
//         case 'Oct':
//         case 'Dec':
//             document.getElementById('monthDays').innerHTML = '31 days';
//             break;
//         case 'Apr':
//         case 'Jun':
//         case 'Sep':
//         case 'Nov':
//             document.getElementById('monthDays').innerHTML = '30 days';
//             break;
//         case 'Feb':
//             document.getElementById('monthDays').innerHTML = '28 or 29 days';
//             break;
//         default:
//             document.getElementById('monthDays').innerHTML = 'Enter valid month';
//     }
// }

/* -----------Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo
 thứ tự tăng dần------------ */

document.getElementById('btnSort').onclick = function () {
    var so1 = +document.getElementById('so1').value;
    var so2 = +document.getElementById('so2').value;
    var so3 = +document.getElementById('so3').value;

    if (so1 < so2 && so1 < so3) {
        document.getElementById('result').textContent = `${so1}, ${so2}, ${so3}`;
    } else if (so2 < so1 && so2 < so3) {
        document.getElementById('result').textContent = `${so2}, ${so1}, ${so3}`;
    } else {
        document.getElementById('result').textContent = `${so3}, ${so1}, ${so2}`;
    }
};

/*
Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy
sẽ hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong
gia đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)
*/

document.getElementById('confirm').onclick = function () {
    var fMember = document.getElementById('member').value;

    switch (fMember) {
        case 'Bố':
        case 'Mẹ':
        case 'Anh Trai':
        case 'Em Gái':
            document.getElementById('greeting').textContent = `Xin chào ${fMember}`;
            break;
        default:
            document.getElementById('greeting').textContent = 'Xin nhập vào thành viên hợp lệ';

    }

};

/* Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn */

document.getElementById('btnCalculate').onclick = function () {
    var so1 = +document.getElementById('firstNumber').value;
    var so2 = +document.getElementById('secondNumber').value;
    var so3 = +document.getElementById('thirdNumber').value;

    var oddCount = 0;
    var evenCount = 0;

    if (so1 % 2 !== 0) {
        oddCount++;
    } else {
        evenCount++
    }
    if (so2 % 2 !== 0) {
        oddCount++;
    } else {
        evenCount++
    }
    if (so3 % 2 !== 0) {
        oddCount++;
    } else {
        evenCount++
    }

    document.getElementById('oddEvenResult').textContent = `Số chẵn: ${evenCount}. Số lẻ: ${oddCount}`;
};

/* Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì? */

document.getElementById('btnTriangle').onclick = function () {
    var side1 = +document.getElementById('side1').value;
    var side2 = +document.getElementById('side2').value;
    var side3 = +document.getElementById('side3').value;

    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        document.getElementById('triangle').textContent = 'Tam giác không hợp lệ';
    }

    if (side1 == side2 && side2 == side3) {
        document.getElementById('triangle').textContent = 'Tam giác đều';

    } else if (side1 == side2 || side1 == side3 || side3 == side2) {
        document.getElementById('triangle').textContent = 'Tam giác cân';

    } else {
        document.getElementById('triangle').textContent = 'Tam giác vuông';

    }
};





