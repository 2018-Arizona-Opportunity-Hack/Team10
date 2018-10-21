<template>
  <main style="display: flex; flex-direction: row;">
    <div style="flex: 1;">
      <fieldset>
        <input placeholder="First Name" v-model="form.firstName" type="text">
        <label>first name</label>
        <mark v-show="error.firstName">{{ error.firstName }}</mark>
      </fieldset>
      <fieldset>
        <input placeholder="Last Name" v-model="form.lastName" type="text">
        <label>last name</label>
        <mark></mark>
      </fieldset>
      <fieldset>
        <input placeholder="phone number" v-model="form.phone" type="text">
        <label>phone number</label>
        <mark></mark>
      </fieldset>
      <fieldset>
        <input placeholder="email" v-model="form.email" type="email">
        <label>email</label>
        <mark></mark>
      </fieldset>
      <fieldset>
        <input placeholder="school" v-model="form.school" type="text">
        <label>school</label>
        <mark></mark>
      </fieldset>
      <fieldset>
        <input placeholder="date of birth" v-model="form.dob" type="date" max="2018-10-20">
        <label>date of birth</label>
        <mark></mark>
      </fieldset>
      <fieldset>
        <input placeholder="graduation year" v-model="form.gradYear" type="number">
        <label>graduation year</label>
        <mark></mark>
      </fieldset>
      <button disabled>submit</button>
    </div>
    <div style="flex: 1;">
      <pre>
        {{ $data }}
      </pre>
    </div>

  </main>

</template>

<script>
export default {
  name: 'hello',
  watch: {
    form: {
      deep: true,
      handler: (form)=>{
        console.log('ASDFASDF');
        if( !/[a-zA-Z]{2,100}/.test(form.firstName) ){
          this.error.firstName="invalid first name stuff";
        }
        console.log(form);
      }
    }
  },
  data () {
    return {
      isFormValid: false,
      error: {
        firstName: '',
        lastName: 'last name is invalid',
        phone: 'phone number is invalid',
        dob: 'date of birth is required',
        gradYear: 'graduation year is invalid',
        email: 'email is invalid'
      },
      form: {
        firstName: '',
        lastName: '',
        phone: '',
        dob: '',
        school:'',
        gradYear: 0,
        email: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
