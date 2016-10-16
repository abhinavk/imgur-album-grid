var imgur_url = window.location + ""
if (!imgur_url.match("grid")) {
if (imgur_url[imgur_url.length - 1] === "/") {
    window.location = imgur_url + "layout/grid"
}
else {
window.location = imgur_url + "/layout/grid"
}
}