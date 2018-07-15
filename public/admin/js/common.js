
//开启进度条
// NProgress.start();
//关闭进度条
// NProgress.done();

//jquery全局事件
//ajax请求开始时触发
$(document).ajaxStart(function(){
    NProgress.start();
});
//ajax请求结束时触发
$(document).ajaxStop(function(){
    setTimeout(function(){
        NProgress.done();
    },500)
    
});


// 两级菜单隐藏事件
$('.second').prev().on('click',function(){
    $(this).next().slideToggle();
});


$('.itcion').on('click',function(){
    $('.lt_aside').toggleClass('active');
    $('body').toggleClass('active');
    $('.lt_head').toggleClass('active');
});

//模态框
$('.tionst').on('click',function(){
    $('#logant').modal('show');
});

//退出登录
$('.btn-login').on('click',function(){
    $.ajax({
        type:'get',
        url:'/employee/employeeLogout',
        success:function(info){
            if(info.success){
                location="login.html";
            } 
        }
    })
});




