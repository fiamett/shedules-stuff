var containerEl = $('#container')
var date = $('#currentDay')

var tasks =["","","","","","","","","","","","","","","","","","","","","","","","",""]
if (JSON.parse(window.localStorage.getItem("strung")) !== null) {
tasks = JSON.parse(window.localStorage.getItem("strung"))
}
//checks if there is already a local storage file and if there isn't goes to the default

setInterval(function(){
date.html("it its currently " + "<br></br>" + moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
done()
},1000)
//updates time reading and the current time color thing

function done(){
    for (var i=1;i<=24;i++){
        if(i < moment().format("HH")){
        $('#'+i).css("background-color","red")
        }
        $('#'+moment().format("HH")).css("background-color","green")
        }
    }
//checks current time and changes the color of the corrsponding times



for (var i=1;i<=24;i++){
    var trans;
    if (i>12){trans = i-12 +" pm"}
    else {trans = i +" am"}
    //converts 24 format to 12 hr
    containerEl.append('<li id='+i+'>'+'</li>');
    containerEl.children().last().append("<p>"+trans+"</p>");
    containerEl.children().last().append('<input type="text" id="task"></input>');
    containerEl.children().last().append('<button class=save>save</button>');
    //creates a list for every hour of the day and adds an input, button, and time indicator per list item 

    containerEl.children().last().children('input').val(tasks[(i-1)])
    //fills the list from the local storage array

}


function saveTask() {
//    var btnClicked = $(event.target);
    tasks.splice(($(this).parent().attr('id') -1),1,$(this).siblings('input').val())
    //every time the save button is clicked it takes the value of the attached textbox and saves it to the corresponding part of the array

    window.localStorage.setItem("strung", JSON.stringify(tasks));
    //turns the task string to a json then saves it to local storage

  }

containerEl.on('click', '.save', saveTask);
//button listener
done();
// sets the colors early
