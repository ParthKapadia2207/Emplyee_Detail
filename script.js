// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.getElementById('add-employees-btn');


// Collect employee data
let employeesArray = [];
isAskingForEmployee = true;
 

const collectEmployees = function() {

  // TODO: Get user input to create and return an array of employee objects
    while (isAskingForEmployee) {
      // ask for first name
   const first_Name = prompt("Enter Employee First Name:");
   // ask for last name
   const last_Name = prompt("Enter Employee LastName:") ;
   // ask for salary 
   const salary = parseInt(prompt ("Enter Employee Salary:")); 
      // set an onject that setvalue in to array 
   let employee = {
    firstName: first_Name,
    lastName: last_Name,
    salary : salary
}
  // push data into employee array
   employeesArray.push(employee);
   
    isAskingForEmployee = confirm("Do you want to add more Employee?");
  };

    return employeesArray;

};


// Display the average salary
const displayAverageSalary = function(employeesArray) {
 let totsum = 0 ;
 let average_sal = 0;
// To calculate salaruy of each employeee in table an give average salary 
 for(let i = 0 ; i<employeesArray.length ; i++){
    totsum += employeesArray[i].salary;
 };
    average_sal = totsum / employeesArray.length ;
    
    
  // TODO: Calculate and display the average salary
  console.log( `Average salary of ${employeesArray.length} Employee(s) is : $${average_sal}`);
};
   
// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
    const empindex = Math.floor (Math.random() * employeesArray.length)
    const random_emp = employeesArray[empindex];
    console.log(`Congratulatios to ${random_emp.firstName} ${random_emp.lastName}  ,our random drawing winner!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {

// Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

