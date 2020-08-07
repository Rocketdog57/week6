// Set the date we're counting down to
var countDownDate = new Date("Aug 6, 2020").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="birthday"
  document.getElementById("birthday").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
}, 1000);
    

let promise = new Promise(function (resolve, reject) {
setTimeout(() => resolve("resolved!"), 5000);
});
  
// resolve runs the first function in .then
promise.then(
  (resolved) => console.log(resolved), // shows "done!" after 1 second
  (error) => alert(error) // doesn't run
);