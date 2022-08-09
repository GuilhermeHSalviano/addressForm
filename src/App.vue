<template>
  <div class="body--container">
    <h1 class="display-4 text-center">Cadastro de endereço</h1>
    <form action="" class="form--container flex-column">
      <div class="form-floating">
        <input type="number" placeholder="Digte aqui seu CEP" class="form-control" id="cep" v-model="cep">
        <label for="cep">CEP:</label>
      </div>
      <button class="btn btn-primary" @click.prevent="searchFor_CEP">Pesquisar CEP</button>
       <div class="form-floating">
        <input type="text" placeholder="Rua/Logradouro" class="form-control" id="street">
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
        <input type="text" placeholder="Bairro" class="form-control" id="neighborhood">
        <label for="neighborhood">Bairro:</label>
      </div>
      <div class="form-floating">
        <input type="text" placeholder="Cidade" class="form-control" id="city">
        <label for="city">Cidade</label>
      </div>
      <div class="form-floating">
        <input type="text" placeholder="Estado" class="form-control" id="state">
        <label for="state">Estado:</label>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
	data(){
		return{
			cep: Number,
			number: Number,
			complement: String,
			street: String,
			neighborhood: String,
			city: String,
			state: String
		}
	},
	methods:{
		searchFor_CEP() {
			fetch(`https://ws.apicep.com/cep/${this.cep}.json`)
			.then(response => response.json())
			.then(address => console.log(address))
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
		margin: 0;
		width: 80vw;

	.form-floating{
		margin: 2rem 0 2rem 0;

		#cep{
			width: 30%;
		}
		#number{
			width: 30%;
		}
	}
	}
}

 
</style>
