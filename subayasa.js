function speedCalc(syuzokuchi,kotaichi,doryokuchi,level,seikaku) {
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
   parseFloat(seikaku, 10) 
   return Math.floor(keisan);
 
 }
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
    $("#my1_syuzoku").val(speed);
  },);
  
  $("input.my2_input").on("blur", function () {
    var name = $(this).val();
    var status = poke_data[$(this).val()];
    var icon = poke_icon[$(this).val()];

    var name = '<i class="icon32_sp ' + icon +'"></i>' + name +'</span>'
    $("#my_name2").html(name);

    var type1 = poke_type[status.タイプ１];
    var type2 = poke_type[status.タイプ２];
    $("#my_type2").html(type1 + type2);
    
    var speed = status.素早;
    $("#my2_syuzoku").val(speed);
  },);
  
  $("input.my3_input").on("blur", function () {
    var name = $(this).val();
    var status = poke_data[$(this).val()];
    var icon = poke_icon[$(this).val()];

    var name = '<i class="icon32_sp ' + icon +'"></i>' + name +'</span>'
    $("#my_name3").html(name);

    var type1 = poke_type[status.タイプ１];
    var type2 = poke_type[status.タイプ２];
    $("#my_type3").html(type1 + type2);
    
    var speed = status.素早;
    $("#my3_syuzoku").val(speed);
  },);
  
  $("input.my4_input").on("blur", function () {
    var name = $(this).val();
    var status = poke_data[$(this).val()];
    var icon = poke_icon[$(this).val()];

    var name = '<i class="icon32_sp ' + icon +'"></i>' + name +'</span>'
    $("#my_name4").html(name);

    var type1 = poke_type[status.タイプ１];
    var type2 = poke_type[status.タイプ２];
    $("#my_type4").html(type1 + type2);
    
    var speed = status.素早;
    $("#my4_syuzoku").val(speed);
  },);
  
  $("input.my5_input").on("blur", function () {
    var name = $(this).val();
    var status = poke_data[$(this).val()];
    var icon = poke_icon[$(this).val()];

    var name = '<i class="icon32_sp ' + icon +'"></i>' + name +'</span>'
    $("#my_name5").html(name);

    var type1 = poke_type[status.タイプ１];
    var type2 = poke_type[status.タイプ２];
    $("#my_type5").html(type1 + type2);
    
    var speed = status.素早;
    $("#my5_syuzoku").val(speed);
  },);
  
  $("input.my6_input").on("blur", function () {
    var name = $(this).val();
    var status = poke_data[$(this).val()];
    var icon = poke_icon[$(this).val()];

    var name = '<i class="icon32_sp ' + icon +'"></i>' + name +'</span>'
    $("#my_name6").html(name);

    var type1 = poke_type[status.タイプ１];
    var type2 = poke_type[status.タイプ２];
    $("#my_type6").html(type1 + type2);
    
    var speed = status.素早;
    $("#my6_syuzoku").val(speed);
  },);
  
  $("input.enemy1_input").on("blur", function () {
    var name = $(this).val();
    var status = poke_data[$(this).val()];
    var icon = poke_icon[$(this).val()];

    var name = '<i class="icon32_sp ' + icon +'"></i>' + name +'</span>'
    $("#enemy_name1").html(name);

    var type1 = poke_type[status.タイプ１];
    var type2 = poke_type[status.タイプ２];
    $("#enemy_type1").html(type1 + type2);
    
    var speed = status.素早;
    $("#enemy1_syuzoku").val(speed);
  },);
  
  $("input.enemy2_input").on("blur", function () {
    var name = $(this).val();
    var status = poke_data[$(this).val()];
    var icon = poke_icon[$(this).val()];

    var name = '<i class="icon32_sp ' + icon +'"></i>' + name +'</span>'
    $("#enemy_name2").html(name);

    var type1 = poke_type[status.タイプ１];
    var type2 = poke_type[status.タイプ２];
    $("#enemy_type2").html(type1 + type2);
    
    var speed = status.素早;
    $("#enemy2_syuzoku").val(speed);
  },);
  
  $("input.enemy3_input").on("blur", function () {
    var name = $(this).val();
    var status = poke_data[$(this).val()];
    var icon = poke_icon[$(this).val()];

    var name = '<i class="icon32_sp ' + icon +'"></i>' + name +'</span>'
    $("#enemy_name3").html(name);

    var type1 = poke_type[status.タイプ１];
    var type2 = poke_type[status.タイプ２];
    $("#enemy_type3").html(type1 + type2);
    
    var speed = status.素早;
    $("#enemy3_syuzoku").val(speed);
  },);
  
  $("input.enemy4_input").on("blur", function () {
    var name = $(this).val();
    var status = poke_data[$(this).val()];
    var icon = poke_icon[$(this).val()];

    var name = '<i class="icon32_sp ' + icon +'"></i>' + name +'</span>'
    $("#enemy_name4").html(name);

    var type1 = poke_type[status.タイプ１];
    var type2 = poke_type[status.タイプ２];
    $("#enemy_type4").html(type1 + type2);
    
    var speed = status.素早;
    $("#enemy4_syuzoku").val(speed);
  },);
  
  $("input.enemy5_input").on("blur", function () {
    var name = $(this).val();
    var status = poke_data[$(this).val()];
    var icon = poke_icon[$(this).val()];

    var name = '<i class="icon32_sp ' + icon +'"></i>' + name +'</span>'
    $("#enemy_name5").html(name);

    var type1 = poke_type[status.タイプ１];
    var type2 = poke_type[status.タイプ２];
    $("#enemy_type5").html(type1 + type2);
    
    var speed = status.素早;
    $("#enemy5_syuzoku").val(speed);
  },);
  
  $("input.enemy6_input").on("blur", function () {
    var name = $(this).val();
    var status = poke_data[$(this).val()];
    var icon = poke_icon[$(this).val()];

    var name = '<i class="icon32_sp ' + icon +'"></i>' + name +'</span>'
    $("#enemy_name6").html(name);

    var type1 = poke_type[status.タイプ１];
    var type2 = poke_type[status.タイプ２];
    $("#enemy_type6").html(type1 + type2);
    
    var speed = status.素早;
    $("#enemy6_syuzoku").val(speed);
  },);

  $("#button").on("click", function(){
    var newText = $("#text").val();
    $("#string").text(newText);
    var speed_set = new Set();
    var dataArr = new Array();
    //各ポケモンの実数値を計算
    var henka = (Number($("#my1_henka").val()) + 2)/2;
    var scarf = $("#my1_scarf").prop("checked") ?1.5:1;
    var mahi = $("#my1_mahi").prop("checked") ?0.5:1;
    var tenkou = $("#my1_tenkou").prop("checked") ?2:1;
    var my1_speed = speedCalc($("#my1_syuzoku").val(),$("#my1_kotai").val(),$("#my1_doryoku").val(),50,$("#my1_seikaku").val()) * henka * scarf * mahi * tenkou * $("#my1_other").val();
    speed_set.add(my1_speed);
    dataArr.push({"type":"my","icon":$("#my_name1 i").attr("class"),"speed":my1_speed});
    
    var henka = (Number($("#my2_henka").val()) + 2)/2;
    var scarf = $("#my2_scarf").prop("checked") ?1.5:1;
    var mahi = $("#my2_mahi").prop("checked") ?0.5:1;
    var tenkou = $("#my2_tenkou").prop("checked") ?2:1;
    var my2_speed = speedCalc($("#my2_syuzoku").val(),$("#my2_kotai").val(),$("#my2_doryoku").val(),50,$("#my2_seikaku").val()) * henka * scarf * mahi * tenkou * $("#my2_other").val();
    speed_set.add(my2_speed);
    dataArr.push({"type":"my","icon":$("#my_name2 i").attr("class"),"speed":my2_speed});
    
    var henka = (Number($("#my3_henka").val()) + 2)/2;
    var scarf = $("#my3_scarf").prop("checked") ?1.5:1;
    var mahi = $("#my3_mahi").prop("checked") ?0.5:1;
    var tenkou = $("#my3_tenkou").prop("checked") ?2:1;
    var my3_speed = speedCalc($("#my3_syuzoku").val(),$("#my3_kotai").val(),$("#my3_doryoku").val(),50,$("#my3_seikaku").val()) * henka * scarf * mahi * tenkou * $("#my3_other").val();
    speed_set.add(my3_speed);
    dataArr.push({"type":"my","icon":$("#my_name3 i").attr("class"),"speed":my3_speed});
    
    var henka = (Number($("#my4_henka").val()) + 2)/2;
    var scarf = $("#my4_scarf").prop("checked") ?1.5:1;
    var mahi = $("#my4_mahi").prop("checked") ?0.5:1;
    var tenkou = $("#my4_tenkou").prop("checked") ?2:1;
    var my4_speed = speedCalc($("#my4_syuzoku").val(),$("#my4_kotai").val(),$("#my4_doryoku").val(),50,$("#my4_seikaku").val()) * henka * scarf * mahi * tenkou * $("#my4_other").val();
    speed_set.add(my4_speed);
    dataArr.push({"type":"my","icon":$("#my_name4 i").attr("class"),"speed":my4_speed});
    
    var henka = (Number($("#my5_henka").val()) + 2)/2;
    var scarf = $("#my5_scarf").prop("checked") ?1.5:1;
    var mahi = $("#my5_mahi").prop("checked") ?0.5:1;
    var tenkou = $("#my5_tenkou").prop("checked") ?2:1;
    var my5_speed = speedCalc($("#my5_syuzoku").val(),$("#my5_kotai").val(),$("#my5_doryoku").val(),50,$("#my5_seikaku").val()) * henka * scarf * mahi * tenkou * $("#my5_other").val();
    speed_set.add(my5_speed);
    dataArr.push({"type":"my","icon":$("#my_name5 i").attr("class"),"speed":my5_speed});
    
    var henka = (Number($("#my6_henka").val()) + 2)/2;
    var scarf = $("#my6_scarf").prop("checked") ?1.5:1;
    var mahi = $("#my6_mahi").prop("checked") ?0.5:1;
    var tenkou = $("#my6_tenkou").prop("checked") ?2:1;
    var my6_speed = speedCalc($("#my6_syuzoku").val(),$("#my6_kotai").val(),$("#my6_doryoku").val(),50,$("#my6_seikaku").val()) * henka * scarf * mahi * tenkou * $("#my6_other").val();
    speed_set.add(my6_speed);
    dataArr.push({"type":"my","icon":$("#my_name6 i").attr("class"),"speed":my6_speed});
    
    var henka = (Number($("#enemy1_henka").val()) + 2)/2;
    var scarf = $("#enemy1_scarf").prop("checked") ?1.5:1;
    var mahi = $("#enemy1_mahi").prop("checked") ?0.5:1;
    var tenkou = $("#enemy1_tenkou").prop("checked") ?2:1;
    var enemy1_speed = speedCalc($("#enemy1_syuzoku").val(),$("#enemy1_kotai").val(),$("#enemy1_doryoku").val(),50,$("#enemy1_seikaku").val()) * henka * scarf * mahi * tenkou * $("#enemy1_other").val();
    speed_set.add(enemy1_speed);
    dataArr.push({"type":"enemy","icon":$("#enemy_name1 i").attr("class"),"speed":enemy1_speed});
    
    var henka = (Number($("#enemy2_henka").val()) + 2)/2;
    var scarf = $("#enemy2_scarf").prop("checked") ?1.5:1;
    var mahi = $("#enemy2_mahi").prop("checked") ?0.5:1;
    var tenkou = $("#enemy2_tenkou").prop("checked") ?2:1;
    var enemy2_speed = speedCalc($("#enemy2_syuzoku").val(),$("#enemy2_kotai").val(),$("#enemy2_doryoku").val(),50,$("#enemy2_seikaku").val()) * henka * scarf * mahi * tenkou * $("#enemy2_other").val();
    speed_set.add(enemy2_speed);
    dataArr.push({"type":"enemy","icon":$("#enemy_name2 i").attr("class"),"speed":enemy2_speed});
    
    var henka = (Number($("#enemy3_henka").val()) + 2)/2;
    var scarf = $("#enemy3_scarf").prop("checked") ?1.5:1;
    var mahi = $("#enemy3_mahi").prop("checked") ?0.5:1;
    var tenkou = $("#enemy3_tenkou").prop("checked") ?2:1;
    var enemy3_speed = speedCalc($("#enemy3_syuzoku").val(),$("#enemy3_kotai").val(),$("#enemy3_doryoku").val(),50,$("#enemy3_seikaku").val()) * henka * scarf * mahi * tenkou * $("#enemy3_other").val();
    speed_set.add(enemy3_speed);
    dataArr.push({"type":"enemy","icon":$("#enemy_name3 i").attr("class"),"speed":enemy3_speed});
    
    var henka = (Number($("#enemy4_henka").val()) + 2)/2;
    var scarf = $("#enemy4_scarf").prop("checked") ?1.5:1;
    var mahi = $("#enemy4_mahi").prop("checked") ?0.5:1;
    var tenkou = $("#enemy4_tenkou").prop("checked") ?2:1;
    var enemy4_speed = speedCalc($("#enemy4_syuzoku").val(),$("#enemy4_kotai").val(),$("#enemy4_doryoku").val(),50,$("#enemy4_seikaku").val()) * henka * scarf * mahi * tenkou * $("#enemy4_other").val();
    speed_set.add(enemy4_speed);
    dataArr.push({"type":"enemy","icon":$("#enemy_name4 i").attr("class"),"speed":enemy4_speed});
    
    var henka = (Number($("#enemy5_henka").val()) + 2)/2;
    var scarf = $("#enemy5_scarf").prop("checked") ?1.5:1;
    var mahi = $("#enemy5_mahi").prop("checked") ?0.5:1;
    var tenkou = $("#enemy5_tenkou").prop("checked") ?2:1;
    var enemy5_speed = speedCalc($("#enemy5_syuzoku").val(),$("#enemy5_kotai").val(),$("#enemy5_doryoku").val(),50,$("#enemy5_seikaku").val()) * henka * scarf * mahi * tenkou * $("#enemy5_other").val();
    speed_set.add(enemy5_speed);
    dataArr.push({"type":"enemy","icon":$("#enemy_name5 i").attr("class"),"speed":enemy5_speed});
    
    var henka = (Number($("#enemy6_henka").val()) + 2)/2;
    var scarf = $("#enemy6_scarf").prop("checked") ?1.5:1;
    var mahi = $("#enemy6_mahi").prop("checked") ?0.5:1;
    var tenkou = $("#enemy6_tenkou").prop("checked") ?2:1;
    var enemy6_speed = speedCalc($("#enemy6_syuzoku").val(),$("#enemy6_kotai").val(),$("#enemy6_doryoku").val(),50,$("#enemy6_seikaku").val()) * henka * scarf * mahi * tenkou * $("#enemy6_other").val();
    speed_set.add(enemy6_speed);
    dataArr.push({"type":"enemy","icon":$("#enemy_name6 i").attr("class"),"speed":enemy6_speed});
    




    // table要素を取得
    var tableElem = document.getElementById('result-table');

    while( tableElem.rows[ 1 ] ) tableElem.deleteRow( 1 );

    sortedSpeedSet = Array.from(speed_set).sort((a, b) => b - a);
    sortedSpeedSet.forEach(speed  => {

      // tbody要素にtr要素（行）を最後に追加
      var trElem = tableElem.tBodies[0].insertRow(-1);

      // td要素を追加
      var enemyCell = trElem.insertCell(0);
      var speedCell = trElem.insertCell(0);
      var myCell = trElem.insertCell(0);

      // 実数値を設定
      speedCell.appendChild(document.createTextNode(speed));

      // アイコンを設定

      var targetDataArr = dataArr.filter((data) => data.speed == speed);
      
      targetDataArr.forEach(targetData => {
        let element = document.createElement('i');
        let attrnode = document.createAttribute('class');
        attrnode.value = 'icon32_sp ' + targetData.icon;
        console.log(attrnode.value);

        element.setAttributeNode(attrnode);

        if(targetData.type == "my"){
          myCell.appendChild(element);
        } else if(targetData.type == "enemy"){
          enemyCell.appendChild(element);
        }
      })

      
    })
  },);


},);
  
