<template>
    <form>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Login</h1>
                <hr>
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input
                            type="text"
                            id="email"
                            class="form-control"
                            v-model="userData.email"
                    >
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input
                            type="password"
                            id="password"
                            class="form-control"
                            v-model="userData.password"
                    >
                </div>
                <div class="form-group text-right">
                    <button class="btn btn-primary" @click.prevent="sendData">Login</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Signin',
  data () {
    return {
      userData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    sendData () {
      console.log(this.userData)

      axios.post('/login', null, {
        params: this.userData
      })
        .then(response => {
          console.log(response)
        })
        .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>

</style>
