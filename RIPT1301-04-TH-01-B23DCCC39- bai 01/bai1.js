function dong_ho(){
    var gio = document.getElementById('gio');
    var phut = document.getElementById('phut');
    var giay = document.getElementById('giay');
    var hientai = new Date()
    var Gio_hien_tai = String(hientai.getHours()).padStart(2, '0');
    var Phut_hien_tai = String(hientai.getMinutes()).padStart(2, '0');
    var Giay_hien_tai = String(hientai.getSeconds()).padStart(2,'0')
    gio.innerHTML = Gio_hien_tai;
    phut.innerHTML = Phut_hien_tai;
    giay.innerHTML = Giay_hien_tai;
}
var Dem_gio = setInterval(dong_ho, 1000);