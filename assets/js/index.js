$(function(){
  getUserInfo()
})
function getUserInfo(){
  $.ajax({
    url:'/my/userinfo',
    method:'GET',
    headers:{
      Authorization:localStorage.getItem('token')||'',
    },
    success(res){
      console.log(res);
    }
  })
}