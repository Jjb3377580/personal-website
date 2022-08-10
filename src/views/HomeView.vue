<template>
  home
</template>

<script>
import axios from 'axios'
import {request} from '../router/request.js'
// var data=axios(
//     {
//       url:"/api/tools/zimi",
//       type:"get",
//       data:{
//         "question":"***"
//       },
//       contentType:"text",
//       processData: false,
//       dataType:"text"
//     }
// ).then(function (response){
  // console.log(response);})
export default {
    data(){
      return {
        conut:1
      }
    },
  created(){
       request({
        url:'/'
      }).then(res=>{
        console.log(res);
      },err=>{
        console.log(err);
      })
  }
}
</script>
