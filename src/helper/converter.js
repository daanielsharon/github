export const normalizeDate = (date) => {
	const oldDate = new Date(date);
	let month = '' + (oldDate.getMonth() + 1);
	let day = '' + oldDate.getDate();
	let year = oldDate.getFullYear();

	switch (month) {
		case month.length < 2:
			month = '0' + month;
			break;
		default: // eslint-disable-next-line
			month = month;
	}

	switch (day) {
		case day.length < 2:
			day = '0' + day;
			break;
		default: // eslint-disable-next-line
			day = day;
	}

	return [year, month, day].join('-');
};
