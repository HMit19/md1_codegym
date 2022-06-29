class Set{
    constructor(){};
    setBackground(id, cl){
        document.getElementById(id).style.background = [cl];
    }
    setVisibility(id, vi){
        document.getElementById(id).style.visibility = [vi];
    }
    setDisplay(id, di){
        document.getElementById(id).style.display = [di];
    }
    setWidth_Height(id, top, left){
        document.getElementById(id).style.top = top;
        document.getElementById(id).style.left = left;
    }
    setOpacity(id, op){
        document.getElementById(id).style.opacity = [op];
    }
    setImg(id, url){
        document.getElementById(id).src = [url];
    }
    setContent(id, content){
        document.getElementById(id).innerHTML = [content];
    }
    setSize(id, top, left){
        document.getElementById(id).style.top = [top];
        document.getElementById(id).style.left = [left];
    }
    setText(id, tx){
        document.getElementById(id).style.textDecoration = [tx];
    }
}