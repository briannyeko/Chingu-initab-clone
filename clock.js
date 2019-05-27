//Time and Date

//Time
function checkMinute(m) {
	if (m < 10) {
		m = "0" + m;
	}
	return m;
};

function convertHour(h) {
	if (h >= 13 && h < 24) {
		h = h - 12;
	} else if (h === 0) {
		h = 12;
	}
	return h;
};

function checkAmPm(h) {
	if (h <= 12) {
		amPm = "AM";
	} else if(h > 12) {
		amPm = "PM";
	}
	return amPm;
};
//Date and Month 
function checkMonth(month) {
	if (month === 1) {
		month = "January";
	} else if (month === 2) {
		month = "February";
	} else if (month === 3) {
		month = "March";
	} else if (month === 4) {
		month = "April";
	} else if (month === 5) {
		month = "May";
	} else if (month === 6) {
		month = "June";
	} else if (month === 7) {
		month = "July";
	} else if (month === 8) {
		month = "August";
	} else if (month === 9) {
		month = "September";
	} else if (month === 10) {
		month = "October";
	} else if (month === 11) {
		month = "November";
	} else if (month === 12) {
		month = "December";
	}
	return month;
};


function startTime() {
	var today = new Date();
	var month = today.getMonth() + 1;
	var date = today.getDate();
	var year = today.getFullYear();
	var h = today.getHours();
	var m = today.getMinutes();
	var amPm = checkAmPm(h);
	m = checkMinute(m);
	h = convertHour(h);
	month = checkMonth(month);
	document.querySelector('.clock').innerHTML = `
	<div class="time">
		<span class="hour-minute">${h}:${m}</span><span class="amPm">${amPm}</span>
	</div>
	<div class="date">
		<span>${month} ${date}, ${year}</span>
	</div>
	`;
	t = setTimeout(function() {
		startTime()
	}, 60000);
}
startTime();


var doNotShow = document.querySelector('.NotDisplay');
doNotShow.addEventListener('click', function(){
	doNotShow.style.display = 'none';
});
