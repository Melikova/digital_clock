function setTime() {
    d = new Date();
    let seconds = d.getSeconds().toString();
    seconds = (seconds.length == 1)? "0" + seconds : seconds;

    let minutes = d.getMinutes().toString();
    minutes = (minutes.length == 1)? "0" + minutes : minutes;
    
    let hour = d.getHours();
    hour = (hour.length == 1)? "0" + hour : hour;

    $('#time').html(hour + ':' + minutes + ':' +seconds);
}

setInterval(setTime, 1000);