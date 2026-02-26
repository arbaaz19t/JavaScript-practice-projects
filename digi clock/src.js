 UpdateFunc = function () {

            const Currenttime = new Date();
            let hours = Currenttime.getHours();
            let minute = Currenttime.getMinutes();
            let second = Currenttime.getSeconds();
        
            hours = hours < 10 ? '0' + hours:hours; 
            minute = minute < 10 ? '0' + minute:minute; 
            second = second < 10 ? '0' + second:second; 


            const Timestring = `${hours}:${minute}:${second}`;
            document.querySelector(".updateDiv").innerHTML = Timestring

        }
        UpdateFunc();
        setInterval(UpdateFunc, 1000);