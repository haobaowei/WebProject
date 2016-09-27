function a(n) {
    for (var i = 0; i < n; i++) {
        var str = "";
        for (var k = 0; k < i; k++) {
            str += "**";
        }
        str = str.substring(0, str.length - 1);
        console.log(str);
    }
}

window.onload = () => {

a(8);
};