// grabbing
var strV = document.getElementById("stringViewer")
var lenV = document.getElementById("lenthViewer")

// starting
function changer(){
var taker = prompt(`write here ...`)
strV.innerHTML = taker
var length = lenV.innerHTML = taker.length

if (taker == "") {
	strV.innerHTML = `click "+"`
}

console.log(`
Time: ${Date()}
string: ${taker}
Length: ${length}
`)
}


function upper(){
var was = strV.innerHTML
var now = was.toUpperCase()
strV.innerHTML = now
}


function lower(){
var was = strV.innerHTML
var now = was.toLowerCase()
strV.innerHTML = now
}