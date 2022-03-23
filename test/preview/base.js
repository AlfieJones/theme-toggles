function getChildren() {
    const toggles = document.getElementById("container").children;
    const interval = 500;
    let time = 0;
    let timeTotal = toggles.length * interval;
    setTimeout(function(){
        for (let toggle of toggles) {
            setTimeout(function(){
                toggle.children[0].children[0].checked = true;
            }, time);
            setTimeout(function(){
                toggle.children[0].children[0].checked = false;
            }, time + timeTotal);
            time += interval;
        }
    }, interval);
}