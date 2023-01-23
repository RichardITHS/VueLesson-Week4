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
  app4.mount('#app4')