export async request (cepNumber){
    let response = await fetch(`viacep.com.br/ws/${cepNumber}/json/`)
			let adress = await response.json()
			console.log(adress)
}