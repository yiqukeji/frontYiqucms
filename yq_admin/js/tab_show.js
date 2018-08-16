$(function() {
	//加载模块
	layui.use(['form', 'element', 'laypage','upload'],
		function() {
			layer = layui.layer;
			element = layui.element;
			var laypage = layui.laypage;
			var upload = layui.upload;
			//执行一个laypage实例,分页模块
			laypage.render({
				elem: 'page', //注意，这里的 page 是 ID，不用加 # 号
				count: 50 //数据总数，从服务端得到
			});
		});
	$(".test").click(function() {
		layer.confirm('确认删除？', {
			btn: ['确定']
		})
	});

	$(".test1").click(function() {
		layer.confirm('确认加入黑名单？', {
			btn: ['确定'],
			skin: 'sure'
		})
	})
	$(document).on('click', '.sure .layui-layer-btn0', function() {
		//确认加入黑名单点击事件
		layer.msg("已加入黑名单");
	})

	$(".rizhi").click(function() {
		layer.confirm('确认删除？', {
			btn: ['确定'],
			skin: 'sure_rizhi'
		})
	})
	$(document).on('click', '.sure_rizhi .layui-layer-btn0', function() {
		//已删除
		layer.msg("已删除");
	})
})

//弹出层组件
function x_admin_show(title,content,w,h){
    if (title == null || title == '') {
        title=false;
    };
    if (w == null || w == '') {
        w = 460;
    };
    if (h == null || h == '') {
        h= 300;
    };
    layer.open({
        area: [w+'px', h +'px'],
        fix: false, //不固定
//      maxmin: true,//设置窗口是否可以最小化
        shadeClose: true,
        shade:0.4,
        title: title,
        btn:['不确定'],
        skin:'sure_delete',
        content: content
    });
}

$(document).on('click','.sure_delete .layui-layer-btn0',function(){
	//ajax
	layer.msg("删除成功！");
})
