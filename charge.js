
for (let i = 1; i < 5; i++) {
    $("#text-" + i).hide(0);
    $("#btn-" + i).click(function () {
        $("#text-" + i).toggle(500);
    })
}