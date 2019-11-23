module App

open Browser.Dom


let plus = document.getElementById "plus"
let minus = document.getElementById "minus"
let textcount = document.getElementById "textcount"



let mutable count = 0

let updateTextCount () =
    textcount.innerHTML <- sprintf "%d" count 

updateTextCount ()

plus.addEventListener("click", fun _ -> count <- count + 1; updateTextCount())
minus.addEventListener("click", fun _ -> count <- count - 1; updateTextCount())

let a = 14
let b = 30
let c = a + b
printfn "here's a number %i" c

printfn "Hello from Fable"