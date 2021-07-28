$(function(){
  getUserInfo()
})
function renderAvatar(user){
  console.log(user);
  const username=user.nickname||user.username
  $('#welcome').html(`欢迎${username}`)
  if(user.user_pic){
    $('.layui-nav-img').attr('src',user_pic).show()
    $('.text-avatar').hide()
  }else{
    $('.layui-nav-img').hide()
    const firstName=username[0].toUpperCase()
    $('.text-avatar').html(firstName)
  }
}
const layer=layui.layer
$('#btnLogout').on('click',function(){
  layer.confirm('确定退出登录?',{icon:3,title:'提示'},
  function(index){
    localStorage.removeItem('token')
    location.href='./login.html'
    layer.close(index)
  })
})

function getUserInfo(){
  $.ajax({
    url:'/my/userinfo',
    method:'GET',
    // headers:{
    //   Authorization:localStorage.getItem('token')||'',
    // },
    success(res){
      if(res.status!==0){
        return layer.msg(res.message)
      }renderAvatar(res.data)
    // },complete: function(res) {
    //   // console.log('执行了 complete 回调：')
    //   // console.log(res)
    //   // 在 complete 回调函数中，可以使用 res.responseJSON 拿到服务器响应回来的数据
    //   if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
    //     // 1. 强制清空 token
    //     localStorage.removeItem('token')
    //     // 2. 强制跳转到登录页面
    //     location.href = '/login.html'
    //   }
    }
  })
}