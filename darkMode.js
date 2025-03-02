const darkBtn = document.getElementById("darkBtn");
const icon = document.getElementById("icon")
const body = document.body;
const inputText = document.getElementById("input-word");

darkBtn.addEventListener("click", () => {
    if(body.style.backgroundColor === "black"){
        //switch to light mode
        body.style.backgroundColor = "white";
        body.style.color = "black"
        inputText.style.color = "black"
        icon.classList.replace("fa-sun", "fa-moon");
    }
    else{
        //switch to dark mode
        body.style.backgroundColor = "black";
        body.style.color = "white"
        inputText.style.color = "white"
        icon.classList.replace("fa-moon", "fa-sun");
    }
    
})
