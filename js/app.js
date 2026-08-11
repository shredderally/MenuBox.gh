const items=[{id:1,name:"Jollof Special",price:45,avail:true},{id:2,name:"Grilled Tilapia",price:85,avail:true},{id:3,name:"Waakye Deluxe",price:40,avail:false}];
let cart=[];

function scrollToId(id){document.getElementById(id).scrollIntoView({behavior:'smooth'})}

// progress + header blur
window.addEventListener('scroll',()=>{
  document.getElementById('progress').style.width=(scrollY/(document.body.scrollHeight-innerHeight)*100)+'%';
  document.getElementById('header').style.background=scrollY>10?'rgba(255,251,245,.9)':'transparent';
});

// hero tilt
const wrap=document.getElementById('phoneWrap');
document.getElementById('heroVisual')?.addEventListener('mousemove',e=>{
  const r=e.currentTarget.getBoundingClientRect();
  const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
  wrap.style.transform=`perspective(800px) rotateY(${x*12}deg) rotateX(${-y*12}deg)`;
});

// simple editor render
function renderEditor(){
  document.getElementById('editor').innerHTML=items.map(i=>`
    <div draggable="true" style="border:1px solid #EAE0D8;padding:12px;border-radius:14px;margin-bottom:8px;display:flex;justify-content:space-between">
      <input value="${i.name}" onchange="updateItem(${i.id},'name',this.value)"/>
      <input type="number" value="${i.price}" style="width:80px" onchange="updateItem(${i.id},'price',this.value)"/>
      <button onclick="toggle(${i.id})">${i.avail?'On':'Off'}</button>
    </div>`).join('') + `<button onclick="items.push({id:Date.now(),name:'New Item',price:30,avail:true});renderEditor()">+ Add item</button>`;
}
function updateItem(id,k,v){Object.assign(items.find(x=>x.id===id),{[k]:k==='price'?+v:v}); renderEditor()}
function toggle(id){items.find(x=>x.id===id).avail=!items.find(x=>x.id===id).avail; renderEditor()}
renderEditor();
