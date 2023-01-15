$(function () {
  $("input.my1_input").on("blur", function () {
    var name = $(this).val();
    var status = poke_data[$(this).val()];
    var icon = poke_icon[$(this).val()];

    var name = '<i class="icon32_sp ' + icon +'"></i>' + name +'</span>'
    $("#my_name1").html(name);

    var type1 = poke_type[status.タイプ１];
    var type2 = poke_type[status.タイプ２];
    $("#my_type1").html(type1 + type2);
    
    var speed = status.素早;
    $("#my_speed1").val(speed);
  },);

  $("#button").on("click", function(){
    var newText = $("#text").val();
    $("#string").text(newText);
    //各ポケモンの実数値を計算
    //my or enemy,icon,実数値 の配列と
    //重複なしの実数値 の配列を作る
  },);


},);
  
function speed_calc(syuzokuchi,kotaichi,doryokuchi,level,seikaku,itemValue,jyousyouchi) {
 //[{(種族値×2＋個体値＋努力値/4)×Lv/100}＋5]×性格補正(1.1,1.0,0.9)
  let keisan = 
  (
    (parseInt(syuzokuchi, 10) * 2 +
     parseInt(kotaichi, 10) +
     parseInt(doryokuchi, 10) / 4
     ) *
    (parseInt(level, 10) / 100) +
     5
  ) *
  parseFloat(seikaku, 10) *
  parseFloat(itemValue, 10) *
  parseFloat(jyousyouchi, 10);
    

}