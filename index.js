// You are building a feature rollout system for a startup where a FeatureToggle constructor function has properties: 
// featureName (string), isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"), 
// and you must use a prototype method canAccess(userRole) to return true or false, a method toggleFeature(flag) 
// to enable or disable the feature, and simulate access attempts using if-else and switch statements for different roles.

function FeatureToggle(featureName,isEnabled,userGroupAccess){
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess
}



FeatureToggle.prototype.canAccess = function(userRole){
if (userRole == "betaTesters" && userRole == "admins"){
    return this.isEnabled[1];
     
}
else 
{
    return this.isEnabled[2]
}
}

FeatureToggle.prototype.toggleFeature = function (flag) {
if (this.userGroupAccess !== "betaTesters" && this.userGroupAccess !== "admins"){
    console.log("You cannot access");
    
}
else 
{
    console.log("Access granted");
    
}

}


const featuretoggle = new FeatureToggle("Login",[true, false],["betaTesters","admins"]);

console.log(featuretoggle.canAccess("admins"));


// In a freelancer time-tracking platform, create a TimeLog constructor function with properties: freelancerName (string), 
// projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked), then add prototype 
// methods to calculate total earnings, filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.

function TimeLog (freelancerName,projectDetails,logs){

    this.freelancerName = freelancerName;
    this.projectDetails = projectDetails;
    this.logs = logs
}


TimeLog.prototype.totalEarnings = function(){

let earnings = Object.values(this.logs);
    earnings.forEach(log => {
let total = log[hoursWorked]
return  total
} )
    

}





// TimeLog.prototype.filter = function(){
//     const startDate = new Date('02/02/2025');
// const endDate = new Date('09/12/2025');

// const filteredData = this.logs.filter(item => {
//   const itemDate = new Date(item.date);
//   return itemDate >= startDate && itemDate <= endDate;
// }
// );


// }

TimeLog.prototype.workHours = function(){
if(this.hoursWorked>40){
    console.log("over worked");
    
}
else{
    console.log("Within working hours");
    
}
}



const log = new TimeLog("Martin",{name:"Jane",hourlyRate:20},[{date:"02/02/2025", hoursWorked:5},{date:"03/11/2025", hoursWorked:5},{date:"09/12/2025", hoursWorked:6}])

console.log(log.totalEarnings());
// console.log(log.filter());
// console.log(log.workHours());



// You are developing a startup’s order management system where an Order constructor function should contain customer (object with name and email), 
// items (array of objects with productName, quantity, and unitPrice), and status (string), then implement prototype methods to compute total cost, 
// update order status based on payment, and categorize order urgency using switch and conditional statements.

function Order (customer,items,status){
    this.customer = customer;
    this.items = items;
    this.status = status
}


Order.prototype.totalCost = function(){

let cost = this.items.quantity * this.items.unitPrice
return cost
};

Order.prototype.updateStatus = function(){

}


const order = new Order({name : "Hellen",email:"hellenwandia@gmail.com"},[{productName:"New balance",quantity:3,unitPrice:3500},{productName:"Dc Marten",quantity:2,unitPrice:6500}],"Not paid")

console.log(order.totalCost());







// In a startup’s employee review tool, design an Employee class with properties: id (number), name (string), performanceMetrics (object with keys 
// like communication, efficiency, and reliability), and feedback (array of strings), then use prototypes to calculate an average score, classify 
// performance level using control flow, and add new feedback based on conditions.


function Employee (id,name,performanceMetrics,feedback){
    this.id = id;
    this.name = name;
    this.performanceMetrics = performanceMetrics;
    this.feedback = feedback
}



Employee.prototype.averageScore = function(){
let sum = (this.performanceMetrics.communication + this.performanceMetrics.efficiency + this.performanceMetrics.reliability)
let len = Object.keys(this.performanceMetrics).length
return sum/len
}

Employee.prototype.performanceLevel = function(){
        
            if(this.averageScore >=90){
                return "Highest performance"
            }
            else if(this.averageScore >= 60 && this.averageScore <90){
                return "Medium performance"
            }
            else
                return "Low performance"

    }

Employee.prototype.newFeedback = function(feedback){

}

const employee = new Employee(23456,"Ken",{communication:50,efficiency:30,reliability:70},["Very helpful","Easy to use","Very nice"])

// console.log(employee.averageScore());
// console.log(employee.performanceLevel());



// Build a simple e-learning system where a Course class has properties: title (string), instructor (object with name and expertise), and students 
// (array of objects with name and completionStatus), then add prototype methods to return names of students who completed the course, count enrolled 
// students by expertise area, and use control flow to output different messages for instructors with more or less than 5 students.


class Course {
constructor(title, instructor,students){
    this.title = title;
    this.instructor =instructor;
    this.students = students
}



completed (){

const complete = this.students.filter(student => student.completionStatus === "Complete");
return complete

}};




const course = new Course("Java Script", {name:"Hunter",expertise:"technical skills"},[{name:"Geremy",completionStatus:"Complete"},{name:"Abby",completionStatus:"Complete"},{name:"Hellen",completionStatus:"Not complete"}])

// console.log(course.completed());
