// quick fix for Cloud9 warning:
/* global $ */

// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an "ay", or if a word
// begins with a vowel you just add "yay" to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkway.

$(document).ready(function() {

    $("button").click(function(){
        
    var text = $("input").val();  
    
    if(text.charAt(0)==="a"||text.charAt(0)==="e"
    ||text.charAt(0)==="i"
    ||text.charAt(0)==="o"
    ||text.charAt(0)==="u"
    ||text.charAt(0)==="y"
    ||text.charAt(0)==="A"
    ||text.charAt(0)==="E"
    ||text.charAt(0)==="I"
    ||text.charAt(0)==="O"
    ||text.charAt(0)==="U"
    ||text.charAt(0)==="Y"){
        $("div").html(text+"yay");
    }

    else{ 
        var othertext = text.substring(1,40);
       $("div").html(othertext+text.charAt(0)+"ay");
    }
});

$("h1").click(function(){
    alert("Oink Oink");
    var hog = 1;
    
    if (hog===2){
    alert("Hey this is my land sow (name of plant stuff) I will be the only I get to hog up this area.")
    
}
    
});











    // This function should return true if the input word starts with a vowel,
    // otherwise it should return false.
    function wordStartsWithVowel(word) {

    }

    // Appends "yay" to the end of the word and returns the word.
    function appendYayToWord(word) {

    }

    // Moves the first consonant to the end of the word, appends "ay" to the end of the word,
    // and returns the word.
    function convertWordWithConsonant(word) {

    }

    // If the word starts with a vowel, return the result of appendYayToWord.
    // Otherwise, return the result of convertWordWithConsonant.
    function convertWordToPigLatin(word) {

    }

    // Create a click handler that takes is triggered when the user clicks the translate button.
        // Gets a word from the input box
        // Transforms the word to pig latin
        // Displays the result on the screen in the output element
});
