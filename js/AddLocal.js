var sidebar = document.getElementById("side1");
var title1 = document.getElementById("title1");
var title2 = document.getElementById("title2");
var opacityBack = document.getElementById("backgr");

function sideBar(){
	//выпадающее меню, точнее его выпадение
	opacityBack.style.display = "block";
	title1.style.right = "0px";
	title2.style.right = "0px";
	sidebar.style.right = "0px";
	opacityBack.style.opacity = "0.5";
}
function deleteLocal(){
	//закрываем меню
	title1.style.right = "-100%";
	title2.style.right = "-100%";
	sidebar.style.right = "-100%";
	opacityBack.style.display = "none";
	opacityBack.style.opacity = "0";
	//очищаем поля после закрытия выпадающего меню
	document.getElementById("AddProductName").value = "";
	document.getElementById("AddProductCalorie").value = "";

}
function Adding(){
	//записываю а базу данные
	var sa = localStorage;
	localStorage.setItem(document.getElementById("AddProductName").value, document.getElementById("AddProductCalorie").value); 
}
function send()
{
	$.post('js/calorieset.php', {name:$('#AddProductName').val(), calories:$('#AddProductCalorie').val()},
		function(data){
			setTimeout(function(){
				/*$('#form').hide(700);*/
			}, 3000);
		});
}
