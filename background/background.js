chrome.alarms.create("simpleTimer", {
    periodInMinutes: 1/60
});

chrome.alarms.onAlarm.addListener((alarm)=>{
    if(alarm.name==="simpleTimer"){
        chrome.storage.local.get(["timer", "isRunning"], (res)=>{
            if(res.isRunning){
                let timer = res.timer++;
                chrome.storage.local.set({timer});
            }
        });
    }
});

chrome.storage.local.get(["timer", "isRunning"], (res)=>{
    chrome.storage.local.set({
        timer: "timer" in res ? res.timer : 0,
        isRunning: "isRunning" in res ? res.isRunning : false
    });
});