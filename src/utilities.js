// const searchData = async url => {
//     const res = await fetch(`/${url}.json`);
//     const data = await res.json();
//     console.log(data)

//     return data.data;
// }

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

  return {
    searchData
  }
}()
