// Use set Interval property to change positions of hands after every second
// Learnings 
// To move roatate an element u can use transform property 
// To move element after every fixed interval use set Interval property 
// Suppose time is h:m:s 
// then position of hour hand is (30h + m/2) degree  (ignoring rotation due to seconds)
// then position of minute hand is (6m ) degree       (ignoring rotation due to seconds)
// then position of second hand is (6s) degree          

setInterval(() => {
    let myDate = new Date();
    let hours = myDate.getHours();
    let minutes = myDate.getMinutes();
    let seconds = myDate.getSeconds();
    let hrotate = 30*hours + minutes/2 ;
    let mrotate = 6*minutes;
    let srotate = 6*seconds;
    let h = document.querySelector("#hour");
    let m = document.querySelector("#minute");
    let s = document.querySelector("#second");
    // Used to rotate an element using Javascript 
    s.style.transform = `rotate(${srotate}deg)`;
    h.style.transform = `rotate(${hrotate}deg)`;
    m.style.transform = `rotate(${mrotate}deg)`;
    // Very difficult to find this one on net; 😢😢😢😢
}, 1000);