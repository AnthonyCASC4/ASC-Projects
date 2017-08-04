var userFirstName;


$.get("https://randomuser.me/api/" , function( data) {
    
  $("body").append("<h1>My name is: " + userFirstName + "</h1>");
});