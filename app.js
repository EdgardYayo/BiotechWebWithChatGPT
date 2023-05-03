let trigger = document.querySelector("#iframe-trigger")


const createIframe = () => {
    let frame = document.createElement('iframe')
    frame.setAttribute('src', 'https://www.bio.org/what-biotechnology')
    frame.style.width = "100vw";
    frame.style.height = "50vh";

    let button = document.createElement('button')
    button.innerText = "X"
    button.style.width = "40vw"
    button.style.background = "red"
    button.style.fontSize = "20px"
    button.style.padding = "10px"
    button.style.borderRadius = "5px"
    
    let div = document.createElement('div')
    div.style.display = "flex"
    div.style.flexDirection = "column"
    div.style.justifyContent = "center"
    div.style.alignItems = "center"
    button.onclick = function (){
        frame.remove()
        button.remove()
    }
    document.body.append(div)
    div.append(frame)
    div.append(button)
    
}


trigger.addEventListener("click", createIframe)