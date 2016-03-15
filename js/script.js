var firstcalc         = 0;
var secondcalc        = 0;
var Thirdcalc         = 0;
var Fourcalc          = 0;
var Fivecalc          = 0;
var Sixcalc           = 0;
var Sevencalc         = 0;
var Eightcalc         = 0;
var Ninecalc          = 0;
var Tencalc           = 0;
var FirstProdCalorie  = 0;
var FirstProdWeight   = 0;
var SecondProdCalorie = 0;
var SecondProdWeight  = 0;
var ThirdProdCalorie  = 0;
var ThirdProdWeight   = 0;
var FourProdCalorie   = 0;
var FourProdWeight    = 0;
var FiveProdCalorie   = 0;
var FiveProdWeight    = 0;
var SixProdCalorie    = 0;
var SixProdWeight     = 0;
var SevenProdCalorie  = 0;
var SevenProdWeight   = 0;
var EightProdCalorie  = 0;
var EightProdWeight   = 0;
var NineProdCalorie   = 0;
var NineProdWeight    = 0;
var TenProdCalorie    = 0;
var TenProdWeight     = 0;
var sumsum            = 0;
var sumweight         = 0;
var FirstProductName  = 0;
var SecondProductName = 0;
var ThirdProductName  = 0;
var FourProductName   = 0;
var FiveProductName   = 0;
var SixProductName    = 0;
var SevenProductName  = 0;
var EightProductName  = 0;
var NineProductName   = 0;
var TenProductName    = 0;
var nowDate = new Date();
var hours = nowDate.getHours();
var minutes = nowDate.getMinutes();
var seconds = nowDate.getSeconds();
var data = nowDate.toDateString();

function storage(){

 sumsum = Number(localStorage.getItem("sumsum")).toFixed(1);
 sumweight = Number(localStorage.getItem("sumweight")).toFixed(1);
 
 FirstProdCalorie = localStorage.getItem("FirstProdCalorie");
 SecondProdCalorie = localStorage.getItem("SecondProdCalorie");
 ThirdProdCalorie = localStorage.getItem("ThirdProdCalorie");
 FourProdCalorie = localStorage.getItem("FourProdCalorie");
 FiveProdCalorie = localStorage.getItem("FiveProdCalorie");
 SixProdCalorie = localStorage.getItem("SixProdCalorie");
 SevenProdCalorie = localStorage.getItem("SevenProdCalorie");
 EightProdCalorie = localStorage.getItem("EightProdCalorie");
 NineProdCalorie = localStorage.getItem("NineProdCalorie");
 TenProdCalorie = localStorage.getItem("TenProdCalorie");
 
 FirstProdWeight = localStorage.getItem("FirstProdWeight");
 SecondProdWeight = localStorage.getItem("SecondProdWeight");
 ThirdProdWeight = localStorage.getItem("ThirdProdWeight");
 FourProdWeight = localStorage.getItem("FourProdWeight");
 FiveProdWeight = localStorage.getItem("FiveProdWeight");
 SixProdWeight = localStorage.getItem("SixProdWeight");
 SevenProdWeight = localStorage.getItem("SevenProdWeight");
 EightProdWeight = localStorage.getItem("EightProdWeight");
 NineProdWeight = localStorage.getItem("NineProdWeight");
 TenProdWeight = localStorage.getItem("TenProdWeight");

 
 FirstProductName = localStorage.getItem("FirstProductName");
 SecondProductName = localStorage.getItem("SecondProductName");
 ThirdProductName = localStorage.getItem("ThirdProductName");
 FourProductName = localStorage.getItem("FourProductName");
 FiveProductName = localStorage.getItem("FiveProductName");
 SixProductName = localStorage.getItem("SixProductName");
 SevenProductName = localStorage.getItem("SevenProductName");
 EightProductName = localStorage.getItem("EightProductName");
 NineProductName = localStorage.getItem("NineProductName");
 TenProductName = localStorage.getItem("TenProductName");
 
 firstcalc = Number(localStorage.getItem("firstcalc")).toFixed(1);
 secondcalc = Number(localStorage.getItem("secondcalc")).toFixed(1);
 Thirdcalc = Number(localStorage.getItem("Thirdcalc")).toFixed(1);
 Fourcalc = Number(localStorage.getItem("Fourcalc")).toFixed(1);
 Fivecalc = Number(localStorage.getItem("Fivecalc")).toFixed(1);
 Sixcalc = Number(localStorage.getItem("Sixcalc")).toFixed(1);
 Sevencalc = Number(localStorage.getItem("Sevencalc")).toFixed(1);
 Eightcalc = Number(localStorage.getItem("Eightcalc")).toFixed(1);
 Ninecalc = Number(localStorage.getItem("Ninecalc")).toFixed(1);
 Tencalc = Number(localStorage.getItem("Tencalc")).toFixed(1);
 
 document.getElementById('AllCalorieSum').innerHTML = sumsum + "кК";
 document.getElementById('AllWeightSum').innerHTML = sumweight + "г";
 document.getElementById('FirstCalorieSum').innerHTML = firstcalc + "кК";
 document.getElementById('SecondCalorieSum').innerHTML = secondcalc + "кК";
 document.getElementById('ThirdCalorieSum').innerHTML = Thirdcalc + "кК";
 document.getElementById('FourCalorieSum').innerHTML = Fourcalc + "кК";
 document.getElementById('FiveCalorieSum').innerHTML = Fivecalc + "кК";
 document.getElementById('SixCalorieSum').innerHTML = Sixcalc + "кК";
 document.getElementById('SevenCalorieSum').innerHTML = Sevencalc + "кК";
 document.getElementById('EightCalorieSum').innerHTML = Eightcalc + "кК";
 document.getElementById('NineCalorieSum').innerHTML = Ninecalc + "кК";
 document.getElementById('TenCalorieSum').innerHTML = Tencalc + "кК";
 
  //Вносим в value инпутов значения из хранилища
  
  document.getElementById('FirstProductCalorie').value = FirstProdCalorie;
  document.getElementById('SecondProductCalorie').value = SecondProdCalorie;
  document.getElementById('ThirdProductCalorie').value = ThirdProdCalorie;
  document.getElementById('FourProductCalorie').value = FourProdCalorie;
  document.getElementById('FiveProductCalorie').value = FiveProdCalorie;
  document.getElementById('SixProductCalorie').value = SixProdCalorie;
  document.getElementById('SevenProductCalorie').value = SevenProdCalorie;
  document.getElementById('EightProductCalorie').value = EightProdCalorie;
  document.getElementById('NineProductCalorie').value = NineProdCalorie;
  document.getElementById('TenProductCalorie').value = TenProdCalorie;
  
  document.getElementById('FirstProductWeight').value = FirstProdWeight*100;
  document.getElementById('SecondProductWeight').value = SecondProdWeight*100;
  document.getElementById('ThirdProductWeight').value = ThirdProdWeight*100;
  document.getElementById('FourProductWeight').value = FourProdWeight*100;
  document.getElementById('FiveProductWeight').value = FiveProdWeight*100;
  document.getElementById('SixProductWeight').value = SixProdWeight*100;
  document.getElementById('SevenProductWeight').value = SevenProdWeight*100;
  document.getElementById('EightProductWeight').value = EightProdWeight*100;
  document.getElementById('NineProductWeight').value = NineProdWeight*100;
  document.getElementById('TenProductWeight').value = TenProdWeight*100;
  
  document.getElementById('FirstProductName').value = FirstProductName;
  document.getElementById('SecondProductName').value = SecondProductName;
  document.getElementById('ThirdProductName').value = ThirdProductName;
  document.getElementById('FourProductName').value = FourProductName;
  document.getElementById('FiveProductName').value = FiveProductName;
  document.getElementById('SixProductName').value = SixProductName; 
  document.getElementById('SevenProductName').value = SevenProductName; 
  document.getElementById('EightProductName').value = EightProductName; 
  document.getElementById('NineProductName').value = NineProductName; 
  document.getElementById('TenProductName').value = TenProductName; 
  
  if (ThirdProdWeight > 0){
    addPost3();
  }
  if (FourProdWeight > 0){
    addPost4();
  }
  if (FiveProdWeight > 0){
    addPost5();
  }
  if (SixProdWeight > 0){
    addPost6();
  }
  if (SevenProdWeight > 0){
    addPost7();
  }
  if (EightProdWeight > 0){
    addPost8();
  }
  if (NineProdWeight > 0){
    addPost9();
  }
  if (TenProdWeight > 0){
    addPost10();
  }

}
function localstorageFirstDesc(){
  var s = localStorage;
  var FirstSelect = document.getElementById("selectDesFirst");
  var Firstlist = document.getElementsByTagName('select')[0];
  var FirstNameValue = document.getElementById("FirstProductName").value;
  var FirstNamer = document.getElementById("FirstProductName");
  for (var i = 0; i < s.length; i++) { key = s.key(i);
    var FirstDescr = key;
    var FirstOption=document.createElement('option');
    FirstOption.style.color='red';
    var FirstSelectus = document.getElementById('selectDesFirst');
    if(FirstDescr.match(FirstNameValue) !== null){
      FirstSelectus.style.display="block";
      Firstlist.appendChild(FirstOption);
      FirstOption.innerHTML = FirstDescr.match(FirstNameValue+".+")+"\n";};
    }
    FirstSelectus.onclick = function() {
      FirstSelectus.style.display="none";
      while(Firstlist.length > 0){
       if ( FirstSelect.selectedIndex != -1)
       {
  //Если есть выбранный элемент, отобразить его значение (свойство value)
  document.getElementById("FirstProductName").value = (FirstSelect.options[FirstSelect.selectedIndex].value);
}else{
  FirstSelectus.style.display="none";
  Firstlist.style.display="block";
  document.getElementById("FirstProductName").value = (FirstSelect.options[FirstSelect.selectedIndex].value);

};
localstorageFirst();
Firstlist.length = 0;

};
};
FirstNamer.onkeypress = function() {
  Firstlist.length = 0;
}
FirstNamer.onclick = function() {
  Firstlist.length = 0;
  FirstSelectus.style.display="none";
}
if(FirstNameValue !=0){
  localstorageFirst();
}
}
function localstorageFirst(){
  for(var i in localStorage){
    if (localStorage[i]===document.getElementById("FirstProductName").value){
      document.getElementById('FirstProductCalorie').value = localStorage.getItem(document.getElementById("FirstProductName").value)
    }else{FirstFunc();
    }
  }
}
function FirstFunc(){

  FirstProdCalorie = parseInt(document.getElementById("FirstProductCalorie").value);
  FirstProdWeight = parseInt(document.getElementById("FirstProductWeight").value)/100;
  firstcalc=FirstProdCalorie * FirstProdWeight;
  document.getElementById('FirstCalorieSum').innerHTML = firstcalc.toFixed(1) + "кК";

  localStorage.setItem("FirstProductName", document.getElementById("FirstProductName").value);
  localStorage.setItem("FirstProdWeight", parseInt(document.getElementById("FirstProductWeight").value)/100); 
  localStorage.setItem("FirstProdCalorie", document.getElementById("FirstProductCalorie").value); 
  localStorage.setItem("firstcalc", firstcalc); 
}

function localstorageSecondDesc(){
  var s = localStorage;
  var SecondSelect = document.getElementById("selectDesSecond");
  var Secondlist = document.getElementsByTagName('select')[1];
  var SecondNameValue = document.getElementById("SecondProductName").value;
  var SecondNamer = document.getElementById("SecondProductName");
  for (var i = 0; i < s.length; i++) { key = s.key(i);
    var SecondDescr = key;
    var SecondOption=document.createElement('option');
    SecondOption.style.color='red';
    var SecondSelectus = document.getElementById('selectDesSecond');
    if(SecondDescr.match(SecondNameValue) !== null){
      SecondSelectus.style.display="block";
      Secondlist.appendChild(SecondOption);
      SecondOption.innerHTML = SecondDescr.match(SecondNameValue+".+")+"\n";};
    }
    SecondSelectus.onclick = function() {
      SecondSelectus.style.display="none";
      while(Secondlist.length > 0){
       if ( SecondSelect.selectedIndex != -1)
       {
  //Если есть выбранный элемент, отобразить его значение (свойство value)
  document.getElementById("SecondProductName").value = (SecondSelect.options[SecondSelect.selectedIndex].value);

}else{
  SecondSelectus.style.display="none";
  Secondlist.style.display="block";
  document.getElementById("SecondProductName").value = (SecondSelect.options[SecondSelect.selectedIndex].value);

};
Secondlist.length = 0;
localstorageSecond();
addPost3();
};
}
SecondNamer.onkeypress = function() {
  Secondlist.length = 0;

}
SecondNamer.onclick = function() {
  Secondlist.length = 0;
  SecondSelectus.style.display="none";
}
if(SecondNameValue !=0){
  localstorageSecond();
}
}


function localstorageSecond(){
  for(var i in localStorage){
    if (localStorage[i]===document.getElementById("SecondProductName").value){
      document.getElementById('SecondProductCalorie').value = localStorage.getItem(document.getElementById("SecondProductName").value)
    }else{SecondFunc();
    }
  }
}
function SecondFunc(){

  SecondProdCalorie = parseInt(document.getElementById("SecondProductCalorie").value);
  SecondProdWeight = parseInt(document.getElementById("SecondProductWeight").value)/100;
  secondcalc=SecondProdCalorie * SecondProdWeight;
  document.getElementById('SecondCalorieSum').innerHTML = secondcalc.toFixed(1) + "кК";
  localStorage.setItem("SecondProductName", document.getElementById("SecondProductName").value);    
  localStorage.setItem("SecondProdWeight", parseInt(document.getElementById("SecondProductWeight").value)/100); 
  localStorage.setItem("SecondProdCalorie", document.getElementById("SecondProductCalorie").value);
  localStorage.setItem("secondcalc", secondcalc); 
}

function localstorageThirdDesc(){
  var s = localStorage;
  var ThirdSelect = document.getElementById("selectDesThird");
  var Thirdlist = document.getElementsByTagName('select')[2];
  var ThirdNameValue = document.getElementById("ThirdProductName").value;
  var ThirdNamer = document.getElementById("ThirdProductName");
  for (var i = 0; i < s.length; i++) { key = s.key(i);
    var ThirdDescr = key;
    var ThirdOption=document.createElement('option');
    ThirdOption.style.color='red';
    var ThirdSelectus = document.getElementById('selectDesThird');
    if(ThirdDescr.match(ThirdNameValue) !== null){
      ThirdSelectus.style.display="block";
      Thirdlist.appendChild(ThirdOption);
      ThirdOption.innerHTML = ThirdDescr.match(ThirdNameValue+".+")+"\n";};
    }
    ThirdSelectus.onclick = function() {
      ThirdSelectus.style.display="none";
      while(Thirdlist.length > 0){
       if ( ThirdSelect.selectedIndex != -1)
       {
  //Если есть выбранный элемент, отобразить его значение (свойство value)
  document.getElementById("ThirdProductName").value = (ThirdSelect.options[ThirdSelect.selectedIndex].value);
}else{
  ThirdSelectus.style.display="none";
  Thirdlist.style.display="block";
  document.getElementById("ThirdProductName").value = (ThirdSelect.options[ThirdSelect.selectedIndex].value);

};
Thirdlist.length = 0;
localstorageThird();
addPost4();
};
}
ThirdNamer.onkeypress = function() {
  Thirdlist.length = 0;
}
ThirdNamer.onclick = function() {
  Thirdlist.length = 0;
  ThirdSelectus.style.display="none";
}
if(ThirdNameValue !=0){
  localstorageThird();
}
}

function localstorageThird(){
  for(var i in localStorage){
    if (localStorage[i]===document.getElementById("ThirdProductName").value){
      document.getElementById('ThirdProductCalorie').value = localStorage.getItem(document.getElementById("ThirdProductName").value)
    }else{ThirdFunc();
    }
  }
}
function ThirdFunc(){

  ThirdProdCalorie = parseInt(document.getElementById("ThirdProductCalorie").value);
  ThirdProdWeight = parseInt(document.getElementById("ThirdProductWeight").value)/100;
  Thirdcalc=ThirdProdCalorie * ThirdProdWeight;
  document.getElementById('ThirdCalorieSum').innerHTML = Thirdcalc.toFixed(1) + "кК";
  localStorage.setItem("ThirdProductName", document.getElementById("ThirdProductName").value);    
  localStorage.setItem("ThirdProdWeight", parseInt(document.getElementById("ThirdProductWeight").value)/100); 
  localStorage.setItem("ThirdProdCalorie", document.getElementById("ThirdProductCalorie").value);
  localStorage.setItem("Thirdcalc", Thirdcalc); 
}


function localstorageFourDesc(){
  var s = localStorage;
  var FourSelect = document.getElementById("selectDesFour");
  var Fourlist = document.getElementsByTagName('select')[3];
  var FourNameValue = document.getElementById("FourProductName").value;
  var FourNamer = document.getElementById("FourProductName");
  for (var i = 0; i < s.length; i++) { key = s.key(i);
    var FourDescr = key;
    var FourOption=document.createElement('option');
    FourOption.style.color='red';
    var FourSelectus = document.getElementById('selectDesFour');
    if(FourDescr.match(FourNameValue) !== null){
      FourSelectus.style.display="block";
      Fourlist.appendChild(FourOption);
      FourOption.innerHTML = FourDescr.match(FourNameValue+".+")+"\n";};
    }
    FourSelectus.onclick = function() {
      FourSelectus.style.display="none";
      while(Fourlist.length > 0){
       if ( FourSelect.selectedIndex != -1)
       {
  //Если есть выбранный элемент, отобразить его значение (свойство value)
  document.getElementById("FourProductName").value = (FourSelect.options[FourSelect.selectedIndex].value);
}else{
  FourSelectus.style.display="none";
  Fourlist.style.display="block";
  document.getElementById("FourProductName").value = (FourSelect.options[FourSelect.selectedIndex].value);

};
Fourlist.length = 0;
localstorageFour();
addPost5();
};
}
FourNamer.onkeypress = function() {
  Fourlist.length = 0;
}
FourNamer.onclick = function() {
  Fourlist.length = 0;
  FourSelectus.style.display="none";
}
if(FourNameValue !=0){
  localstorageFour();
}
}



function localstorageFour(){
  for(var i in localStorage){
    if (localStorage[i]===document.getElementById("FourProductName").value){
      document.getElementById('FourProductCalorie').value = localStorage.getItem(document.getElementById("FourProductName").value)
    }else{FourFunc();
    }
  }
}
function FourFunc(){

  FourProdCalorie = parseInt(document.getElementById("FourProductCalorie").value);
  FourProdWeight = parseInt(document.getElementById("FourProductWeight").value)/100;
  Fourcalc=FourProdCalorie * FourProdWeight;
  document.getElementById('FourCalorieSum').innerHTML = Fourcalc.toFixed(1) + "кК";
  localStorage.setItem("FourProductName", document.getElementById("FourProductName").value);   
  localStorage.setItem("FourProdWeight", parseInt(document.getElementById("FourProductWeight").value)/100); 
  localStorage.setItem("FourProdCalorie", document.getElementById("FourProductCalorie").value);
  localStorage.setItem("Fourcalc", Fourcalc); 
}

function localstorageFiveDesc(){
  var s = localStorage;
  var FiveSelect = document.getElementById("selectDesFive");
  var Fivelist = document.getElementsByTagName('select')[4];
  var FiveNameValue = document.getElementById("FiveProductName").value;
  var FiveNamer = document.getElementById("FiveProductName");
  for (var i = 0; i < s.length; i++) { key = s.key(i);
    var FiveDescr = key;
    var FiveOption=document.createElement('option');
    FiveOption.style.color='red';
    var FiveSelectus = document.getElementById('selectDesFive');
    if(FiveDescr.match(FiveNameValue) !== null){
      FiveSelectus.style.display="block";
      Fivelist.appendChild(FiveOption);
      FiveOption.innerHTML = FiveDescr.match(FiveNameValue+".+")+"\n";};
    }
    FiveSelectus.onclick = function() {
      FiveSelectus.style.display="none";
      while(Fivelist.length > 0){
       if ( FiveSelect.selectedIndex != -1)
       {
  //Если есть выбранный элемент, отобразить его значение (свойство value)
  document.getElementById("FiveProductName").value = (FiveSelect.options[FiveSelect.selectedIndex].value);
}else{
  FiveSelectus.style.display="none";
  Fivelist.style.display="block";
  document.getElementById("FiveProductName").value = (FiveSelect.options[FiveSelect.selectedIndex].value);

};
Fivelist.length = 0;
localstorageFive();
addPost6();
};
}
FiveNamer.onkeypress = function() {
  Fivelist.length = 0;
}
FiveNamer.onclick = function() {
  Fivelist.length = 0;
  FiveSelectus.style.display="none";
}
if(FiveNameValue !=0){
  localstorageFive();
}
}

function localstorageFive(){
  for(var i in localStorage){
    if (localStorage[i]===document.getElementById("FiveProductName").value){
      document.getElementById('FiveProductCalorie').value = localStorage.getItem(document.getElementById("FiveProductName").value)
    }else{FiveFunc();
    }
  }
}
function FiveFunc(){

  FiveProdCalorie = parseInt(document.getElementById("FiveProductCalorie").value);
  FiveProdWeight = parseInt(document.getElementById("FiveProductWeight").value)/100;
  Fivecalc=FiveProdCalorie * FiveProdWeight;
  document.getElementById('FiveCalorieSum').innerHTML = Fivecalc.toFixed(1) + "кК";
  localStorage.setItem("FiveProductName", document.getElementById("FiveProductName").value);   
  localStorage.setItem("FiveProdWeight", parseInt(document.getElementById("FiveProductWeight").value)/100); 
  localStorage.setItem("FiveProdCalorie", document.getElementById("FiveProductCalorie").value);
  localStorage.setItem("Fivecalc", Fivecalc); 
}





function localstorageSixDesc(){
  var s = localStorage;
  var SixSelect = document.getElementById("selectDesSix");
  var Sixlist = document.getElementsByTagName('select')[5];
  var SixNameValue = document.getElementById("SixProductName").value;
  var SixNamer = document.getElementById("SixProductName");
  for (var i = 0; i < s.length; i++) { key = s.key(i);
    var SixDescr = key;
    var SixOption=document.createElement('option');
    SixOption.style.color='red';
    var SixSelectus = document.getElementById('selectDesSix');
    if(SixDescr.match(SixNameValue) !== null){
      SixSelectus.style.display="block";
      Sixlist.appendChild(SixOption);
      SixOption.innerHTML = SixDescr.match(SixNameValue+".+")+"\n";};
    }
    SixSelectus.onclick = function() {
      SixSelectus.style.display="none";
      while(Sixlist.length > 0){
       if ( SixSelect.selectedIndex != -1)
       {
  //Если есть выбранный элемент, отобразить его значение (свойство value)
  document.getElementById("SixProductName").value = (SixSelect.options[SixSelect.selectedIndex].value);
}else{
  SixSelectus.style.display="none";
  Sixlist.style.display="block";
  document.getElementById("SixProductName").value = (SixSelect.options[SixSelect.selectedIndex].value);

};
Sixlist.length = 0;
localstorageSix();
addPost7();
};
}
SixNamer.onkeypress = function() {
  Sixlist.length = 0;
}
SixNamer.onclick = function() {
  Sixlist.length = 0;
  SixSelectus.style.display="none";
}
if(SixNameValue !=0){
  localstorageSix();
}
}
function localstorageSix(){
  for(var i in localStorage){
    if (localStorage[i]===document.getElementById("SixProductName").value){
      document.getElementById('SixProductCalorie').value = localStorage.getItem(document.getElementById("SixProductName").value)
    }else{SixFunc();
    }
  }
}
function SixFunc(){

  SixProdCalorie = parseInt(document.getElementById("SixProductCalorie").value);
  SixProdWeight = parseInt(document.getElementById("SixProductWeight").value)/100;
  Sixcalc=SixProdCalorie * SixProdWeight;
  document.getElementById('SixCalorieSum').innerHTML = Sixcalc.toFixed(1) + "кК";
  localStorage.setItem("SixProductName", document.getElementById("SixProductName").value);  
  localStorage.setItem("SixProdWeight", parseInt(document.getElementById("SixProductWeight").value)/100); 
  localStorage.setItem("SixProdCalorie", document.getElementById("SixProductCalorie").value);
  localStorage.setItem("Sixcalc", Sixcalc); 
}

function localstorageSevenDesc(){
  var s = localStorage;
  var SevenSelect = document.getElementById("selectDesSeven");
  var Sevenlist = document.getElementsByTagName('select')[6];
  var SevenNameValue = document.getElementById("SevenProductName").value;
  var SevenNamer = document.getElementById("SevenProductName");
  for (var i = 0; i < s.length; i++) { key = s.key(i);
    var SevenDescr = key;
    var SevenOption=document.createElement('option');
    SevenOption.style.color='red';
    var SevenSelectus = document.getElementById('selectDesSeven');
    if(SevenDescr.match(SevenNameValue) !== null){
      SevenSelectus.style.display="block";
      Sevenlist.appendChild(SevenOption);
      SevenOption.innerHTML = SevenDescr.match(SevenNameValue+".+")+"\n";};
    }
    SevenSelectus.onclick = function() {
      SevenSelectus.style.display="none";
      while(Sevenlist.length > 0){
       if ( SevenSelect.selectedIndex != -1)
       {
  //Если есть выбранный элемент, отобразить его значение (свойство value)
  document.getElementById("SevenProductName").value = (SevenSelect.options[SevenSelect.selectedIndex].value);
}else{
  SevenSelectus.style.display="none";
  Sevenlist.style.display="block";
  document.getElementById("SevenProductName").value = (SevenSelect.options[SevenSelect.selectedIndex].value);

};
Sevenlist.length = 0;
localstorageSeven();
addPost8();
};
}
SevenNamer.onkeypress = function() {
  Sevenlist.length = 0;
}
SevenNamer.onclick = function() {
  Sevenlist.length = 0;
  SevenSelectus.style.display="none";
}
if(SevenNameValue !=0){
  localstorageSeven();
}
}

function localstorageSeven(){
  for(var i in localStorage){
    if (localStorage[i]===document.getElementById("SevenProductName").value){
      document.getElementById('SevenProductCalorie').value = localStorage.getItem(document.getElementById("SevenProductName").value)
    }else{SevenFunc();
    }
  }
}
function SevenFunc(){

  SevenProdCalorie = parseInt(document.getElementById("SevenProductCalorie").value);
  SevenProdWeight = parseInt(document.getElementById("SevenProductWeight").value)/100;
  Sevencalc=SevenProdCalorie * SevenProdWeight;
  document.getElementById('SevenCalorieSum').innerHTML = Sevencalc.toFixed(1) + "кК";
  localStorage.setItem("SevenProductName", document.getElementById("SevenProductName").value);  
  localStorage.setItem("SevenProdWeight", parseInt(document.getElementById("SevenProductWeight").value)/100); 
  localStorage.setItem("SevenProdCalorie", document.getElementById("SevenProductCalorie").value);
  localStorage.setItem("Sevencalc", Sevencalc); 
}

function localstorageEightDesc(){
  var s = localStorage;
  var EightSelect = document.getElementById("selectDesEight");
  var Eightlist = document.getElementsByTagName('select')[7];
  var EightNameValue = document.getElementById("EightProductName").value;
  var EightNamer = document.getElementById("EightProductName");
  for (var i = 0; i < s.length; i++) { key = s.key(i);
    var EightDescr = key;
    var EightOption=document.createElement('option');
    EightOption.style.color='red';
    var EightSelectus = document.getElementById('selectDesEight');
    if(EightDescr.match(EightNameValue) !== null){
      EightSelectus.style.display="block";
      Eightlist.appendChild(EightOption);
      EightOption.innerHTML = EightDescr.match(EightNameValue+".+")+"\n";};
    }
    EightSelectus.onclick = function() {
      EightSelectus.style.display="none";
      while(Eightlist.length > 0){
       if ( EightSelect.selectedIndex != -1)
       {
  //Если есть выбранный элемент, отобразить его значение (свойство value)
  document.getElementById("EightProductName").value = (EightSelect.options[EightSelect.selectedIndex].value);
}else{
  EightSelectus.style.display="none";
  Eightlist.style.display="block";
  document.getElementById("EightProductName").value = (EightSelect.options[EightSelect.selectedIndex].value);

};
Eightlist.length = 0;
localstorageEight();
addPost9();
};
}
EightNamer.onkeypress = function() {
  Eightlist.length = 0;
}
EightNamer.onclick = function() {
  Eightlist.length = 0;
  EightSelectus.style.display="none";
}
if(EightNameValue !=0){
  localstorageEight();
}
}

function localstorageEight(){
  for(var i in localStorage){
    if (localStorage[i]===document.getElementById("EightProductName").value){
      document.getElementById('EightProductCalorie').value = localStorage.getItem(document.getElementById("EightProductName").value)
    }else{EightFunc();
    }
  }
}
function EightFunc(){

  EightProdCalorie = parseInt(document.getElementById("EightProductCalorie").value);
  EightProdWeight = parseInt(document.getElementById("EightProductWeight").value)/100;
  Eightcalc=EightProdCalorie * EightProdWeight;
  document.getElementById('EightCalorieSum').innerHTML = Eightcalc.toFixed(1) + "кК";
  localStorage.setItem("EightProductName", document.getElementById("EightProductName").value);  
  localStorage.setItem("EightProdWeight", parseInt(document.getElementById("EightProductWeight").value)/100); 
  localStorage.setItem("EightProdCalorie", document.getElementById("EightProductCalorie").value);
  localStorage.setItem("Eightcalc", Eightcalc); 
}

function localstorageNineDesc(){
  var s = localStorage;
  var NineSelect = document.getElementById("selectDesNine");
  var Ninelist = document.getElementsByTagName('select')[8];
  var NineNameValue = document.getElementById("NineProductName").value;
  var NineNamer = document.getElementById("NineProductName");
  for (var i = 0; i < s.length; i++) { key = s.key(i);
    var NineDescr = key;
    var NineOption=document.createElement('option');
    NineOption.style.color='red';
    var NineSelectus = document.getElementById('selectDesNine');
    if(NineDescr.match(NineNameValue) !== null){
      NineSelectus.style.display="block";
      Ninelist.appendChild(NineOption);
      NineOption.innerHTML = NineDescr.match(NineNameValue+".+")+"\n";};
    }
    NineSelectus.onclick = function() {
      NineSelectus.style.display="none";
      while(Ninelist.length > 0){
       if ( NineSelect.selectedIndex != -1)
       {
  //Если есть выбранный элемент, отобразить его значение (свойство value)
  document.getElementById("NineProductName").value = (NineSelect.options[NineSelect.selectedIndex].value);
}else{
  NineSelectus.style.display="none";
  Ninelist.style.display="block";
  document.getElementById("NineProductName").value = (NineSelect.options[NineSelect.selectedIndex].value);

};
Ninelist.length = 0;
localstorageNine();
addPost10();
};
}
NineNamer.onkeypress = function() {
  Ninelist.length = 0;
}
NineNamer.onclick = function() {
  Ninelist.length = 0;
  NineSelectus.style.display="none";
}
if(NineNameValue !=0){
  localstorageNine();
}
}

function localstorageNine(){
  for(var i in localStorage){
    if (localStorage[i]===document.getElementById("NineProductName").value){
      document.getElementById('NineProductCalorie').value = localStorage.getItem(document.getElementById("NineProductName").value)
    }else{NineFunc();
    }
  }
}
function NineFunc(){

  NineProdCalorie = parseInt(document.getElementById("NineProductCalorie").value);
  NineProdWeight = parseInt(document.getElementById("NineProductWeight").value)/100;
  Ninecalc=NineProdCalorie * NineProdWeight;
  document.getElementById('NineCalorieSum').innerHTML = Ninecalc.toFixed(1) + "кК";
  localStorage.setItem("NineProductName", document.getElementById("NineProductName").value);  
  localStorage.setItem("NineProdWeight", parseInt(document.getElementById("NineProductWeight").value)/100); 
  localStorage.setItem("NineProdCalorie", document.getElementById("NineProductCalorie").value);
  localStorage.setItem("Ninecalc", Ninecalc); 
}
function localstorageTenDesc(){
  var s = localStorage;
  var TenSelect = document.getElementById("selectDesTen");
  var Tenlist = document.getElementsByTagName('select')[9];
  var TenNameValue = document.getElementById("TenProductName").value;
  var TenNamer = document.getElementById("TenProductName");
  for (var i = 0; i < s.length; i++) { key = s.key(i);
    var TenDescr = key;
    var TenOption=document.createElement('option');
    TenOption.style.color='red';
    var TenSelectus = document.getElementById('selectDesTen');
    if(TenDescr.match(TenNameValue) !== null){
      TenSelectus.style.display="block";
      Tenlist.appendChild(TenOption);
      TenOption.innerHTML = TenDescr.match(TenNameValue+".+")+"\n";};
    }
    TenSelectus.onclick = function() {
      TenSelectus.style.display="none";
      while(Tenlist.length > 0){
       if ( TenSelect.selectedIndex != -1)
       {
  //Если есть выбранный элемент, отобразить его значение (свойство value)
  document.getElementById("TenProductName").value = (TenSelect.options[TenSelect.selectedIndex].value);
}else{
  TenSelectus.style.display="none";
  Tenlist.style.display="block";
  document.getElementById("TenProductName").value = (TenSelect.options[TenSelect.selectedIndex].value);

};
Tenlist.length = 0;
localstorageTen();
};
}
TenNamer.onkeypress = function() {
  Tenlist.length = 0;
}
TenNamer.onclick = function() {
  Tenlist.length = 0;
  TenSelectus.style.display="none";
}
if(TenNameValue !=0){
  localstorageTen();
}
}
function localstorageTen(){
  for(var i in localStorage){
    if (localStorage[i]===document.getElementById("TenProductName").value){
      document.getElementById('TenProductCalorie').value = localStorage.getItem(document.getElementById("TenProductName").value)
    }else{TenFunc();
    }
  }
}
function TenFunc(){

  TenProdCalorie = parseInt(document.getElementById("TenProductCalorie").value);
  TenProdWeight = parseInt(document.getElementById("TenProductWeight").value)/100;
  Tencalc=TenProdCalorie * TenProdWeight;
  document.getElementById('TenCalorieSum').innerHTML = Tencalc.toFixed(1) + "кК";
  localStorage.setItem("TenProductName", document.getElementById("TenProductName").value);  
  localStorage.setItem("TenProdWeight", parseInt(document.getElementById("TenProductWeight").value)/100); 
  localStorage.setItem("TenProdCalorie", document.getElementById("TenProductCalorie").value);
  localStorage.setItem("Tencalc", Tencalc); 
}

function sum(){

  sumsum = firstcalc+secondcalc + Thirdcalc + Fourcalc + Fivecalc + Sixcalc + Sevencalc + Eightcalc + Ninecalc + Tencalc;
  sumweight = (FirstProdWeight+SecondProdWeight+ThirdProdWeight+FourProdWeight+FiveProdWeight+SixProdWeight + SevenProdWeight + EightProdWeight + NineProdWeight + TenProdWeight)*100;
  document.getElementById('AllCalorieSum').innerHTML = sumsum.toFixed(1) + "кК";
  document.getElementById('AllWeightSum').innerHTML = sumweight.toFixed(1) + "г";
  localStorage.setItem("sumsum", sumsum); 
  localStorage.setItem("sumweight", sumweight); 
}

function localworkclean(){
  localStorage.clear();
}

function addPost3(){
  document.getElementById("add3Product").style.display = "block";
}
function addPost4(){
  document.getElementById("add4Product").style.display = "block";
}
function addPost5(){
  document.getElementById("add5Product").style.display = "block";
}
function addPost6(){
  document.getElementById("add6Product").style.display = "block";
}  
function addPost7(){
  document.getElementById("add7Product").style.display = "block";
}
function addPost8(){
  document.getElementById("add8Product").style.display = "block";
}
function addPost9(){
  document.getElementById("add9Product").style.display = "block";
}
function addPost10(){
  document.getElementById("add10Product").style.display = "block";
}

function saver(){
  var blob = new Blob([data + " ", hours + ":", minutes + ":", seconds + "\n\n 1) "+ 
  document.getElementById('FirstProductName').value +" = "+ firstcalc +"кК, "+ (FirstProdWeight)*100 +"г\n 2) " +
document.getElementById('SecondProductName').value +" = "+ secondcalc +"кК, "+ (SecondProdWeight)*100 +"г\n 3) "+ 
  document.getElementById('ThirdProductName').value +" = "+ Thirdcalc +"кК, "+ (ThirdProdWeight)*100 +"г\n 4) " +
  document.getElementById('FourProductName').value +" = "+ ""+ Fourcalc +"кК, "+ (FourProdWeight)*100 +"г\n 5) "+
  document.getElementById('FiveProductName').value +" = "+ Fivecalc +"кК, "+ (FiveProdWeight)*100 +"г\n 6) " +
  document.getElementById('SixProductName').value +" = "+ ""+ Sixcalc +"кК, "+ (SixProdWeight)*100 +"г\n 7) "+
  document.getElementById('SevenProductName').value +" = "+ Sevencalc +"кК, "+ (SevenProdWeight)*100 +"г\n 8) " +
  document.getElementById('EightProductName').value +" = "+ Eightcalc +"кК, "+ (EightProdWeight)*100 +"г\n 9) "+ 
  document.getElementById('NineProductName').value +" = "+ Ninecalc +"кК, "+ (NineProdWeight)*100 +"г\n 10) "+ 
document.getElementById('TenProductName').value +" = "+ Tencalc +"кК, "+ (TenProdWeight)*100 + "г\n\n Calories: "+
sumsum +"кК\n Weight: "+ sumweight +"г\n"], {type: "text/plain;charset=utf-8"});
saveAs(blob, data + ".txt");
}
