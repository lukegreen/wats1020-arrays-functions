// This is the file where you will write the Truncate Words function and related code.

// TODO: Create a Function called truncateWords() that accepts two arguments: 
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)

// TODO: Within the truncateWords() Function, complete the following steps:
// 1. Use the split() function to split the String into an Array
// 2. Use the length attribute to find the number of words in the Array
// 3. Determine how many words should be removed from the String
// 4. Remove those words from the Array
// 5. Add an additional String item to the Array to put an ellipses in: "..."
// 6. Use the join() function to convert the Array back into a String
// 7. Return the truncated String from the Function

var truncateWords = function(longText, numWords) {
    //Split up the text and store it in an array
    var resultArray = longText.split(" ");
    //Shorten the array, starting at index 0 and ending at index 'numWords'.  Stored result in new var
    var truncArray = resultArray.splice(0,numWords);
    //Add elipsis to the array
    truncArray.push("...");
    //Join the array back into a text block, store in a new var
    var truncText = truncArray.join(" ");
    //Log it to console
    console.log(truncText);  
}

// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);
