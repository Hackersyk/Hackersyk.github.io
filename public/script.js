async function build(){

const prompt = document.getElementById("prompt").value

const res = await fetch("/build",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({prompt})
})

const data = await res.json()

document.getElementById("result").innerHTML =
`Website live: <a href="${data.url}" target="_blank">${data.url}</a>`
}