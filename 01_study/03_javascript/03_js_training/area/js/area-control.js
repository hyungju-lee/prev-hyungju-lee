document.addEventListener('DOMContentLoaded', function () {
    dragElement(document.getElementById("btn-control"), document.getElementById("explain"), document.getElementById("choice"));

    function dragElement(elmnt, topArea, bottomArea) {
        var pos = 0, pos2 = 0;
        if (elmnt !== null) {
            elmnt.onmousedown = dragMouseDown;
            elmnt.ontouchstart = dragMouseDown;
        }

        function dragMouseDown() {
            document.onmouseup = closeDragElement;
            document.ontouchend = closeDragElement;
            document.onmousemove = elementDrag;
            document.ontouchmove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            var windowHeight = window.innerHeight;
            if (e.type === "touchmove") {
                if (e.touches.length === 1) {
                    pos2 = pos - e.touches[0].clientY;
                    pos = e.touches[0].clientY;
                }
            } else if (e.type === "mousemove") {
                pos2 = pos - e.clientY;
                pos = e.clientY;
            }

            elmnt.style.top = pos * 100 / windowHeight < 10 ? 10 + "%" : pos * 100 / windowHeight > 90 ? 90 + "%" : pos * 100 / windowHeight + "%";
            topArea.style.height = pos * 100 / windowHeight + "%";
            bottomArea.style.height = (windowHeight - pos) * 100 / windowHeight + "%";

        }

        function closeDragElement() {
            document.onmouseup = null;
            document.ontouchend = null;
            document.onmousemove = null;
            document.ontouchmove = null;
        }
    }
})