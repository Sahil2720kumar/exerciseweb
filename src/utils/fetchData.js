export const exerciseOptions = {
  method: 'GET',
  headers: {
	'X-RapidAPI-Key': '3ea1fb9747mshdd0fd152f1ce8f3p1879ddjsnb087da8d2f47',
	 'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  }
};



export const youtubeOptions = {
  method: 'GET',
  headers: {
	'X-RapidAPI-Key': '3ea1fb9747mshdd0fd152f1ce8f3p1879ddjsnb087da8d2f47',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
	try{
		const res = await fetch(url, options);
		const data = await res.json();
		return data;
	}catch(error){
		alert("failed to fetch plz refresh this page")
	}	
};

