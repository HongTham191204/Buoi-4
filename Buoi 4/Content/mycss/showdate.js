//function HienThiNgay() {
//    var _date = new Date();
//    var ngay = _date.getDay() + 1;
//    var thang = _date.getMonth() + 1;
//    var nam = _date.getFullYear();
//    alert("hôm nay là ngày " + ngay + "/" + thang + "/" + nam);

//}

function DonGia() {
    var sl = parseFloat(document.getElementById("soluong").value);  //soluong * donggia: 1 form (cục bộ)
    var dg = parseFloat(document.getElementById("donggia").value);
    window.document.getElementById("thanhtien").value = sl * dg;
}

function Yes_or_No() {
    var radiocheck = document.getElementById("checkbox"); //Name:chỉ cần khai báo name or id ko cần cả 2 Id: nút chọn
    if (radiocheck[0].checked == true)
        document.getElementById("Huflit").innerHTML = "Tôi là sinh viên khoa CNTT, trường Huflit ";
    if (radiocheck[1].checked == true)
        document.getElementById("Huflit").innerHTML = "Tôi không là sinh viên khoa CNTT, trường Huflit ";
}

function Hobby() {
    // Khai báo tham số
    var checkbox = document.getElementsByName('nutchon');
    var result = "";
    // Lặp qua từng checkbox để lấy giá trị
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked === true) {
            result += ' [' + checkbox[i].value + ']';
        }
    }
    // In ra kết quả
    alert("Sở thích là: " + result);
}