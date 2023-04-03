const myLabel = document.getElementById('myLabel');
const switchBtn = document.getElementById('switchBtn');
let is24hrs = false;

switchBtn.addEventListener('click',changeTime);
function changeTime(){
   is24hrs = !is24hrs;
}

showTime();
setInterval(showTime,1000);

function showTime(){
    let date = new Date();
    myLabel.innerHTML = formatTime(date)

    function formatTime(date){
        let hrs = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();

        if(!is24hrs){
            hrs = (hrs%12) ||12;
        }

        hrs = formatZero(hrs);
        mins = formatZero(mins);
        secs = formatZero(secs);

        return `${hrs} : ${mins} : ${secs}`;

    }
    function formatZero(time){
        time = time.toString();
        return time.length <2 ? "0"+time:time;
    }
}
// date


const dateShow = document.getElementById('dateShow');
const myDate = document.getElementById('myDate');
myDate.style.display = 'none';
  let  showDate  = false;

  dateShow.addEventListener('click',toggleDate);

  function toggleDate(){
     showDate= !showDate;
    if(showDate){
        myDate.style.display = 'block';
        dateShow.innerHTML = 'Hide Date';
        updateDate();
    }
    else{
        myDate.style.display = 'none';
        dateShow.innerHTML= 'Show Date';
    }
  }
  

function updateDate(){
    let today = new Date();
    myDate.innerHTML = formatDate(today);

    function formatDate(today){
        const day = today.getDate();
        const month = today.getMonth();
        const year = today.getFullYear();

        return ` ${year} : ${month} : ${day}`;
    }
}





