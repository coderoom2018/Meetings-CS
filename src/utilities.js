export async function getData(file, category) {
	let res;
	let jsonData;
	let data;
	let categoryData;
	
	switch (file) {
		case 'faqData':
			res = await fetch(`/faqData.json`);
			jsonData = await res.json();
			data = jsonData.data;
			categoryData = data.filter(data => {
				return data.category === category;
			})
			return categoryData;
		default:
			res = await fetch(`/meetingsData.json`);
			jsonData = await res.json();
			data = jsonData.data;
			return data
	}
}

export async function searchMeetings(target) {
  const res = await fetch(`/meetingsData.json`);
  const jsonData = await res.json();
  const data = jsonData.data;

  const newData = data.filter(meeting => {
    return meeting.header_title.includes(target);
  });

  return newData;
}
