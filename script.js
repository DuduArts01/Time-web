function upload(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("img")
    var data = new Date()
    var hours = data.getHours()
    hours = 13
    msg.innerHTML = `Now, it is ${hours} hours.`
    
    if(hours >= 8 && hours < 12){
        //Good Morning
        img.src = 'morning.png'
        document.body.style.background = "#ff7f00"
    } else if(hours >= 12 && hours < 18){
        //Good Afternoon
        img.src = 'afternoon.png'
        document.body.style.background = "#f1bc7b"
    } else{
        //Good Night
        img.src = 'night.png'
        document.body.style.background = "#001f3a"
    }
}
