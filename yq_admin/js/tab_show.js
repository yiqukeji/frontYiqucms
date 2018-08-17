$(function() {
	//加载需要使用的模块
	layui.use(['form', 'element', 'laypage', 'upload'],
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

	//复选框点击事件(全选)
	var che = document.getElementsByName("checked[]");
	var che_all = document.getElementById("che_all");
	$(document).on('click', '#che_all', function() {
		for(var i = 0; i < che.length; i++) {
			che[i].checked = che_all.checked;
		}
	})
})

//删除信息弹窗
function yq_delete(title, content, skin, w, h, id) {
	if(title == "" || title == null) {
		title = '删除信息！';
	}
	if(content == "" || content == null) {
		content = '确认删除吗？';
	}
	if(skin == "" || skin == null) {
		skin = 'sure';
	}
	if(w == null || w == '') {
		w = 260;
	};
	if(h == null || h == '') {
		h = 160;
	};
	layer.open({
		area: [w + 'px', h + 'px'], //w,h表示窗体的宽高
		btn: ['确定'], //弹窗的按钮
		title: title, //窗口的标题
		skin,
		skin, //给弹窗添加类型，可以用作点击事件
		content: content //弹窗的内容
	})
}

//弹出层组件
function x_admin_show(title, content, w, h) {
	if(title == null || title == '') {
		title = false;
	};
	if(w == null || w == '') {
		w = 460;
	};
	if(h == null || h == '') {
		h = 300;
	};
	layer.open({
		area: [w + 'px', h + 'px'],
		fix: false, //不固定
		//      maxmin: true,//设置窗口是否可以最小化
		shadeClose: true,
		shade: 0.4,
		title: title,
		btn: ['确定'],
		skin: 'sure_delete',
		content: content
	});
}

//新增按钮组
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

//修改按钮组名称
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

//修改角色信息
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

var tips;
function data() {
	tips = layer.open({
		type: 1,
		title: 'EXCEL导入至数据库',
		skin: 'layui-layer-molv',
		area: ['360px', '200px'],
		content: $("#Excel")
	})
}
//导入文件
$(document).change(function() {
	var upload_file = $.trim($("#file").val()); //获取上传文件
	$('#text').val(upload_file); //赋值给自定义input框
})