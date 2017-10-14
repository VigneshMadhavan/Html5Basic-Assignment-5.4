//function to initialize objects
function initialize(){
	
	var myEmployee=new Employee("Vigneshwaran",["Flash","Html"],15000);
	document.writeln("Initial Employee Details:<br>-------------------------<br>");
	myEmployee.printdetails();
	document.writeln("-------------------------<br>");
	myEmployee.changeSalary(20000);
	document.writeln("After 5K Increament:<br>-------------------------<br>");
	myEmployee.printdetails();
	
}

function Employee(name, skills, salary) {
    this.name = name;   
    this.skills = skills;
    this.salary = salary;
	
	this.changeSalary=function (newSalary){
		this.salary=newSalary
	}
	
	this.printdetails=function (){
		console.log(this)
		for(var item in this){
			if(item=="changeSalary" || item=="printdetails"){
				
			}else{
				document.writeln("<b>"+item+"</b>::"+this[item]+"<br>")
			}
			
		}
	}
}

initialize();

