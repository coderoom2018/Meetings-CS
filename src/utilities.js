export default module = function() {

  async function searchData (url, category) {
    const res = await fetch(`/${url}.json`);
    let data = await res.json();

    if (category !== undefined) {
			let newData = [];

			for (var i = 0; i < data.data.length; i++) {
				if (data.data[i].category === category) {
					await newData.push(data.data[i])
				}
			}
			data = await newData

			return data
		}
		
    return data.data;
	}
	
	async function searchMeeings (url, target) {
		const res = await fetch(`/${url}.json`);
		let data = await res.json();
		let newData = [];

		for (var i = 0; i < data.data.length; i++) {
			if (data.data[i].header_title.includes(target)) {
				newData.push(data.data[i])
			}
		}
		data = await newData;

		return data
	}

  return {
    searchData, searchMeeings
  }
}()
