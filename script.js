const chat = document.getElementById("chat")

async function sendMessage(){

const input = document.getElementById("message")
const text = input.value

chat.innerHTML += `<div class="message user">You: ${text}</div>`

input.value=""

const response = await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer YOUR_API_KEY"
},

body:JSON.stringify({
model:"gpt-4o-mini",
messages:[
{
role:"system",
content:"You are Ayman, an AI automation agent that helps with DevOps and automation."
},
{
role:"user",
content:text
}
]
})

})

const data = await response.json()

const reply = data.choices[0].message.content

chat.innerHTML += `<div class="message ai">Ayman: ${reply}</div>`

chat.scrollTop = chat.scrollHeight
}