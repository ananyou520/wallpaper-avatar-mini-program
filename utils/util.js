var e, t;

e = require("./md5.min.js"), t = function(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}, module.exports = {
    formatTime: function(e) {
        var r = e.getFullYear(), n = e.getMonth() + 1, a = e.getDate(), o = e.getHours(), g = e.getMinutes(), l = e.getSeconds();
        return [ r, n, a ].map(t).join("/") + " " + [ o, g, l ].map(t).join(":");
    },
    getSign: function(t, r, n) {
        var a = "t=" + t.toString() + "ak=" + r + n;
        return console.log(a), e(a);
    },
    getTimeDes: function() {
        var e = new Date();
        return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
    },
    digitUppercase: function(e) {
        var t = [ "角", "分" ], r = [ "零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖" ], n = [ [ "元", "万", "亿" ], [ "", "拾", "佰", "仟" ] ], a = e < 0 ? "欠" : "";
        e = Math.abs(e);
        for (var o = "", g = 0; g < t.length; g++) o += (r[Math.floor(10 * e * Math.pow(10, g)) % 10] + t[g]).replace(/\u96f6./, "");
        for (o = o || "整", e = Math.floor(e), g = 0; g < n[0].length && e > 0; g++) {
            for (var l = "", i = 0; i < n[1].length && e > 0; i++) l = r[e % 10] + n[1][i] + l, 
            e = Math.floor(e / 10);
            o = l.replace(/(\u96f6.)*\u96f6$/, "").replace(/^$/, "零") + n[0][g] + o;
        }
        return a + o.replace(/(\u96f6.)*\u96f6\u5143/, "元").replace(/(\u96f6.)+/g, "零").replace(/^\u6574$/, "零元整");
    }
};