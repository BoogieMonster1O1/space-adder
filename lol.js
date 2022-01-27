function bruh() {
    var input = document.getElementById("in").value;
    var out = "";
    for (let i in input) {
        out += str[i];
        if (i < input.length - 1) {
            out += " ";
        }
    }
    document.getElementById("out").value = out;
}