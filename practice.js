//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer: the "this" keyword lets you varry the context of whatever "this" is applied to. Example: if you need to reference an key in an object then a this can access that.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer: 1: Am I comanded by an explicit comand, 2: Am I commanded by an Implicit or inferred comand(left of the "."), 3: If no, reference the window. 4: If new is called on the function in which I live.

  // 3) What is the difference between call and apply?

      //Answer: Call: makes the first arguement be directed at the "this" and you enter the other args as normal. Apply: makes the first arguement be directed at the "this" also, but the remaining peramiters are dictated by an array you pass in as an arguement.

  // 4) What does .bind do?

      //Answer Bind: creates a new function under the veriable that bind is called where the arguement is always the current arguement.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: "AwesomeLordOfAwesomeness!!!!!2",
      email: "Awesome@awesome.com",
      getUsername: function(){ return this.username;}
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
  function Car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.move = 0
    this.moveCar = function(){
      this.move += 10;
      return this.move;
    }
  }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
  getYear.call(prius);
  getYear.call(mustang);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getUsername function return?
//Note(no tests)
  //Answer Here: Undefined, until fixed, at which point it will return the username of the object called on.

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here: the arguement you invoke it as.

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
