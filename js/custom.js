window.onload = function () {
    "use strict";
    lnk1.onclick = btnDown;
    lnk3.onclick = btnDown;
    lnk5.onclick = btnDown;
    lnk6.onclick = btnDown;
}
function btnDown() {
    "use strict";
    var myCollapse = document.getElementById('navbarNavAltMarkup');
    var bsCollapse = new bootstrap.Collapse(myCollapse, {
        toggle: false
    });
    bsCollapse.hide();
}