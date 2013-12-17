function dragEnter(ev)
{
    ev.preventDefault();
}

function allowDrop(ev)
{
    ev.preventDefault();
    ev.dataTransfer.effectAllowed = 'move';
}

function drag(ev)
{
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData('Text', ev.target.getAttribute('id'));
}

function dragEnd(ev)
{
    event.preventDefault();

    if (ev.dataTransfer.dropEffect == 'move') {
        // remove the dragged element
        ev.target.parentNode.removeChild(ev.target);
    }
}

function drop(ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData('Text');

    //console.log(ev.target.innerHTML);

    if (ev.target.getAttribute('id') == 'tiles') {
        ev.target.appendChild(document.getElementById(data));
        //document.getElementById(data).className = "tile";
    } else {
        if (document.getElementById(data).getAttribute('id') != ev.target.getAttribute('id')
            && ev.target.innerHTML == "") {
            ev.target.appendChild(document.getElementById(data));
            //document.getElementById(data).className = "move-tile";
        }
    }
    ev.stopPropagation();
}