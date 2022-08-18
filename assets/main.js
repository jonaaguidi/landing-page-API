// En este archivo .js ira la logica con Promesas/Async-Await para llamar a la API de Youtube.
// ASYNC - AWAIT 
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC-abpe_e7iKmPiGUV5NVNag&part=snippet%2Cid&order=date&maxResults=10'
const content = null || document.getElementById(`content`);

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3889af8963msh2b08fa1036b56bcp123a7ajsn804fba796f97',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

// Importante pasar las "options" a la peticion "fetch"
const fetchData = async (urlApi) => {
	const response = await fetch(urlApi, options);
	const data = await response.json();
	return data;
}

// Funcion asincrona anonima/arrow function que se ejecuta a si misma una vez que se carga el archivo, no es necesario ejecutarla a parte ya que gracias a "()" al final de la sentencia se ejecuta automaticamente.
(async () => {
	try {
		const videos = await fetchData(API);
		let template = `${videos.items.map(video => `		
		<div class="group relative">	
		<div
		  class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
		  <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
		</div>
		<div class="mt-4 flex justify-between">
		  <h3 class="text-m text-gray-700">
			<span aria-hidden="true" class="absolute inset-0"></span>
			<strong>${video.snippet.title}</strong>
		  </h3>
		</div>
	  </div>`).slice(0, 8).join(``)}`;
	  content.innerHTML = template;

	} catch (error) {
		console.log(error);
	}
})();









// PROMESAS 
const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3889af8963msh2b08fa1036b56bcp123a7ajsn804fba796f97',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

fetch(API, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));