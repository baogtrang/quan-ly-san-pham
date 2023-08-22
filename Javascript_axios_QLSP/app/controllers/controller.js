function renderProductList (array){
    var contentHTML = "";
    array.reverse().forEach((object)=> {
        var trContent = 
        `<tr>
            <td>${object.id}</td>
            <td>${object.name}</td>
            <td>${object.price}</td>
            <td>${object.img}</td>
            <td>${object.desc}</td>   
            <td>
                <button onclick=editProduct(${object.id}) class="btn btn-warning">Edit</button>            
                <button onclick=deleteProduct(${object.id}) class="btn btn-danger">Delete</button>
            </td>
        </tr>`
        contentHTML += trContent;
    })
    document.getElementById("tblDanhSachSP").innerHTML = contentHTML;
}

// khi API đang chạy, user đợi thì startLoading
function startLoading(){
    document.getElementById("spinner").style.display = "flex";

}

// khi có dữ liệu trả về, tắt spinner
function endLoading(){
    document.getElementById("spinner").style.display = "none";
}

// DOM, return an object, send the object to server
    // nhấn Edit trên mockapi để xem và tạo object
function getDataForm (){
    var ten = document.getElementById("TenSP").value;
    var gia = document.getElementById("GiaSP").value*1;
    var hinh = document.getElementById("HinhSP").value;
    var ma = document.getElementById("MaSP").value*1;
    return {
        id: ma,
        name: ten,
        price :gia ,
        img: hinh,
        desc:"Mô Tả",
    };
}

// 
function showDataForm(object){
    document.getElementById("TenSP").value = object.name;
    document.getElementById("GiaSP").value = object.price;
    document.getElementById("HinhSP").value = object.img ;
    document.getElementById("MaSP").value = object.id;
}