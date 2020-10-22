
var UIController = (function() {
    
    var DOMStrings = {
        inputDay: "day",
        inputMonth: "month",
        inputYear: "year",
    } 
    
    return {
        getInput: function() {
            return {
            day: document.getElementById(DOMStrings.inputDay),
            month: document.getElementById(DOMStrings.inputMonth),
            year: document.getElementById(DOMStrings.inputYear),
            }  
        }
    }
    
})();

var input = UIController.getInput();


//var birthDate = input.day.options[input.day.selectedIndex].value;
//var birthMonth = input.month.options[input.month.selectedIndex].value;
//var birthYear= input.year.options[input.year.selectedIndex].value;

var visitor = (function() {
    
    return {
        birthDate: input.day.options[input.day.selectedIndex].value,
        birthMonth: input.month.options[input.month.selectedIndex].value,
        birthYear: input.year.options[input.year.selectedIndex].value
    };
    visitor();
});



document.querySelector(".calc_num").addEventListener("click", function() {
    
    console.log(visitor());
    document.querySelector(".life_path_number").innerHTML = "Life Path ";
});


function calculatorOne(day, month, year){
    
    var c = parseInt(day.slice(0,1));
    var d = parseInt(day.slice(1,2));
    
    var a = parseInt(month.slice(0,1));
    var b = parseInt(month.slice(1,2));

    var p = parseInt(year.slice(0,1));
    var f = parseInt(year.slice(1,2));
    var g = parseInt(year.slice(2,3));
    var h = parseInt(year.slice(3,4));
    
    var addMonth = a + b;
    var addDate = c + d;
    var addYear = p + f + g + h;

    var addPath = addMonth + addDate + addYear;
    
    return addPath
};




