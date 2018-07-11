
$(function () {
    //表单校验插件
    $("form").bootstrapValidator({
        fields: {
            //校验用户名，对应name表单的name属性
            username: {
                validators: {
                    notEmpty: {
                        'message': '用户名不能为空'
                    },
                    stringLength: {
                        min: 3,
                        max: 6,
                        message: "用户名长度必须在3到6之间"
                    },
                    callback:{
                        message:"用户名不存在"
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        'message': '密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: "密码长度必须在6到12之间"
                    },
                    callback:{
                        message:"密码错误"
                    }
                }
            },
        },
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        }
    });
    //表单校验成功的时候发动的事件
    $("form").on('success.form.bv', function (e) {
        e.preventDefault();//阻止浏览器默认行为
        //使用ajax提交逻辑
        $.ajax({
            type:"post",
            url:"/employee/employeeLogin",
            data:$("form").serialize(),
            success:function(info){
                if(info.error===1000){
                    $('form').data('bootstrapValidator').updateStatus('username','INVALID','callback');
                }
                if(info.error===1001){
                    $('form').data('bootstrapValidator').updateStatus('password','INVALID','callback')   
                }
                if(info.success){
                    location.href="index.html";
                }
            }
        });

    });

    //重置表单
    $("[type='reset']").on("click",function(){
        $('form').data("bootstrapValidator").resetForm(true);
    });

    
});