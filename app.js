var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        
        var fullname = this.firstname + ' ' + this.lastname;  //this -> person object
        return fullname;
        
    }
}

var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
    
}

var logPersonName = logName.bind(person); //bind is to make a copy of person object but not execute
logPersonName('en'); //---->// logged: John doe, arguments : en undefined

 logName.call(person, 'en', 'es'); //call is to call person object and pass in parameters
 ////---->// logged: John doe, arguments : en undefined
  logName.apply(person, ['en', 'es']); // apply need to make the parameters as a list
  //---->// logged: John doe, arguments : en undefined

 (function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
      console.log('Arguments: ' + lang1 + ' ' + lang2);
      console.log('-----------');

 }).apply(person, ['es', 'en']); 

// // function borrowing
 var person2 = {
     firstname: 'Jane',
     lastname: 'Doe'
 }

 console.log(person.getFullName.apply(person2));  //- jane doe

// // function currying
 function multiply(a, b) {
     return a*b;   
 }

 var multipleByTwo = multiply.bind(this, 2);
 console.log(multipleByTwo(4));

  var multipleByThree = multiply.bind(this, 3);
 console.log(multipleByThree(4));