let defaultZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
let selectedTimeZone = defaultZone;

async function populateTimeZones() {
    const select = document.getElementById("country-select");

    try {
        const response = await fetch("timezone.json");
        const timeZones = await response.json();
        console.log(timeZones); 
        
        timeZones.forEach(zone => {
            const option = document.createElement("option");
            option.value = zone.zone;
            option.textContent = `${zone.name} ${zone.utc}`;
            select.appendChild(option);
        });
    } catch (error) {
        console.error("An error occurred while loading the timezones.", error);
    }
    
    select.value = defaultZone;
    updateTimeZone();
}

window.onload = populateTimeZones;

function updateTimeZone() {
    selectedTimeZone = document.getElementById("country-select").value || defaultZone;
    showDateTime(); 
}

function showDateTime() {
    const now = new Date();

    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: selectedTimeZone,
        hour12: false 
    };

    const formattedTime = new Intl.DateTimeFormat('en-GB', timeOptions).format(now);
    document.getElementById("clock").innerText = formattedTime;

    const dateOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        timeZone: selectedTimeZone
    };
    const formattedDate = new Intl.DateTimeFormat('en-GB', dateOptions).format(now);
    document.getElementById("date").innerText = formattedDate;
}

setInterval(showDateTime, 1000);
