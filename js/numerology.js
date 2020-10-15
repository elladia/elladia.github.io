//var month = "02";
//var date = "26";
//var year = "1997";

var UIController = (function() {
    
    var DOMStrings = {
        inputDay: "day",
        inputMonth: "month",
        inputYear: "year"
    }
    
    return {
        getInput: function() {
            return {
            day: +document.getElementById(DOMStrings.inputDay).value,
            month: +document.getElementById(DOMStrings.inputMonth).value,
            year: +document.getElementById(DOMStrings.inputYear).value
            }  
        }
    };
    
})();

var input = UIController.getInput();

//var calculateA = function(){
//    var c = parseInt(input.day.slice(0,1)) | 0;
//    var d = parseInt(input.day.slice(1,2));
//    
//    var a = parseInt(input.month.slice(0,1)) | 0;
//    var b = parseInt(input.month.slice(1,2));
//
//    var p = parseInt(input.year.slice(0,1));
//    var f = parseInt(input.year.slice(1,2));
//    var g = parseInt(input.year.slice(2,3));
//    var h = parseInt(input.year.slice(3,4));
//    
//    var addMonth = a + b;
//    var addDate = c + d;
//    var addYear = p + f + g + h;
//
//    return {
//        function addNumbers() = addMonth + addDate + addYear;
//    }
//}; 

//var addA = calculateA.addNumbers();

document.querySelector(".calc_num").addEventListener("click", function() {
//    console.log(addA);
    console.log(input);
    document.querySelector(".life_path_number").innerHTML = "Life Path " + input.month;
});



//console.log(input);

//var controller = (function(UIController, partA) {
//   
//   
////    document.querySelector('.calc_num').addEventListener('click', function() {
////    
////   document.querySelector(".life_path_number").innerHTML = "calculated";
////})();
//    
//
//    
//});

//$(".calc_num").click(function() {
//    document.querySelector(".life_path_number").innerHTML = "calculated";
//});