var now = new Date();
function createtime() {
    var grt = new Date("18/11/2022 00:00:00");
    now.setTime(now.getTime() + 250);
    var days = (now - grt) / 1e3 / 60 / 60 / 24,
        dnum = Math.floor(days),
        hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
        hnum = Math.floor(hours);
    1 == String(hnum).length && (hnum = "0" + hnum);
    var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
        mnum = Math.floor(minutes);
    1 == String(mnum).length && (mnum = "0" + mnum);
    var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
        snum = Math.round(seconds);
    1 == String(snum).length && (snum = "0" + snum);
    let currentTimeHtml = "";
    (currentTimeHtml =
        hnum < 18 && hnum >= 9
            ? `<img class="boardsign" src="https://img.shields.io/badge/%E5%BD%BC%E5%B2%B8%E8%8A%B1%E5%BC%80-%E6%95%B2%E4%BB%A3%E7%A0%81ing-orange" title="acm-icpc比赛,嘻嘻好想去~"><span class="textTip"> <br> 本站居然运行了 ${dnum} 天</span><span id="runtime"> ${hnum} 小时 ${mnum} 分 ${snum} 秒 </span> <i class="fas fa-heartbeat" style="color:red"></i>`
            : `<img class="boardsign" src="https://img.shields.io/badge/%E5%BD%BC%E5%B2%B8%E8%8A%B1%E5%BC%80-%E4%BC%91%E6%81%AF%E5%95%A6%EF%BC%8C%E5%90%AC%E5%90%AC%E6%AD%8C%E5%90%A7-red" title="放学啦,摆烂咯~"><span class="textTip"> <br> 本站居然运行了 ${dnum} 天</span><span id="runtime"> ${hnum} 小时 ${mnum} 分 ${snum} 秒 </span> <i class="fas fa-heartbeat" style="color:red"></i>`),
        document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
setInterval(() => {
    createtime();
}, 250);