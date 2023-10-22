<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 300px">

      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Login</div>
      </q-card-section>

      <q-separator />
      <q-card-section>
        <q-input filled v-model="email" label="Email"/>
        <q-input filled type="password" v-model="password" label="Contraseña"/>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn unelevated color="primary" label="Ingresar"/>
      </q-card-actions>

    </q-card>
  </q-page>
</template>
<script>
export default {

  data () {
    return {
      email: String,
      password: String
    }
  }

}
</script>
