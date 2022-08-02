const animated = function(sentence) { //define a function to "animate" the string
  let str = sentence.split(''); // turn the string into an array to go through each character
  const animate = setInterval(() => { // set an interval time to display each word
    process.stdout.write(str[0]); //return all on same line
    str = str.slice(1); // start on the next level over since the first is already returned
    if (!str.length) { // if statement to stop the interval once it goes through entire array
      clearInterval(animate);
    }
  }, 50); //set the delay
  console.log("\n"); //add new line before exiting
};
console.log(animated("Hello there from Lighthouse Labs")); //console log to check if working