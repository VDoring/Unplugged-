var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

today = yyyy + '-' + mm + '-' + dd;

// 작동하지 않는 상태
document.getElementById("schedule_date_start").setAttribute("value", today);
document.getElementById("schedule_date_end").setAttribute("value", today);
