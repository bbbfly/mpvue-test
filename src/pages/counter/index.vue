<template>
  <div class="counter-warp">
    <p>Vuex counter{{ count }}</p>
    <p>mapGetters获取：{{getCount}}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <div>
      <span>评分展示：</span>
      <Rate :value='count'/>
    </div>
  </div>
</template>

<script>
// Use Vuex
import store from './store'
import {mapState,mapActions,mapGetters} from 'vuex'
import Rate from '@/components/Rate'
export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['getCount']),    
    // count () {
    //   return store.state.count
    // }
  },
  components:{
    Rate
  },
  methods: {
    ...mapActions(['updateCount']),
    increment () {
      let count = this.count
      if(count>=10) return
      count +=1
      // store.commit('increment')
      this.updateCount(count)
    },
    decrement () {
      // const {count} = this
      let count = this.count
      if(count <= 0) return
      count -=1
      // store.commit('decrement')
      this.updateCount(count)
    }
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
