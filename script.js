// let main = document.querySelector("#main")
// let form = document.querySelector("form")
// let inputs = document.querySelectorAll("input")

// form.addEventListener("submit", function(dets){
//     dets.preventDefault();

//     let card = document.createElement("div")
//     card.classList.add("card")

//     let Profile = document.createElement("div")
//     Profile.classList.add("profile")

//     let image = document.createElement("img")
//     image.setAttribute("src", inputs[0].value)

//     let h3 = document.createElement("h3")
//     h3.textContent= inputs[1].value

//     let h5 = document.createElement("h5")
//     h5.textContent= inputs[2].value

//     let p = document.createElement("p")
//     p.textContent= inputs[3].value

//     let p2 = document.createElement("p")
//     p2.textContent= inputs[4].value

//     Profile.appendChild(image)
//     card.appendChild(Profile)
//     card.appendChild(h3)
//     card.appendChild(h5)
//     card.appendChild(p)
//     card.appendChild(p2)

//     main.appendChild(card)

//        inputs.forEach( inp=>{
//         if (inp.type !== "submit"){
//             inp.value = ""
//         }
//     });
// })