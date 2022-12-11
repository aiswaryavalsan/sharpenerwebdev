let item=document.querySelector('.list-group-item:nth-child(1)');
item.style.color='red';
let item1=document.querySelector('.list-group-item:nth-child(2)');
//item1.style.display='none';
let item3=document.querySelectorAll('li:nth-child(odd)');
item3[1].style.color='yellow';
for(let i=0;i<item3.length;i++){
    item3[i].style.backgroundColor='green';
}

