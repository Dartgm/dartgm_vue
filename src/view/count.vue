<template>
  <section class="app-container">
    <h1>计数器</h1>
    {{count}}<br />
    <button @click="increment">增加</button>
    <button @click="asyncIncrement">异步添加</button>
  </section>
</template>
<script>
import {defineComponent,computed} from "vue";
import {useStore} from 'vuex'
export default defineComponent({
  setup(props,context){
    const store=useStore()
    const count=computed(()=>store.state.count.count)
    const increment=()=>{
      store.commit('count/increment')
    }
    const asyncIncrement=()=>{
      store.dispatch('count/increment')
    }
    return {
      count,
      increment,
      asyncIncrement
    }
  }
})
</script>