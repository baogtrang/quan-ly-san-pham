var array = [];

    // renderProductList, lấy dữ liệu mới nhất từ server
function fetchProductList(){
    startLoading();
    // chạy API
    axios ({
        url: "https://64e12f9e50713530432d0275.mockapi.io/product",
        method: "GET",
    }).then(function (res){
    // res === response from server, the callback function is called when the request is successful
        renderProductList(res.data);
        endLoading();
    })
    .catch(function (err){
        // err is error, this callback is called with the error from the request
        endLoading();
    });
}
// gọi lần đầu khi load trang
fetchProductList();

// delete Product
function deleteProduct(id) {
    startLoading();
    axios ({
        url: `https://64e12f9e50713530432d0275.mockapi.io/product/${id}`,
        method:"DELETE" ,
    }).then (function(res){
        fetchProductList();
        // xóa thành công dữ liệu trên server rồi render lại danh sách mới
    }).catch (function(err){
        endLoading();
    }) 
}

function addProduct (){
    // create an object
    var product = getDataForm();
    axios({
        url: "https://64e12f9e50713530432d0275.mockapi.io/product", 
        method: 'POST',
        data: product, 
    }).then (function(res){
        // hides the model after users clicks the "add" button
        $('#myModal').modal('hide');
        fetchProductList();
        
    }).catch(function(err){
        console.log("🚀 ~ file: main.js:49 ~ addProduct ~ err:", err)
        
    })
}

function editProduct(id){
    $('#myModal').modal('show');
    axios ({
        url: `https://64e12f9e50713530432d0275.mockapi.io/product/${id}`,
        method: "GET",
    })
        .then(function(res){
            showDataForm(res.data);
            getDataForm();
        })
        .catch(function(err){
        })
}

function updateProduct(){
    var product = getDataForm();
    console.log(product);
    axios ({
        url: `https://64e12f9e50713530432d0275.mockapi.io/product/${product.id}`,
        method: "PUT",
        data: product,
    })
        .then(function(res){
            // hides the model after users clicks the "add" button
            $('#myModal').modal('hide');
            fetchProductList();
        })
        .catch(function(err){
        })
}