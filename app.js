/* Welcome to week 4 */

const message = Vue.createApp({
    data(){
      return {
        message: "Week 4 with VUE"
      }
    }
  });
  message.mount('#message');

  /* Part 1 props, without v-bind */
  const app = Vue.createApp({})
  /* creating component */
  app.component('counter-button', {
    data(){
      return {
        counter:this.start
      }
     
    },
    methods:{
        onClick(){
          //console.log('clicked')
          this.counter = this.counter + 1

        }
    },
    props: ['start'],
    template: `
    <input :value="counter" @click="onClick" type="button">
    `
  })
  app.mount('#app')

  /* Part 2 props, with v-bind */
  const app2 = Vue.createApp({})

  app2.component('counter-button', {
    data(){
      return {
        counter: this.start
      }
    },
    methods: {
      onClick(){
        console.log('function är igång')
        this.counter = this.counter + 1
      }
    },
    props: ['start'],
    template: `
    <input :value="counter" @click="onClick" type="button">
    `

  })


  app2.mount('#app2')

  /* Part 3 props, same component but 3 different values */
  const app3 = Vue.createApp({})
  app3.component('counter-button', {
    data(){
      return{
        counter: this.start
      }
    },
    methods:{
      onClick(){
        this.counter = this.counter + 1
      }
    },
    props:['start'],
    template: `
    <input :value="counter" @click="onClick" type="button">
    `

  })
  app3.mount('#app3')

  /* Part 3 props, same component but 3 different values */
  const app4 = Vue.createApp({})
  app4.component('counter-button', {
    data(){
      return{
        counter: this.initialValue
        //not like this counter: this.initial-value
      }
    },
    methods:{
      onClick(){
        this.counter = this.counter + 1
      }
    },
    props:{
      initialValue: Number
      //propsname: type
    },
    template: `
    <input :value="counter" @click="onClick" type="button">
    `

  })
  app4.mount('#app4')

  /* Part 6 not props in component */
  const app6 = Vue.createApp({})
  app6.component('name-example', {
    data(){
      return{
        detailAreVisible: false,
        person:{
          id: 'richard',
          name: 'Richard Carlsson',
          phone: '0123456789',
          email: 'richard.carlsson@iths.se'
        }
      }
    }, 
    methods: {
        toggleDetails(){
          this.detailAreVisible = !this.detailAreVisible;
        }
    },
    template:`
       <div class="center">
       <li>
    <h2>{{ person.name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ person.phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ person.email }}
      </li>
    </ul>
  </li>
    </div>
      `
  })
  app6.mount('#app6')

  /* Part 7 props, working with props in the component */
  const app7 = Vue.createApp({});
  app7.component('name-example', {
    props:{name:String, phoneNumber:Number, email:String},
    data(){
      return{
        detailAreVisible: false,
       
      }
    }, 
    methods: {
        toggleDetails(){
          this.detailAreVisible = !this.detailAreVisible;
        }
    },
    template:`
       <div class="center">
       <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </li>
    </div>
      `
  })
  app7.mount('#app7')

