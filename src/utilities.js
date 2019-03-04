export default module = function() {

  async function getData (file, category) {
    const res = await fetch(`/${file}.json`);
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
	
	async function searchMeeings (file, target) {
		const res = await fetch(`/${file}.json`);
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
    getData, searchMeeings
  }
}()
