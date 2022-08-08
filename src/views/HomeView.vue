<template>
  home
</template>

<script>
export default {
    data(){
      return {
        conut:1
      }
    },
    methods:{
        didi(){
          console.log(this.conut);
        }
    },
    beforeCreate(){
    },
    created(){
      this.didi();
    },
    unmounted(){
      console.log("aaa")
    }
}
</script>
