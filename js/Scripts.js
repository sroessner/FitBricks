function allowDrop(ev) {
  /* The default handling is to not allow dropping elements. */
  /* Here we allow it by preventing the default behaviour. */
  ev.preventDefault();
}

function drag(ev) {
  /* Here is specified what should be dragged. */
  /* This data will be dropped at the place where the mouse button is released */
  /* Here, we want to drag the element itself, so we set it's ID. */
  ev.dataTransfer.setData("text/html", ev.target.id);
}

function drop(ev) {
  /* The default handling is not to process a drop action and hand it to the next 
     higher html element in your DOM. */
  /* Here, we prevent the default behaviour in order to process the event within 
     this handler and to stop further propagation of the event. */
  ev.preventDefault();
  /* In the drag event, we set the *variable* (it is not a variable name but a 
     format, please check the reference!) "text/html", now we read it out */
  var data=ev.dataTransfer.getData("text/html");
  /* As we put the ID of the source element into this variable, we can now use 
     this ID to manipulate the dragged element as we wish. */
  /* Let's just move it through the DOM and append it here */
  ev.target.appendChild(document.getElementById(data));
}

function dropbrick(ev) {
  var name=1;
  while (document.getElementById(name)!=null){name=name+1;};
  ev.stopPropagation();
  el=ev.target;
  //ev.preventDefault();
  var data=ev.dataTransfer.getData("text/html");
  /* If you use DOM manipulation functions, their default behaviour it not to 
     copy but to alter and move elements. By appending a ".cloneNode(true)", 
     you will not move the original element, but create a copy. */
  if (el.id!="canvas"){el=el.parentNode;}
  if(document.getElementById(data).id=="minibrick" || document.getElementById(data).id=="medibrick" || document.getElementById(data).id=="megabrick"){}else{el=el.parentNode;}
  var nodeCopy = document.getElementById(data).cloneNode(true);
  nodeCopy.id = name; /* We cannot use the same ID */
  el.appendChild(nodeCopy);
}

function dropeitem(ev) {
  var name=1;
  while (document.getElementById(name)!=null){name="e"+name+1;};
  ev.stopPropagation();
  el=ev.target;
  
  //ev.preventDefault();
  var data=ev.dataTransfer.getData("text/html");
  /* If you use DOM manipulation functions, their default behaviour it not to 
     copy but to alter and move elements. By appending a ".cloneNode(true)", 
     you will not move the original element, but create a copy. */
  var nodeCopy = document.getElementById(data).cloneNode(true);
  ek=document.getElementById(data);
  if (ek.className!="eitem"){el=el.parentNode;}
  nodeCopy.id = name; /* We cannot use the same ID */
  el.appendChild(nodeCopy);
}

function ColorChanger(newSchema){document.getElementById('CurrentStyle').href=newSchema;}



