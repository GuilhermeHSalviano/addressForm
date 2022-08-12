<template>
<div class="body--container">
	<h1 class="display-4 text-center">Cadastro de endereço</h1>
	<form action="" class="form--container flex-column">
	<div class="form-floating">
		<input type="number" placeholder="Digte aqui seu CEP" class="form-control" id="cep" v-model="cep">
		<label for="cep">CEP:</label>
	</div>
	<button class="btn btn-primary" @click.prevent="searchFor_CEP" id="search-button">Pesquisar CEP</button>
	<div class="form-floating">
		<input type="text" placeholder="Rua/Logradouro" class="form-control" id="street" v-model="street" disabled>
		<label for="street">Rua/Logradouro:</label>
	</div>
	<div class="form-floating">
		<input type="text" placeholder="Digte aqui o número da residência" class="form-control" id="number">
		<label for="number">Número:</label>
	</div>
	<div class="form-floating">
		<input type="text" placeholder="Digite aqui o complemento" class="form-control" id="complement">
		<label for="complement">Complemento:</label>
	</div>
	<div class="form-floating">
		<input type="text" placeholder="Bairro" class="form-control" id="neighborhood" v-model="neighborhood" disabled>
		<label for="neighborhood">Bairro:</label>
	</div>
	<div class="form-floating">
		<input type="text" placeholder="Cidade" class="form-control" id="city" v-model="city" disabled>
		<label for="city">Cidade</label>
	</div>
	<div class="form-floating">
		<input type="text" placeholder="Estado" class="form-control" id="state" v-model="state" disabled>
		<label for="state">Estado:</label>
	</div>
	<button class="btn btn-primary" id="search-button" @click.prevent="sendCompleteAddress">Enviar</button>
	</form>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
	data(){
		return{
			cep: Number,
			number: '',
			complement: '',
			street: '',
			neighborhood: '',
			city: '',
			state: ''
		}
	},
	methods:{
		searchFor_CEP(): void {
			fetch(`https://ws.apicep.com/cep/${this.cep}.json`)
			.then(response => response.json())
			.then(address => {
				if(address.status == 200){
					this.street = address.address
					this.neighborhood = address.district
					this.city = address.city
					this.state = address.state
				} else{alert(address.message)}
				
			})
			.catch(error => console.log('A requisição falhou. Erro: ' + error))
		},
		sendCompleteAddress(): void{
			let address = [this.street, this.number, this.street, this.neighborhood, this.state]
			let isAddressFormIncomplete = address.some((element) => element.length == 0)
			isAddressFormIncomplete == true? alert('O endereço não está completo!') : alert("Endereço cadastrado!")
			
		}
	}
})
</script>

<style lang="scss">
.body--container{
	align-items: center;
	display: flex;
	flex-direction: column;

	.form--container{
		display: flex;
		margin: 0;
		width: 80vw;

		#search-button{
			width: 15rem;
		}

	.form-floating{
		margin: 2rem 0 2rem 0;
		width: 100%;

		.form-control{
			width: 50%;
		}
	}
	}
}

 
</style>
