// 置頂跑馬燈
function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        const t = getTimeRemaining(endtime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}

//從2021-1-3開始倒數
const deadline = '2021/1/3 23:59:59 GMT+0800';

initializeClock('timerdiv', deadline);

$(document).ready(function () {
    $('.close-news-ticker').click(function () {
        $('.news-ticker').css("display","none");
        var ticker = $(".news-ticker");
        sessionStorage.setItem("ticker",ticker);
        
    });

    var data_ticker = sessionStorage.getItem("ticker");
    
    if(data_ticker==null){
        console.log("cat");
        $(".news-ticker").css("display","block");
    }
});