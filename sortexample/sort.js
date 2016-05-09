$(document).ready(function() {
    
  $('#ticket').sortable({
     
      update:function(){ //get id
          var getIdStr = $(this).sortable('toArray').toString();
          $('#ids').text(getIdStr);
           var moveObj =event.toElement; //移动的对象
           console.log('id:'+moveObj.id) //移动对象的id
      },
     
      placeholder:'sortabled', //占位样式
      start:function(){ //开始拖动
        //alert("start")  
      },
      stop : function(event, ui){ //当移动结束鼠标松开时，触发此事件。
        //alert("this is stop");
       
       },
       //cancel: ".foldIcon", //阻止拖动
       containment:'parent', //拖动容器
       cursor:'move'
     
  })
  

});