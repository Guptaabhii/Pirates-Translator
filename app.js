var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var txtOut = document.querySelector("#txt-output")
 
var serverURl = "https://api.funtranslations.com/translate/pirate.json"

function getTranslationURl(input){
    return serverURl + "?" + "text=" + input
}

function errorHandler(error){
    console.log("error occured", error)
    alert("somethis  wrong the server, sorry for the inconvenience ")
}
function clickHandler(){
    var inputText = txtInput.value;

fetch(getTranslationURl(inputText))
.then(response => response.json())
.then(json =>{ 
    var translatedText = json.contents.translated;
    txtOut.innerText = translatedText;
})
    .catch(errorHandler)
};
btnTranslate.addEventListener("click",clickHandler);