/*

Exercise 2
----------

- Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.

*/
// setTimeout(() => (document.body.style.backgroundColor = "red"), 1000);

//random color generator

var randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
setInterval(() => (document.body.style.backgroundColor = randomColor()), 2000);

// setInterval(() => {
//   let color = getRandomColor();
//   document.getElementById("main").style.backgroundColor = color;
// }, 5000);

// //bonus

// const getRandomColor = () => {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;

//   setTimeout(()=>{
//     document.getElementById("main").style.backgroundColor ="red";
//   },5000)

//   setInterval(()=>{
//     let colour= randomColor()
//     document.getElementById("main").style.backgroundColor =colour;
//   },5000)

//   function randomColor(){
//   return  Math.floor(Math.random() * 16777215).toString(16);}
