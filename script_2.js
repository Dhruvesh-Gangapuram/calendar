date = new Date();
month = date.getMonth();
var get_day = null
var next_line = null
var date_number = 1


const month_names = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    // ''
]
//next
document.getElementById('next').addEventListener('click', () => {
    date_number = 1
    month = month + 1
    if (month == 12 ){
        month = 0
    }
    for (var row = 0; row <= 5; row++) {
        for (var col = 0; col <= 6; col++) {
            var position_erase = row.toString() + col.toString()
            document.getElementById(position_erase).textContent = ' '
        }
    }
    set_Month()
    set_dates()
})
//prev
document.getElementById('prev').addEventListener('click', () => {
    date_number = 1
    month = month - 1
    if (month == -1 ){
        month = 11
    }
    for (var row = 0; row <= 5; row++) {
        for (var col = 0; col <= 6; col++) {
            var position_erase = row.toString() + col.toString()
            document.getElementById(position_erase).textContent = ' '
        }
    }
    set_Month()
    set_dates()
})
function loaded() {
    set_Month();
    set_dates();
}
function set_Month() {
    date.setMonth(month)
    document.getElementById('month_name').textContent = month_names[month];
}
function set_dates() {
    date = new Date(2021, month)
    get_day = date.getDay()
    next_line = (7 - get_day) + 1
    for (var row = 0; row <= 5; row++) {
        for (var col = 0; col <= 6; col++) {
            date.setDate(date_number)
            get_day = date.getDay()
            var id = row.toString() + get_day
            get_element_place = document.getElementById(id);
            var position = row.toString() + col.toString()

            if (parseInt(position) != id) {
                get_element_place.textContent = ' ';
            } else {
                get_element_place.textContent = date_number;
                date_number++;
            }

            if (date_number == next_line) {
                break
            }

            if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
                if (date_number >= 32) {
                    date_number = ' '
                    // get_element_place.textContent = ' ';
                    return
                }
            }
            if (month == 3 || month == 5 || month == 8 || month == 10) {
                if (date_number >= 31) {
                    date_number = ' '
                    // get_element_place.textContent = ' ';
                    console.log(date_number);
                    return
                }
            }
            if (month == 1) {
                if (date_number == 29) {
                    date_number = ' '
                    return
                }
            }
        }
    }
}