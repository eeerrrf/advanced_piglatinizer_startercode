// quick fix for Cloud9 warning:
/* global $ */

// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an "ay", or if a word
// begins with a vowel you just add "yay" to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkway.

$(document).ready(function() {

    $("button").click(function(){
    
    if(text==="land"){
        alert("secret");
        $("div").html("Goodness grassious, how did you find this secret,");
    }
    
    else if(text==="park"){
        alert("secret");
        $("div").html("Man, I just love pignics, I can't pigture how this could get any better.");
    }
    
    function pig(word){
        var output;
        
    if(text.charAt(0)==="a"
    ||text.charAt(0)==="e"
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
        output = text+"yay";
        return output;
    }

    else if (
    text.charAt(0)==="b"
    ||text.charAt(0)==="c"
    ||text.charAt(0)==="d"
    ||text.charAt(0)==="f"
    ||text.charAt(0)==="g"
    ||text.charAt(0)==="h"
    ||text.charAt(0)==="i"
    ||text.charAt(0)==="j"
    ||text.charAt(0)==="k"
    ||text.charAt(0)==="l"
    ||text.charAt(0)==="m"
    ||text.charAt(0)==="n"
    ||text.charAt(0)==="p"
    ||text.charAt(0)==="q"
    ||text.charAt(0)==="r"
    ||text.charAt(0)==="s"
    ||text.charAt(0)==="t"
    ||text.charAt(0)==="v"
    ||text.charAt(0)==="w"
    ||text.charAt(0)==="x"
    ||text.charAt(0)==="z"
    ||text.charAt(0)==="B"
    ||text.charAt(0)==="C"
    ||text.charAt(0)==="D"
    ||text.charAt(0)==="F"
    ||text.charAt(0)==="G"
    ||text.charAt(0)==="H"
    ||text.charAt(0)==="I"
    ||text.charAt(0)==="J"
    ||text.charAt(0)==="K"
    ||text.charAt(0)==="L"
    ||text.charAt(0)==="M"
    ||text.charAt(0)==="N"
    ||text.charAt(0)==="P"
    ||text.charAt(0)==="Q"
    ||text.charAt(0)==="R"
    ||text.charAt(0)==="S"
    ||text.charAt(0)==="T"
    ||text.charAt(0)==="V"
    ||text.charAt(0)==="W"
    ||text.charAt(0)==="X"
    ||text.charAt(0)==="Z"
    ){ 
        var othertext = text.substring(1,400);
        output = othertext+text.charAt(0)+"ay";
        return output;
    }
    
    else{
        $("div").html("invalid text, please try again.");
    }
    
    }
    var text = $("input").val(); 
var testResult4 = pig(text);
$("div").html(testResult4);
    
});

$("h1").click(function(){
    
    alert("Oink Oink. Hey this is my land sow (name of plant stuff) I will be the only one to hog up this area.");
    
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
