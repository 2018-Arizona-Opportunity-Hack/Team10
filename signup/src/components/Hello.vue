<template>
  <main style="display: flex; flex-direction: row;">
    <div style="flex: 1;">
      <fieldset>
        <input placeholder="First Name" v-model="form.firstName" type="text">
        <label>first name</label>
        <mark></mark>
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
        <select>
          <option value="">School</option>
          <option :value="itm.val" v-for="itm in form.schoolList">
            {{ itm.val }}
          </option>
        </select>
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
      handler: (a)=>{
        console.log(a);
      }
    }
  },
  data () {
    let schoolList = [{
      val: 'Arete Preparatory Academy'
    },{
      val: 'Desert Ridge High School'
    },{
      val: 'Dobson High School'
    },{
      val: 'East Valley Academy'
    },{
      val: 'Heritage Academy'
    },{
      val: 'Mesa High School'
    },{
      val: 'Mountain View High School'
    },{
      val: 'Pinnacle High School'
    },{
      val: 'Red Mountain High School'
    },{
      val: 'Riverview High School'
    },{
      val: 'Sequoia Charter School'
    },{
      val: 'Skyline High School'
    },{
      val: 'Sun Valley High School'
    },{
      val: 'Superstition High School'
    },{
      val: 'Westwood High School'
    }];

    return {
      isFormValid: false,
      error: {
        firstName: 'first name is invalid',
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
        schoolList: schoolList,
        gradYear: 0,
        email: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

input, select {
  padding: 2px 5px;
  box-sizing: content-box;
  border: 1px solid #b7b7b7;
  color: #000000;
  float: left;
  height: 26px;
  width: 180px;
  -webkit-appearance: textfield;
  background-color: white;
  -webkit-rtl-ordering: logical;
  cursor: text;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  margin: 0em;
}

button[disabled] {
  color: grey;
  background: red;
}

button {
  border-radius: 5px;
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  background: #00EFC5;
  padding: 20px 25px 20px 25px;
  text-decoration: none;
  width: 90%;
  margin: 0 0 0 15px;
  transition: all .2s ease-in-out;
  box-shadow: 0px 0px 0px #2a2a2a;

  align-items: flex-start;
  text-align: center;
  cursor: default;

  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
  border-style: solid;
  border-width: 1px;

  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
}

</style>
