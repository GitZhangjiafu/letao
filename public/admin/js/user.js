$(function () {
    render();
    // 发送ajax
    function render(page, pagesize) {
        $.ajax({
            type: 'get',
            url: '/user/queryUser',
            data: {
                page: page || 1,
                pageSize: pagesize || 5,
            },
            success: function (info) {
                console.log( info );
                $('tbody').html(template('usertpl', info));
                //分页
                $("#pagintor").bootstrapPaginator({
                    bootstrapMajorVersion:3,
                    currentPage:page || 1,
                    totalPages:Math.ceil(info.total/info.size),
                    onPageClicked:function(a,b,c,page){
                        render(page);
                    }
                });
            }
        })
    }

});