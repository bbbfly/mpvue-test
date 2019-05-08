<template>
  <div class="stars">
      <span>☆☆☆☆☆</span>
      <div class="cover" :style='style'>★★★★★</div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
      value:{
          type:[String,Number],
          default:'0'
      }
  },
  data(){
    return {
    }
  },
  created(){},
  mounted(){},
  computed:{
      style(){
          return `width:${this.value*10}%;`
      }
  },
  methods:{},
  watch:{},
}
</script>
<style lang="scss" scoped>
.stars{
    display: inline-block;
    position:relative;
    overflow:hidden;
    .cover{
        position:absolute;
        display:inline-block;
        left:0;
        top:0;
        overflow:hidden;
        width: 0;
    }
}
</style>