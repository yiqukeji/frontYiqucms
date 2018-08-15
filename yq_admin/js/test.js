function insert_btn() {
	layer.prompt({
		title: '新增组',
		btnAlign: 'c',
		closeBtn: 0
	}, function(value, index, elem) {
		//value得到输入的值
		layer.close(index); //关闭弹出层
		layer.msg(value);
	});
}

function update_btn() {
	layer.prompt({
		title: '修改名称',
		btnAlign: 'c',
		closeBtn: 0
	}, function(value, index, elem) {
		layer.close(index);
		layer.msg(value);
	});
}

function update_btns() {
	var xitong = $(".xitong").html();
	layer.prompt({
		value: xitong,
		title: '修改名称',
		btnAlign: 'c',
		closeBtn: 0
	}, function(value, index, elem) {
		layer.close(index);
		layer.msg(value);
	});
}

function delete_btn() {
	layer.confirm('确认删除？', {
		btn: ['确定'],
		skin: 'delete'
	})
	$(document).on('click', '.delete', function() {
		layer.msg('已删除');
	})
}



/*弹出层*/
/*
    参数解释：
    title   标题
    url     请求的url
    id      需要操作的数据id
    w       弹出层宽度（缺省调默认值）
    h       弹出层高度（缺省调默认值）
*/
function y_admin_show(title,url,w,h){
    if (title == null || title == '') {
        title=false;
    };
    if (url == null || url == '') {
        url="404.html";
    };
    if (w == null || w == '') {
        w=($(window).width()*0.9);
    };
    if (h == null || h == '') {
        h=($(window).height() - 50);
    };
    layer.open({
        type: 2,
        area: [w+'px', h +'px'],
        fix: false, //不固定
//      maxmin: false,//是否可以放大缩小
        shadeClose: true,
        shade:0.4,
        title: title,
        content: url
    });
}


