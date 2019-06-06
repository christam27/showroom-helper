var loc = window.location.href;
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function onclickadd(){
    var giftbox = document.getElementById("room-gift-item-list");
    var giftlist = giftbox.getElementsByClassName("room-gift-item");
    console.log("start");
    if(giftlist.length>0){
        for (var i = 0; i < giftlist.length; i++){
            function onclick10(i){
                var giftbox = document.getElementById("room-gift-item-list");
                var giftlist = giftbox.getElementsByClassName("room-gift-item");
                var clicktarget = giftlist[i].getElementsByTagName("a")[0];
                for(var j = 0; j < 10; j++){
                    clicktarget.click();
                }
            }
            var button = document.createElement("button");
            button.addEventListener("click",onclick10.bind(self,i));
            button.innerHTML = "x10";
            giftlist[i].appendChild(button);
        }
    }
}

function onclicktab(){
    var bigclass = document.getElementsByClassName("contentlist-list js-roomlist-list")[0];
    var allchannels = bigclass.getElementsByTagName("li");
    if(allchannels.length < 40){
        for (var i = 0; i < allchannels.length; i++){
            var link = allchannels[i].getElementsByTagName("a")[0];
            var target = link.href;
            console.log(target);
            window.open(target);
        }
    }else{
        for (var i = 0; i < 45; i++){
            var link = allchannels[i].getElementsByTagName("a")[0];
            var target = link.href;
            console.log(target);
            window.open(target);
        }
    }
}

function callback(){
    // var countbutton = document.getElementById("countbutton");
    // var chatbox = document.getElementById("js-room-comment");
    // var inputbox = chatbox.getElementsByTagName("input")[0];
    // var ele = document.getElementById("js-room-comment");
    // countbutton.click();
    // alert("foobar");
}

function counting(){
    var countbutton = document.getElementById("countbutton");
    var chatbox = document.getElementById("js-room-comment");
    var inputbox = chatbox.getElementsByTagName("input")[0];
    var ele = document.getElementById("js-room-comment");
    ele.addEventListener("submit", callback, false);
    // var submitbutton = chatbox.getElementsByTagName("button")[0];
    var num = new Number(countbutton.innerHTML);
    inputbox.value = num;
    inputbox.focus();
    num++;
    // $('#js-chat-input-comment').keypress("a");
    countbutton.innerHTML = num;
    console.log(num);
}

if(loc === "https://www.showroom-live.com/48_Haruka_Komiyama") {
    var giftbox = document.getElementById("gift-area");
    var giftgauge = giftbox.getElementsByClassName("gift-user-info")[0];
    var addfunc = document.createElement("button");
    addfunc.innerHTML = "add function";
    addfunc.addEventListener("click",onclickadd);
    giftgauge.appendChild(addfunc);

    var chatbox = document.getElementById("js-room-comment");
    var csschat = chatbox.parentNode;
    csschat.style.width = "400px";
    console.log(csschat);
    var countbutton = document.createElement("button");
    countbutton.innerHTML = "1";
    countbutton.id = "countbutton"
    countbutton.addEventListener("click",counting);
    chatbox.appendChild(countbutton);

}

if(loc === "https://www.showroom-live.com/onlive") {
    var addfunc = document.createElement("button");
    addfunc.innerHTML = "open tabs for points";
    addfunc.style.position = "relative";
    addfunc.style.top = "50%";
    addfunc.style.left = "50%";
    addfunc.addEventListener("click",onclicktab);
    document.body.prepend(addfunc);
}