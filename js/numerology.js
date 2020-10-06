var month = "02";
var date = "26";
var year = "1997";


function partA(){
    var a = parseInt(month.slice(0,1));
    var b = parseInt(month.slice(1,2));
    
    var c = parseInt(date.slice(0,1));
    var d = parseInt(date.slice(1,2));
    
    var p = parseInt(year.slice(0,1));
    var f = parseInt(year.slice(1,2));
    var g = parseInt(year.slice(2,3));
    var h = parseInt(year.slice(3,4));
    
    var addMonth = a + b;
    var addDate = c + d;
    var addYear = p + f + g + h;

    var addNumbers = addMonth + addDate + addYear;

    return addNumbers;
console.log(addNumbers);
}; 



//function partB(){
//    
//};

var UIController = (function() {
    
    return {
        getinput: function() {
            return {
            monthA: document.getElementById(".month").value,
            dayA: document.getElementById(".day").value,
            yearA: document.getElementById(".year").value
            }  
        }
    };
    console.log(monthA);
    
})();




var controller = (function(UIController, partA) {
   
   
//    document.querySelector('.calc_num').addEventListener('click', function() {
//    
//   document.querySelector(".life_path_number").innerHTML = "calculated";
//})();
    

    
});

$(".calc_num").click(function() {
    document.querySelector(".life_path_number").innerHTML = "calculated";
});