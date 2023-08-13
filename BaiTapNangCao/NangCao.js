/* Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp
lệ). Tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước
đó */

document.getElementById('btnFindDate').onclick = function () {
    var day = +document.getElementById('day').value;
    var month = +document.getElementById('month').value;
    var year = +document.getElementById('year').value;
    var nextDay, nextMonth, nextYear;
    var previousDay, previousMonth, previousYear;

    if (day == 31 && month == 12) {
        nextDay = 1;
        nextMonth = 1;
        nextYear = year + 1;
    } else if (day == 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
        nextDay = 1;
        nextMonth = month + 1;
        nextYear = year;
    } else if (day == 28 && month == 2) {
        if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
            if (day == 29) {
                nextDay = 1;
                nextMonth = month + 1;
                nextYear = year;
            } else {
                nextDay = day + 1;
                nextMonth = month;
                nextYear = year;
            }
        } else {
            nextDay = day + 1;
            nextMonth = month;
            nextYear = year;
        }
    } else if (day == 31 || (day == 30 && month != 2)) {
        nextDay = 1;
        nextMonth = month + 1;
        nextYear = year;
    } else {
        nextDay = day + 1;
        nextMonth = month;
        nextYear = year;
    }

    document.getElementById('nextDate').textContent = `Ngày kế tiếp là ${nextDay}/${nextMonth}/${nextYear}`;

    if (day == 1 && month == 1) {
        previousDay = '31';
        previousMonth = '12';
        previousYear = year - 1;
    } else if (day == 1 && (month == 4 || month == 6 || month == 9 || month == 11)) {
        previousDay = '30';
        previousMonth = month - 1;
        previousYear = year;
    } else if (day == 1 && month == 2) {
        if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
            previousDay = '29';
            previousMonth = month - 1;
            previousYear = year;
        } else {
            previousDay = '28';
            previousMonth = month - 1;
            previousYear = year;
        }
    } else if (day == 1) {
        previousDay = 31
        previousMonth = month - 1
        previousYear = year
    } else {
        previousDay = day - 1
        previousMonth = month
        previousYear = year
    }

    document.getElementById('previousDate').textContent = `Ngày trước đó là ${previousDay}/${previousMonth}/${previousYear}`;
}

/**Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm
tháng của năm nhuận) */

document.getElementById('btnFindDays').onclick = function () {
    var month = +document.getElementById('month2').value;
    var year = +document.getElementById('year2').value;

    if (month < 1 || month > 12) {
        document.getElementById('numOfDays').textContent = 'Nhập vào tháng hợp lệ';
    }
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        if (month === 2) {
            document.getElementById('numOfDays').textContent = 'Tháng này có 29 ngày';
        } else if (month === 4 || month === 6 || month === 9 || month === 11) {
            document.getElementById('numOfDays').textContent = 'Tháng này có 30 ngày';
        } else {
            document.getElementById('numOfDays').textContent = 'Tháng này có 31 ngày';
        }
    } else {
        if (month === 2) {
            document.getElementById('numOfDays').textContent = 'Tháng này có 28 ngày';

        } else if (month === 4 || month === 6 || month === 9 || month === 11) {
            document.getElementById('numOfDays').textContent = 'Tháng này có 30 ngày';
        } else {
            document.getElementById('numOfDays').textContent = 'Tháng này có 31 ngày';
        }
    }
}


