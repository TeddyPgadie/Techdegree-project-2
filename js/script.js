/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

var student = document.getElementsByClassName("student-item cf");
var pageNumber = student % 10;
//divide the amount of student by 10
//and use the remainder as the amount of pages

const showPage = (list, page) => {
  const numOfStudents = 10; //Number of students per page.
  //Define start and ending index variables;
  const startIndx = page * numOfStudents - numOfStudents;
  const endIndx = page * numOfStudents;

  for (let i = 0; i < list.length; i++) {
    if (list[i] >= startIndx && list[i] <= endIndx) {
      //that should be shown on the page
      student[i].style.display = "block";
    } else {
      //this hides the ones that shouldn't be showing on that page.
      student[i].style.dislpay = "none";
    }
  }
  console.log(list); //print list of li items.
  console.log(page); // page is undefined ????
  return showPage;
};
showPage(student, pageNumber);
//Passing the values in student into the parameter list.

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

// Remember to delete the comments that came with this file, and replace them with your own code comments.
