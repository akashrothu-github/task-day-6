// Question 1:
// You are given an object book with the properties title, author, and yearPublished. Perform the following operations:
// 1.	Access the author property and print it.
// 2.	Modify the yearPublished property to 2022.
// 3.	Add a new property genre to the book object with the value “Fiction”.
// 4.	Delete the title property from the book object.

var book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  yearPublished: 1925,
}
console.log(book.author);
book.yearPublished = 2022
console.table(book)
book.fiction = "Fiction"
console.table(book)
delete (book.title)
console.table(book)

// Question 2:
// You are given an object employee with the properties name, age, position, and salary. Perform the following operations:
// 1.	Access the position property and print it.
// 2.	Modify the salary property to 50000.
// 3.	Add a new property department to the employee object with the value “HR”.
// 4.	Delete the age property from the employee object.

var employee = {
  name: "Rahul",
  age: 25,
  position: "SDE",
  salary: 40000
}
console.table(employee)
console.log(employee.position)
employee.salary = 50000
console.log(employee.salary)

employee.department = "HR"
console.table(employee)
delete (employee.age)
console.table(employee)

// question 3
// You are given an object product with the properties id, name, price, and category. Perform the following operations:
// 1.	Access the price property and print it.
// 2.	Modify the category property to “Electronics”.
// 3.	Add a new property inStock to the product object with the value true.
// 4.	Delete the id property from the product object.
var product = {
  id: 1,
  name: "laptop",
  price: 20000,
  category: "electronics"
}
console.table(product);
console.log(product.price);
product.category = "Electronics";
console.table(product);
product.inStock = true;
console.table(product);
delete (product.id)
console.table(product);


// Question 4:
// You are given an object car with the properties make, model, year, and color. Perform the following operations:
// 1.	Access the make property and print it.
// 2.	Modify the color property to “Black”.
// 3.	Add a new property engineType to the car object with the value “V6”.
// 4.	Delete the year property from the car object.

var car = {
  make: "mahendhra",
  model: "xz+",
  year: 2000,
  colour: "red"
}
console.table(car);
console.log(car.make);
car.colour = "black";
console.table(car);
car.engineType = "V6";
console.table(car);
delete (car.year)
console.table(car);

//question 5
// You are given an object student with the properties name, age, grade, and school. Perform the following operations:
// 1.	Access the school property and print it.
// 2.	Modify the grade property to 95.
// 3.	Add a new property hobbies to the student object with the value ["reading", "sports"].
// 4.	Delete the age property from the student object.



var student = {
  name: "vamshi",
  age: "15",
  grade: "9",
  school: "shivani"
}
console.table(student);
console.log(student.school);
student.grade = 95;
console.table(student);
student.hobbies = '["reading","sports"]'
console.table(student);
delete (student.age);
console.table(student);



// Question 6:
// You are given an object user with the following structure:
const user = {
  username: "john_doe",
  profile: {
    firstName: "John",
    lastName: "Doe",
    age: 28,
    address: {
      street: "456 Elm St",
      city: "Gotham",
      zip: "54321"
    }
  },
  preferences: {
    theme: "dark",
    notifications: true
  }
};
// Perform the following operations:
// 1.	Access the city property from the address object and print it.
// 2.	Modify the theme property in the preferences object to “light”.
// 3.	Add a new property phone to the profile object with the value “555-9876”.
// 4.	Delete the zip property from the address object.
console.log(user.profile.address.city);
user.preferences.theme = "light";
console.table(user.preferences);
user.profile.phone = "555-9876"
console.table(user.profile);
delete (user.profile.address.zip);
console.table(user.profile);

// Question 7:
// You are given an object company with the following structure:
const company = {
  name: "Tech Solutions",
  employees: [
    {
      name: "Alice",
      position: "Developer",
      contact: {
        email: "alice@tech.com",
        phone: "555-2345"
      }
    },
    {
      name: "Bob",
      position: "Manager",
      contact: {
        email: "bob@tech.com",
        phone: "555-6789"
      }
    }
  ],
  location: "New York"
};
// Perform the following operations:
// 1.	Access the email of the second employee (Bob) and print it.
// 2.	Modify the phone number of Alice to “555-1111”.
// 3.	Add a new property department with the value “Engineering” to the first employee (Alice).
// 4.	Delete the location property from the company object.
console.log(company.employees[1].name);
company.employees[0].contact.phone = "555-1111";
console.table(company.employees[0]);
company.employees[0].department = "Engineering";
console.table(company.employees[0]);
delete (company.location);
console.log(company);


