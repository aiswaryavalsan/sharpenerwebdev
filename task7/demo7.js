let newdiv=document.querySelector('div');
let world=document.createElement('h1');
world.innerHTML='helhellolo'
newdiv.innerHTML=world.innerText+newdiv.innerHTML;
let item=document.querySelector('.list-group');
item.innerHTML=`<li>hello world</li>`+item.innerHTML;