$(function() {
	$(".btn").click(function() {
		if($("#name").val() == "" || $("#content").val() == "" || $("#tel").val() == "" || $("#Email").val() == "") {
			alert("请填写完整的信息！");
			return false;
		}else{
			var user = $.trim($("#tel").val());
			var reg = /^1[34578]\d{9}$/;//电话号码验证
			var email = $.trim($("#Email").val());
			var regs = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;//邮箱格式验证
			if(!reg.test(user)){
				alert("手机号码不正确");
				return false;
			}else if(!regs.test(email)){
				alert("邮箱格式不正确");
			}else{
				//ajax
			}
		}
	})
})