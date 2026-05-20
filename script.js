
/* ══ DATA ══ */
const CAT_IMAGES={
  Coffee:'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=80&q=70',
  Frappe:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=80&q=70',
  'Milk-Based':'https://images.unsplash.com/photo-1558857563-b371033873b8?w=80&q=70',
  Snack:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=80&q=70',
  Dessert:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=80&q=70',
};
const ITEM_IMAGES={
  'Espresso':'Espresso.webp',
  'Americano':'Americano.webp',
  'Cappuccino':'Cappuccino.jpg',
  'Latte':'Latte.jpg',
  'Caramel Macchiato':'Caramel Macchiato.png',
  'Mocha':'Mocha.webp',
  'Vanilla Latte':'Vanilla Latte.webp',
  'Hazelnut Coffee':'Hazelnut Coffee.jpeg',
  'Spanish Latte':'Spanish Latte.jpg',
  'Cold Brew':'Cold Brew.jpg',
  'Coffee Frappe':'Coffee Frappe.png',
  'Mocha Frappe':'Mocha Frappe.webp',
  'Caramel Frappe':'Caramel Frappe.jpg',
  'Java Chip Frappe':'Java Chip Frappe.jpg',
  'Vanilla Cream Frappe':'Vanilla Cream Frappe.webp',
  'Matcha Frappe':'Matcha Frappe.webp',
  'Chocolate Frappe':'Chocolate Frappe.webp',
  'Oreo Frappe':'Oreo Frappe.jpg',
  'Strawberry Frappe':'Strawberry Frappe.jpg',
  'Mango Frappe':'Mango Frappe.png',
  'Classic Milk Tea':'Classic Milk Tea.png',
  'Wintermelon Milk Tea':'Wintermelon Milk Tea.png',
  'Taro Milk Tea':'Taro Milk Tea.png',
  'Chocolate Milk':'Chocolate Milk.jpg',
  'Strawberry Milk':'Strawberry Milk.jpg',
  'Brown Sugar Milk':'Brown Sugar Milk.webp',
  'Almond Milk Drink':'Almond Milk Drink.jpg',
  'Clubhouse Sandwich':'Clubhouse Sandwich.jpg',
  'Ham & Cheese Sandwich':'Ham & Cheese Sandwich.webp',
  'Tuna Sandwich':'Tuna Sandwich.jpg',
  'French Fries':'French Fries.jpg',
  'Nachos with Cheese':'Nachos with Cheese.jpg',
  'Chicken Nuggets':'Chicken Nuggets.webp',
  'Pasta':'Pasta.jpg',
  'Garlic Bread':'Garlic Bread.jpg',
  'Hotdog Sandwich':'Hotdog Sandwich.webp',
  'Mini Pizza':'Mini Pizza.avif',
  'Chocolate Cake':'Chocolate Cake.avif',
  'Cheesecake':'Cheesecake.webp',
  'Brownies':'Brownies.jpg',
  'Cookies':'Cookies.jpg',
  'Donuts':'Donuts.jpg',
  'Ice Cream Sundae':'Ice Cream Sundae.jpg',
  'Banana Split':'Banana Split.jpg',
  'Leche Flan':'Leche Flan.jpg',
  
};

const MENU={
  Coffee:{icon:'☕',color:'#5C3317',items:[
    {name:'Espresso',price:80,emoji:'☕',desc:'A concentrated shot of rich, bold espresso with deep roasted notes.'},
    {name:'Americano',price:95,emoji:'🖤',desc:'Espresso diluted with hot water for a smooth, clean coffee experience.'},
    {name:'Cappuccino',price:110,emoji:'🫧',desc:'Equal parts espresso, steamed milk, and velvety foam.'},
    {name:'Latte',price:110,emoji:'🥛',desc:'Smooth espresso with generous steamed milk and a light foam cap.'},
    {name:'Caramel Macchiato',price:130,emoji:'🍯',desc:'Vanilla-scented steamed milk with espresso and buttery caramel drizzle.'},
    {name:'Mocha',price:120,emoji:'🍫',desc:'Espresso blended with rich chocolate syrup and steamed milk.'},
    {name:'Vanilla Latte',price:120,emoji:'🌿',desc:'Sweet vanilla syrup with espresso and creamy steamed milk.'},
    {name:'Hazelnut Coffee',price:120,emoji:'🌰',desc:'Warm hazelnut notes paired with bold espresso and silky milk.'},
    {name:'Spanish Latte',price:120,emoji:'🧡',desc:'Espresso, steamed milk, and sweetened condensed milk — a Filipino favorite.'},
    {name:'Cold Brew',price:130,emoji:'🧊',desc:'Coffee steeped cold for 12+ hours — smooth, low-acid, naturally sweet.'},
  ]},
  Frappe:{icon:'🧊',color:'#1565C0',items:[
    {name:'Coffee Frappe',price:140,emoji:'☕',desc:'Blended iced coffee with a creamy, frothy top.'},
    {name:'Mocha Frappe',price:145,emoji:'🍫',desc:'Chocolate and espresso blended with ice and cream.'},
    {name:'Caramel Frappe',price:145,emoji:'🍮',desc:'Caramel-infused blended ice with whipped cream.'},
    {name:'Java Chip Frappe',price:150,emoji:'🍪',desc:'Coffee frappe loaded with chocolate chips.'},
    {name:'Vanilla Cream Frappe',price:140,emoji:'🌸',desc:'Sweet vanilla blended with cream — no coffee.'},
    {name:'Matcha Frappe',price:145,emoji:'🍵',desc:'Earthy Japanese matcha blended smooth with ice.'},
    {name:'Chocolate Frappe',price:140,emoji:'🍫',desc:'Pure chocolate blended into a thick, indulgent frappe.'},
    {name:'Oreo Frappe',price:150,emoji:'🖤',desc:'Crushed Oreo cookies blended with milk and cream.'},
    {name:'Strawberry Frappe',price:145,emoji:'🍓',desc:'Fresh strawberry flavors blended with ice and cream.'},
    {name:'Mango Frappe',price:145,emoji:'🥭',desc:'Tropical mango blended smooth with a creamy finish.'},
  ]},
  'Milk-Based':{icon:'🥛',color:'#E65100',items:[
    {name:'Classic Milk Tea',price:90,emoji:'🧋',desc:'Traditional black tea with milk and tapioca pearls.'},
    {name:'Wintermelon Milk Tea',price:95,emoji:'🌿',desc:'Sweet wintermelon tea with creamy milk and chewy pearls.'},
    {name:'Taro Milk Tea',price:95,emoji:'💜',desc:'Purple taro with rich milk tea — naturally nutty and sweet.'},
    {name:'Chocolate Milk',price:85,emoji:'🍫',desc:'Rich dark chocolate blended into creamy cold milk.'},
    {name:'Strawberry Milk',price:85,emoji:'🍓',desc:'Fresh strawberry sauce swirled into cold sweet milk.'},
    {name:'Brown Sugar Milk',price:100,emoji:'🤎',desc:'Tiger stripes of brown sugar syrup in fresh cold milk.'},
    {name:'Almond Milk Drink',price:100,emoji:'🌰',desc:'Light almond milk with a hint of vanilla.'},
  ]},
  Snack:{icon:'🥪',color:'#558B2F',noSize:true,items:[
    {name:'Clubhouse Sandwich',price:120,emoji:'🥪',desc:'Triple-decker with chicken, bacon, egg, and fresh veggies.'},
    {name:'Ham & Cheese Sandwich',price:100,emoji:'🧀',desc:'Classic deli ham with melted cheese on toasted bread.'},
    {name:'Tuna Sandwich',price:95,emoji:'🐟',desc:'Creamy tuna mix with cucumber and lettuce.'},
    {name:'French Fries',price:75,emoji:'🍟',desc:'Crispy golden fries with a light seasoning.'},
    {name:'Nachos with Cheese',price:90,emoji:'🫓',desc:'Crunchy tortilla chips loaded with warm cheese dip.'},
    {name:'Chicken Nuggets',price:95,emoji:'🍗',desc:'6-piece crispy chicken nuggets with dipping sauce.'},
    {name:'Pasta',price:80,emoji:'🍝',desc:'Classic pasta in a rich, savory tomato or cream sauce.'},
    {name:'Garlic Bread',price:70,emoji:'🥖',desc:'Toasted baguette with rich garlic butter and herbs.'},
    {name:'Hotdog Sandwich',price:75,emoji:'🌭',desc:'Grilled hotdog in a soft bun with toppings.'},
    {name:'Mini Pizza',price:110,emoji:'🍕',desc:'Mini flatbread pizza with tomato sauce and melted cheese.'},
  ]},
  Dessert:{icon:'🍰',color:'#AD1457',noSize:true,items:[
    {name:'Chocolate Cake',price:130,emoji:'🎂',desc:'Rich layered chocolate cake with ganache frosting.'},
    {name:'Cheesecake',price:130,emoji:'🍰',desc:'Creamy New York-style cheesecake on a buttery graham crust.'},
    {name:'Brownies',price:90,emoji:'🍫',desc:'Fudgy dark chocolate brownies with walnut crunch.'},
    {name:'Cookies',price:65,emoji:'🍪',desc:'Soft-baked chocolate chip cookies, fresh from the oven.'},
    {name:'Donuts',price:70,emoji:'🍩',desc:'Glazed and filled donuts in assorted flavors.'},
    {name:'Ice Cream Sundae',price:95,emoji:'🍨',desc:'Two scoops with hot fudge, nuts, and a cherry on top.'},
    {name:'Banana Split',price:105,emoji:'🍌',desc:'Classic banana split with three scoops and toppings.'},
    {name:'Leche Flan',price:85,emoji:'🟡',desc:'Silky Filipino custard with golden caramel glaze.'},
    
  ]},
};

const POPULAR=[{cat:'Coffee',name:'Caramel Macchiato'},{cat:'Coffee',name:'Spanish Latte'},{cat:'Frappe',name:'Java Chip Frappe'},{cat:'Milk-Based',name:'Brown Sugar Milk'}];
const DRINK_CATS=['Coffee','Frappe','Milk-Based'];
const TYPE_CATS=['Coffee']; // only Coffee gets Hot/Iced selector
const NO_SIZE=['Snack','Dessert'];
const SIZES=['S','M','L'];
const SIZE_ADJUST={S:-10,M:0,L:10}; // price offset per size
const STATUS_FLOW=['New','Preparing','Ready','Completed'];

function getSizePrice(basePrice, size){return basePrice + (SIZE_ADJUST[size]||0);}
function getSizeLabel(size){if(size==='S')return 'S (-₱10)';if(size==='L')return 'L (+₱10)';return 'M';}

const TABLES_DATA=Array.from({length:20},(_,i)=>{
  const id=`T${i+1}`;
  const demo={T2:'orange',T4:'green',T5:'orange',T11:'green',T12:'red',T14:'orange'};
  const st=demo[id]||'empty';
  const demoTime={T2:'3:20',T4:'1:05',T5:'5:40',T11:'0:55',T12:'4:10',T14:'6:22'};
  return{id,status:st,time:demoTime[id]||'',items:st!=='empty'?Math.floor(Math.random()*5)+2:0};
});

let ORDERS=[
  {id:'#244',table:'T4',time:'13:35',status:'Completed',elapsed:520,source:'customer',items:[{qty:1,name:'Spanish Latte',detail:'M · Hot'},{qty:2,name:'Cheesecake',detail:''}]},
  {id:'#168',table:'T2',time:'14:01',status:'Preparing',elapsed:210,source:'customer',items:[{qty:2,name:'Americano',detail:'L · Iced'},{qty:1,name:'Java Chip Frappe',detail:'L'},{qty:1,name:'French Fries',detail:''}]},
  {id:'#205',table:'T12',time:'13:35',status:'Cancelled',elapsed:600,source:'customer',items:[{qty:2,name:'Caramel Macchiato',detail:'',struck:true},{qty:1,name:'Americano',detail:'L · Iced',struck:true}]},
  {id:'#204',table:'T11',time:'15:23',status:'Ready',elapsed:380,source:'customer',items:[{qty:1,name:'Spanish Latte',detail:'M · Iced'},{qty:2,name:'Brownies',detail:''}]},
  {id:'#467',table:'T5',time:'15:23',status:'Preparing',elapsed:155,source:'customer',items:[{qty:1,name:'Matcha Latte',detail:'L · Hot'},{qty:1,name:'Spanish Latte',detail:'L · Hot'},{qty:1,name:'Garlic Bread',detail:''},{qty:1,name:'Cookies',detail:''}]},
  {id:'#148',table:'T14',time:'17:12',status:'New',elapsed:40,source:'customer',items:[{qty:2,name:'Caramel Frappe',detail:'L'},{qty:1,name:'Chicken Nuggets',detail:''},{qty:1,name:'Chocolate Cake',detail:''}]},
];

/* State */
let selectedTable=null,cart=[],currentItem=null,currentQty=1,currentType='Iced',currentSize='M',selectedPayment='Cash';
let orderCount=8,currentCat='All',searchQuery='',tableOrders={},adminFilter='New',adminSelectedTable=null;

/* Staff Manual Order State */
let staffCart=[];
let staffSelectedTable=null;
let staffPayment='Cash';
let staffCatFilter='All';
let staffSearchQ='';
let scCurrent=null,scType='Iced',scSize='M',scQty=1;

/* ── SCREENS ── */
function showScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');}
function showAdmin(){showScreen('adminApp');refreshAdmin();}

function getTableOrders(tableId){
  return ORDERS.filter(o=>o.table===tableId);
}

function selectAdminTable(tableId){
  adminSelectedTable=tableId;
  renderAdminHome();
}

/* ── TABLE PICKER ── */
function buildTablePicker(){
  const freeTables=TABLES_DATA.filter(t=>t.status==='empty');
  document.getElementById('tablePickGrid').innerHTML=freeTables.length
    ?freeTables.map(t=>{
      return `<div class="tp-card" id="tpc-${t.id}" onclick="selectTable('${t.id}')">
        <div class="tp-card-icon">○</div>
        <div class="tp-card-num">${t.id}</div>
        <div class="tp-card-label">Free</div>
      </div>`;
    }).join('')
    :`<div class="tp-empty-state"><div style="font-size:2rem;margin-bottom:.6rem;">⛔</div><div>No available tables right now.</div><div style="font-size:.88rem;color:var(--gt);margin-top:.4rem;">Please wait a moment or ask staff for assistance.</div></div>`;
}

function selectTable(id){
  selectedTable=id;
  document.querySelectorAll('.tp-card').forEach(c=>c.classList.remove('selected'));
  document.getElementById('tpc-'+id).classList.add('selected');
  const btn=document.getElementById('tpConfirmBtn');
  btn.disabled=false;btn.textContent=`Continue with ${id} →`;
}

function confirmTable(){
  if(!selectedTable)return;
  document.getElementById('tableBadge').textContent=selectedTable;
  document.getElementById('cartTblInfo').textContent=`Ordering for ${selectedTable}`;
  document.getElementById('tvTableNum').textContent=selectedTable;
  buildCatBar();renderMain();showScreen('orderApp');
}

/* ── HELPERS ── */
function getItem(cat,name){return MENU[cat]?.items.find(i=>i.name===name);}
function fp(p){return `₱${p.toLocaleString()}`;}
function getEmoji(name){for(const[,d]of Object.entries(MENU)){const f=d.items.find(x=>x.name===name);if(f)return f.emoji;}return'🍽️';}
function getPrice(name){for(const[,d]of Object.entries(MENU)){const f=d.items.find(x=>x.name===name);if(f)return f.price;}return 100;}
function getCat(name){for(const[cat,d]of Object.entries(MENU)){if(d.items.find(x=>x.name===name))return cat;}return'';}

function imgThumb(name,cls,eCls){
  const src=ITEM_IMAGES[name],e=getEmoji(name);
  if(src)return`<img class="${cls}" src="${src}" alt="${name}" loading="lazy" onerror="this.outerHTML='<div class=\\'${eCls}\\'>${e}</div>'">`;
  return`<div class="${eCls}">${e}</div>`;
}

/* ── CATEGORY BAR ── */
function buildCatBar(){
  const bar=document.getElementById('catBar');
  const cats=['All',...Object.keys(MENU)];
  bar.innerHTML=cats.map(c=>{
    const isAll=c==='All';
    const thumb=isAll?`<div class="cat-emoji">🍽️</div>`:CAT_IMAGES[c]
      ?`<img src="${CAT_IMAGES[c]}" alt="${c}" onerror="this.outerHTML='<div class=cat-emoji>${MENU[c].icon}</div>'">`
      :`<div class="cat-emoji">${MENU[c].icon}</div>`;
    return`<button class="cat-chip${c===currentCat?' active':''}" onclick="selectCat('${c}')">${thumb}${c}</button>`;
  }).join('');
}

function selectCat(cat){currentCat=cat;searchQuery='';document.getElementById('searchInput').value='';buildCatBar();renderMain();}
function handleSearch(){searchQuery=document.getElementById('searchInput').value.toLowerCase();currentCat='All';buildCatBar();renderMain();}

/* ── MENU RENDER ── */
function renderMain(){
  const el=document.getElementById('mainContent');
  if(searchQuery){
    const res=[];
    for(const[cat,d]of Object.entries(MENU))for(const item of d.items)
      if(item.name.toLowerCase().includes(searchQuery)||cat.toLowerCase().includes(searchQuery))res.push({...item,cat});
    el.innerHTML=res.length
      ?`<div class="section-title">Results (${res.length})</div><div class="items-grid">${res.map(i=>itemCard(i,i.cat)).join('')}</div>`
      :`<div class="no-results"><div style="font-size:2.5rem;margin-bottom:0.7rem;">🔍</div><p>No results for "<strong>${searchQuery}</strong>"</p></div>`;
    return;
  }
  let html='';
  if(currentCat==='All'){
    const pop=POPULAR.map(p=>({...getItem(p.cat,p.name),cat:p.cat,popular:true}));
    html+=`<div class="section-title">⭐ Popular</div><div class="items-grid">${pop.map(i=>itemCard(i,i.cat,true)).join('')}</div>`;
    const all=[];for(const[cat,d]of Object.entries(MENU))for(const item of d.items)all.push({...item,cat});
    html+=`<div class="section-title">All Items</div><div class="items-grid">${all.map(i=>itemCard(i,i.cat)).join('')}</div>`;
  }else{
    const d=MENU[currentCat];
    html+=`<div class="section-title">${d.icon} ${currentCat}</div><div class="items-grid">${d.items.map(i=>itemCard(i,currentCat)).join('')}</div>`;
  }
  el.innerHTML=html;
}

function itemCard(item,cat,isPopular=false){
  const src=ITEM_IMAGES[item.name];
  const thumb=src
    ?`<img class="item-thumb" src="${src}" alt="${item.name}" loading="lazy" onerror="this.outerHTML='<div class=item-thumb-e>${item.emoji}</div>'">`
    :`<div class="item-thumb-e">${item.emoji}</div>`;
  return`<div class="item-card" onclick="openModal('${cat}','${item.name.replace(/'/g,"\\'")}')">
    ${isPopular?`<div class="popular-badge">⭐ Popular</div>`:''}
    ${thumb}
    <div class="item-info">
      <div class="item-name">${item.name}</div>
      <div class="item-cat-lbl">${cat}</div>
      <div class="item-footer">
        <div class="item-price">${fp(item.price)}</div>
        <button class="add-btn" onclick="event.stopPropagation();quickAdd('${cat}','${item.name.replace(/'/g,"\\'")}')">+</button>
      </div>
    </div>
  </div>`;
}

/* ── MODAL ── */
function openModal(cat,name){
  const item=getItem(cat,name);
  currentItem={...item,cat};currentQty=1;
  currentType=TYPE_CATS.includes(cat)?'Iced':null;
  currentSize=NO_SIZE.includes(cat)?null:'M';
  const wrap=document.getElementById('modalImgWrap');
  const closeBtn=`<button class="modal-close" onclick="closeModal()">✕</button>`;
  const src=ITEM_IMAGES[name];
  if(src)wrap.innerHTML=`${closeBtn}<img src="${src}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy" onerror="this.outerHTML='<div class=modal-img-emoji style=background:${MENU[cat].color}22>${item.emoji}</div>'">`;
  else wrap.innerHTML=`${closeBtn}<div class="modal-img-emoji" style="background:${MENU[cat].color}22;">${item.emoji}</div>`;
  document.getElementById('modalName').textContent=item.name;
  document.getElementById('modalCat').textContent=cat;
  document.getElementById('modalDesc').textContent=item.desc;
  document.getElementById('qtyVal').textContent=1;
  document.getElementById('itemNote').value='';
  // Type selector — Coffee only
  const ts=document.getElementById('typeSection');
  if(TYPE_CATS.includes(cat)){ts.style.display='';document.getElementById('typeOpts').innerHTML=['Hot','Iced'].map(t=>`<button class="opt-btn${t===currentType?' selected':''}" onclick="selType('${t}')">${t}</button>`).join('');}
  else ts.style.display='none';
  // Size selector
  const ss=document.getElementById('sizeSection');
  if(NO_SIZE.includes(cat)){ss.style.display='none';}
  else{ss.style.display='';renderModalSizeOpts(item.price);}
  updateModalPrice();
  document.getElementById('productModal').classList.add('open');
}

function renderModalSizeOpts(basePrice){
  document.getElementById('sizeOpts').innerHTML=SIZES.map(s=>{
    const adj=SIZE_ADJUST[s];
    const label=s+(adj>0?` +₱${adj}`:adj<0?` -₱${Math.abs(adj)}`:'');
    return`<button class="opt-btn${s===currentSize?' selected':''}" onclick="selSize('${s}',${basePrice})">${label}</button>`;
  }).join('');
}

function updateModalPrice(){
  if(!currentItem)return;
  const base=currentItem.price;
  const adj=currentSize?SIZE_ADJUST[currentSize]||0:0;
  document.getElementById('modalPrice').textContent=fp(base+adj);
}
function closeModal(){document.getElementById('productModal').classList.remove('open');}
function handleModalClick(e){if(e.target===document.getElementById('productModal'))closeModal();}
function selType(t){currentType=t;document.querySelectorAll('#typeOpts .opt-btn').forEach(b=>b.classList.toggle('selected',b.textContent===t));}
function selSize(s,basePrice){currentSize=s;if(currentItem&&basePrice==null)basePrice=currentItem.price;renderModalSizeOpts(basePrice||currentItem.price);updateModalPrice();}
function changeQty(d){currentQty=Math.max(1,currentQty+d);document.getElementById('qtyVal').textContent=currentQty;}

function addToCart(){
  if(!currentItem)return;
  const note=document.getElementById('itemNote').value;
  const adjPrice=currentItem.price+(currentSize?SIZE_ADJUST[currentSize]||0:0);
  const key=`${currentItem.name}-${currentType||''}-${currentSize||''}`;
  const ex=cart.find(i=>i.key===key);
  if(ex)ex.qty+=currentQty;
  else cart.push({key,name:currentItem.name,cat:currentItem.cat,price:adjPrice,emoji:currentItem.emoji,type:currentType,size:currentSize,note,qty:currentQty});
  updateCartCount();closeModal();showToast(`${currentItem.name} added!`);
}

function quickAdd(cat,name){
  const item=getItem(cat,name);
  const key=`${name}-q`;
  const ex=cart.find(i=>i.key===key);
  if(ex)ex.qty++;
  else cart.push({key,name,cat,price:item.price,emoji:item.emoji,type:TYPE_CATS.includes(cat)?'Iced':null,size:NO_SIZE.includes(cat)?null:'M',note:'',qty:1});
  updateCartCount();showToast(`${name} added!`);
}

function updateCartCount(){document.getElementById('cartCount').textContent=cart.reduce((s,i)=>s+i.qty,0);}
function openCart(){renderCart();document.getElementById('cartOverlay').classList.add('open');}
function closeCart(){document.getElementById('cartOverlay').classList.remove('open');}
function handleCartClick(e){if(e.target===document.getElementById('cartOverlay'))closeCart();}

/* ── CART ── */
function renderCart(){
  const el=document.getElementById('cartItems'),ft=document.getElementById('cartFooter');
  if(!cart.length){
    el.innerHTML=`<div class="empty-cart"><div style="font-size:2.5rem;margin-bottom:0.7rem;">🛒</div><p>Cart is empty</p><p style="font-size:.78rem;margin-top:.35rem;color:var(--gt)">Browse the menu and add items</p></div>`;
    ft.innerHTML='';return;
  }
  el.innerHTML=cart.map((item,idx)=>{
    const d=[item.type,item.size?`Size ${item.size}`:''].filter(Boolean).join(' · ');
    const src=ITEM_IMAGES[item.name];
    const thumb=src
      ?`<img class="ci-thumb" src="${src}" alt="${item.name}" loading="lazy" onerror="this.outerHTML='<div class=ci-thumb-e>${item.emoji}</div>'">`
      :`<div class="ci-thumb-e">${item.emoji}</div>`;
    return`<div class="cart-item">
      ${thumb}
      <div class="ci-info">
        <div class="ci-name">${item.name}</div>
        <div class="ci-detail">${d}${item.note?` · "${item.note}"`:''}
        </div>
        <div class="ci-row">
          <button class="cqb" onclick="cqChange(${idx},-1)">−</button>
          <span style="font-weight:600;font-size:.82rem;">${item.qty}</span>
          <button class="cqb" onclick="cqChange(${idx},1)">+</button>
          <div class="ci-price">${fp(item.price*item.qty)}</div>
          <button class="rm-btn" onclick="removeItem(${idx})">✕</button>
        </div>
      </div>
    </div>`;
  }).join('');
  const sub=cart.reduce((s,i)=>s+i.price*i.qty,0);
  ft.innerHTML=`
    <div class="pay-section"><h3>Payment Method</h3>
      <div class="pay-opts">${['Cash','GCash','Card'].map(p=>`<div class="pay-opt${p===selectedPayment?' selected':''}" onclick="selPay('${p}')">${p}</div>`).join('')}</div>
    </div>
    <div class="totals">
      <div class="total-row"><span>Subtotal</span><span>${fp(sub)}</span></div>
      <div class="total-row"><span>Discount</span><span>₱0</span></div>
      <div class="total-row big"><span>Total</span><span>${fp(sub)}</span></div>
    </div>
    <button class="place-order-btn" onclick="placeOrder()">Place Order for ${selectedTable||'—'}</button>`;
}

function cqChange(idx,d){cart[idx].qty=Math.max(1,cart[idx].qty+d);updateCartCount();renderCart();}
function removeItem(idx){cart.splice(idx,1);updateCartCount();renderCart();}
function selPay(p){selectedPayment=p;renderCart();}

/* ── PLACE ORDER (customer) ── */
function placeOrder(){
  if(!cart.length)return;
  orderCount++;
  const now=new Date();
  const eta=new Date(now.getTime()+10*60000);
  const fmt=d=>d.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'});
  const oid=`#${orderCount}`;
  const newOrder={id:oid,table:selectedTable,time:fmt(now),status:'New',elapsed:0,source:'customer',
    items:cart.map(i=>({qty:i.qty,name:i.name,detail:[i.type,i.size?`Size ${i.size}`:''].filter(Boolean).join(' · ')}))};  ORDERS.unshift(newOrder);

  // update tableOrders and table state
  if(!tableOrders[selectedTable])tableOrders[selectedTable]=[];
  tableOrders[selectedTable].unshift(oid);
  const t=TABLES_DATA.find(x=>x.id===selectedTable);
  if(t){t.status='orange';t.time='0:30';t.items=cart.reduce((s,i)=>s+i.qty,0);} 
  adminSelectedTable=selectedTable;

  // refresh staff dashboard immediately
  refreshAdmin();

  // clear cart and show success
  cart=[];updateCartCount();closeCart();
  document.getElementById('orderNum').textContent=oid;
  document.getElementById('ticketTbl').textContent=selectedTable;
  document.getElementById('etaTime').textContent=`${fmt(now)} – ${fmt(eta)}`;
  document.getElementById('successOverlay').classList.add('open');
  setTimeout(()=>advanceOrder(oid,'Preparing'),4000);
  setTimeout(()=>advanceOrder(oid,'Ready'),13000);
  setTimeout(()=>advanceOrder(oid,'Completed'),24000);
}

function advanceOrder(oid,ns){
  const o=ORDERS.find(x=>x.id===oid);
  if(o&&STATUS_FLOW.indexOf(ns)>STATUS_FLOW.indexOf(o.status))o.status=ns;
  if(document.getElementById('tableViewScreen').classList.contains('active'))renderTableView();
  if(document.getElementById('panel-orders').classList.contains('active'))renderOrdersAdmin();
  updateOrderCounts();renderAdminHome();
}

function afterOrder(){document.getElementById('successOverlay').classList.remove('open');renderTableView();showScreen('tableViewScreen');}
function goTableView(){renderTableView();showScreen('tableViewScreen');}

/* ── TABLE VIEW ── */
function renderTableView(){
  const tblOrders=(tableOrders[selectedTable]||[]).map(oid=>ORDERS.find(o=>o.id===oid)).filter(Boolean);
  document.getElementById('tvTableNum').textContent=selectedTable||'—';
  const latest=tblOrders[0];
  const steps=['New','Preparing','Ready','Completed'],labels=['Order Placed','In Kitchen','Ready','Done'],icons=['📋','🔥','✅','🎉'];
  const curIdx=latest?steps.indexOf(latest.status):-1;
  document.getElementById('tvOrderId').textContent=latest?`Latest: ${latest.id} · ${latest.time}`:'No orders yet';
  document.getElementById('tvStatusTrack').innerHTML=steps.map((s,i)=>{
    const cls=i<curIdx?'done':i===curIdx?'active':'';
    return`<div class="tv-step ${cls}"><div class="tv-step-dot">${icons[i]}</div><div class="tv-step-lbl">${labels[i]}</div></div>`;
  }).join('');
  if(!tblOrders.length){
    document.getElementById('tvOrderItems').innerHTML=`<div style="color:var(--gt);text-align:center;padding:1.5rem 0;font-size:.85rem;">No items yet — go to Menu to order!</div>`;
    document.getElementById('tvTotalBox').style.display='none';return;
  }
  let allItems=[],total=0;
  tblOrders.forEach(o=>o.items.forEach(i=>allItems.push({...i,orderId:o.id})));
  allItems.forEach(i=>{total+=getPrice(i.name)*i.qty;});
  document.getElementById('tvOrderItems').innerHTML=allItems.map(i=>{
    const src=ITEM_IMAGES[i.name],e=getEmoji(i.name);
    const thumb=src?`<img class="tv-ithumb" src="${src}" alt="${i.name}" loading="lazy" onerror="this.outerHTML='<div class=tv-ithumb-e>${e}</div>'">`:`<div class="tv-ithumb-e">${e}</div>`;
    return`<div class="tv-order-item">
      ${thumb}
      <div style="flex:1;"><div class="tv-iname">${i.name}</div><div class="tv-idetail">${i.detail||'Standard'} · ${i.orderId}</div></div>
      <div style="text-align:right;"><div class="tv-iprice">×${i.qty}</div><div style="font-size:.68rem;color:var(--gt);">${fp(getPrice(i.name)*i.qty)}</div></div>
    </div>`;
  }).join('');
  const tax=Math.round(total*0.05);
  document.getElementById('tvTotalBox').style.display='';
  document.getElementById('tvTotalBox').innerHTML=`
    <div class="tv-trow"><span>Items</span><span>${fp(total)}</span></div>
    <div class="tv-trow"><span>Tax (5%)</span><span>${fp(tax)}</span></div>
    <div class="tv-trow big"><span>Total</span><span>${fp(total+tax)}</span></div>`;
}

/* ══════════════════════════════════════════
   STAFF MANUAL ORDER FUNCTIONS
══════════════════════════════════════════ */

function buildStaffMenu(){
  // Category tabs
  const cats=['All',...Object.keys(MENU)];
  document.getElementById('staffCatTabs').innerHTML=cats.map(c=>
    `<button class="staff-cat-tab${c===staffCatFilter?' active':''}" onclick="staffSetCat('${c}')">${c==='All'?'All':MENU[c].icon+' '+c}</button>`
  ).join('');

  // Items grid
  let items=[];
  if(staffSearchQ){
    for(const[cat,d]of Object.entries(MENU))for(const item of d.items)
      if(item.name.toLowerCase().includes(staffSearchQ)||cat.toLowerCase().includes(staffSearchQ))items.push({...item,cat});
  } else if(staffCatFilter==='All'){
    for(const[cat,d]of Object.entries(MENU))for(const item of d.items)items.push({...item,cat});
  } else {
    const d=MENU[staffCatFilter];
    if(d)items=d.items.map(i=>({...i,cat:staffCatFilter}));
  }

  document.getElementById('staffItemsGrid').innerHTML=items.length?items.map(item=>{
    const src=ITEM_IMAGES[item.name];
    const thumb=src
      ?`<img class="staff-item-img" src="${src}" alt="${item.name}" loading="lazy" onerror="this.outerHTML='<div class=staff-item-emoji>${item.emoji}</div>'">`
      :`<div class="staff-item-emoji">${item.emoji}</div>`;
    return`<div class="staff-item" onclick="staffOpenCust('${item.cat}','${item.name.replace(/'/g,"\\'")}')">
      ${thumb}
      <div class="staff-item-name">${item.name}</div>
      <div class="staff-item-meta">
        <span class="staff-item-price">${fp(item.price)}</span>
        <span class="staff-item-cat">${item.cat}</span>
      </div>
    </div>`;
  }).join(''):`<div style="grid-column:1/-1;text-align:center;padding:2rem;color:var(--gt);font-size:0.84rem;">No items found.</div>`;
}

function staffSetCat(cat){
  staffCatFilter=cat;staffSearchQ='';
  document.getElementById('staffSearchInput').value='';
  buildStaffMenu();
}

function staffHandleSearch(){
  staffSearchQ=document.getElementById('staffSearchInput').value.toLowerCase();
  staffCatFilter='All';buildStaffMenu();
}

/* Staff table selector */
function buildStaffTableSel(){
  document.getElementById('staffTblSel').innerHTML=TABLES_DATA.map(t=>{
    const occ=t.status!=='empty';
    return`<button class="staff-tbl-btn${occ?' occupied':''}${staffSelectedTable===t.id?' active':''}" onclick="staffSelTable('${t.id}')">${t.id}</button>`;
  }).join('');
}

function staffSelTable(id){
  staffSelectedTable=id;
  buildStaffTableSel();
  staffRenderOrderItems();
  staffRenderFooter();
}

/* Staff customization modal */
function staffOpenCust(cat,name){
  const item=getItem(cat,name);
  scCurrent={...item,cat};scQty=1;
  scType=TYPE_CATS.includes(cat)?'Iced':null;
  scSize=NO_SIZE.includes(cat)?null:'M';
  document.getElementById('scItemName').textContent=name+' — '+fp(item.price);
  document.getElementById('scQtyVal').textContent=1;
  document.getElementById('scNote').value='';
  // Type — Coffee only
  const ts=document.getElementById('scTypeSection');
  if(TYPE_CATS.includes(cat)){
    ts.style.display='';
    document.getElementById('scTypeOpts').innerHTML=['Hot','Iced'].map(t=>
      `<button class="sc-btn${t===scType?' sel':''}" onclick="scSelType('${t}')">${t}</button>`).join('');
  } else ts.style.display='none';
  // Size with price labels
  const ss=document.getElementById('scSizeSection');
  if(NO_SIZE.includes(cat)){ss.style.display='none';}
  else{
    ss.style.display='';
    renderScSizeOpts(item.price);
  }
  updateScPrice();
  document.getElementById('staffCustOverlay').classList.add('open');
}

function renderScSizeOpts(basePrice){
  document.getElementById('scSizeOpts').innerHTML=SIZES.map(s=>{
    const adj=SIZE_ADJUST[s];
    const label=s+(adj>0?` +₱${adj}`:adj<0?` -₱${Math.abs(adj)}`:'');
    return`<button class="sc-btn${s===scSize?' sel':''}" onclick="scSelSize('${s}',${basePrice})">${label}</button>`;
  }).join('');
}

function updateScPrice(){
  if(!scCurrent)return;
  const adj=scSize?SIZE_ADJUST[scSize]||0:0;
  document.getElementById('scItemName').textContent=scCurrent.name+' — '+fp(scCurrent.price+adj);
}

function closeStaffCust(){document.getElementById('staffCustOverlay').classList.remove('open');}
function scSelType(t){scType=t;document.querySelectorAll('#scTypeOpts .sc-btn').forEach(b=>b.classList.toggle('sel',b.textContent===t));}
function scSelSize(s,basePrice){scSize=s;if(scCurrent&&basePrice==null)basePrice=scCurrent.price;renderScSizeOpts(basePrice||scCurrent.price);updateScPrice();}
function scChangeQty(d){scQty=Math.max(1,scQty+d);document.getElementById('scQtyVal').textContent=scQty;}

function scConfirmAdd(){
  if(!scCurrent)return;
  const note=document.getElementById('scNote').value;
  const adjPrice=scCurrent.price+(scSize?SIZE_ADJUST[scSize]||0:0);
  const key=`staff-${scCurrent.name}-${scType||''}-${scSize||''}`;
  const ex=staffCart.find(i=>i.key===key);
  if(ex)ex.qty+=scQty;
  else staffCart.push({key,name:scCurrent.name,cat:scCurrent.cat,price:adjPrice,emoji:scCurrent.emoji,type:scType,size:scSize,note,qty:scQty});
  closeStaffCust();
  staffRenderOrderItems();
  staffRenderFooter();
  showToast(`${scCurrent.name} added to staff order!`);
}

function staffRenderOrderItems(){
  const el=document.getElementById('staffOrderItems');
  if(!staffCart.length){
    el.innerHTML=`<div class="staff-empty-order"><div style="font-size:2rem;margin-bottom:.5rem;">🛒</div><p>Tap any item from the menu to add it here</p></div>`;
    return;
  }
  el.innerHTML=staffCart.map((item,idx)=>{
    const detail=[item.type,item.size?`${item.size}`:''].filter(Boolean).join(' · ');
    return`<div class="staff-order-line">
      <div class="staff-ol-emoji">${item.emoji}</div>
      <div class="staff-ol-info">
        <div class="staff-ol-name">${item.name}</div>
        <div class="staff-ol-detail">${detail}${item.note?` · "${item.note}"`:''}
        </div>
      </div>
      <div class="staff-ol-qty">
        <button class="staff-sqb" onclick="staffQtyChange(${idx},-1)">−</button>
        <span class="staff-ol-q">${item.qty}</span>
        <button class="staff-sqb" onclick="staffQtyChange(${idx},1)">+</button>
      </div>
      <div class="staff-ol-price">${fp(item.price*item.qty)}</div>
      <button class="staff-ol-rm" onclick="staffRemove(${idx})">✕</button>
    </div>`;
  }).join('');
}

function staffQtyChange(idx,d){
  staffCart[idx].qty=Math.max(1,staffCart[idx].qty+d);
  staffRenderOrderItems();staffRenderFooter();
}

function staffRemove(idx){
  staffCart.splice(idx,1);
  staffRenderOrderItems();staffRenderFooter();
}

function staffClearOrder(){
  staffCart=[];staffSelectedTable=null;
  buildStaffTableSel();
  staffRenderOrderItems();staffRenderFooter();
  document.getElementById('staffSuccessBanner').classList.remove('show');
}

function staffRenderFooter(){
  // Payment
  document.getElementById('staffPayRow').innerHTML=['Cash','GCash','Card'].map(p=>
    `<button class="staff-pay-btn${p===staffPayment?' active':''}" onclick="staffSelPay('${p}')">${p}</button>`).join('');

  const sub=staffCart.reduce((s,i)=>s+i.price*i.qty,0);
  const discount=Math.max(0,parseInt(document.getElementById('staffDiscount')?.value||0)||0);
  const tax=Math.round((sub-discount)*0.05);
  const total=Math.max(0,sub-discount+tax);

  document.getElementById('staffTotals').innerHTML=`
    <div class="staff-tot-row"><span>Subtotal</span><span>${fp(sub)}</span></div>
    <div class="staff-tot-row"><span>Discount</span><span>-${fp(discount)}</span></div>
    <div class="staff-tot-row"><span>Tax (5%)</span><span>${fp(tax)}</span></div>
    <div class="staff-tot-row big"><span>Total</span><span>${fp(total)}</span></div>`;

  const btn=document.getElementById('staffPlaceBtn');
  const canPlace=staffCart.length>0 && staffSelectedTable;
  btn.disabled=!canPlace;
  btn.textContent=canPlace?`Place Order for ${staffSelectedTable} — ${fp(total)}`:`Select table & add items`;
}

function staffSelPay(p){staffPayment=p;staffRenderFooter();}

/* Staff Place Order */
function staffPlaceOrder(){
  if(!staffCart.length||!staffSelectedTable)return;
  orderCount++;
  const now=new Date();
  const fmt=d=>d.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'});
  const oid=`#${orderCount}`;
  const discount=Math.max(0,parseInt(document.getElementById('staffDiscount')?.value||0)||0);

  const newOrder={
    id:oid,
    table:staffSelectedTable,
    time:fmt(now),
    status:'New',
    elapsed:0,
    source:'staff',
    payment:staffPayment,
    discount,
    items:staffCart.map(i=>({qty:i.qty,name:i.name,detail:[i.type,i.size?`${i.size}`:''].filter(Boolean).join(' · ')}))
  };

  ORDERS.unshift(newOrder);
  if(!tableOrders[staffSelectedTable])tableOrders[staffSelectedTable]=[];
  tableOrders[staffSelectedTable].unshift(oid);
  adminSelectedTable=staffSelectedTable;

  // Update table state
  const t=TABLES_DATA.find(x=>x.id===staffSelectedTable);
  if(t){t.status='orange';t.time='0:00';t.items=staffCart.reduce((s,i)=>s+i.qty,0);}

  // Show success banner
  document.getElementById('staffSuccessId').textContent=`Order ${oid} for ${staffSelectedTable}`;
  const banner=document.getElementById('staffSuccessBanner');
  banner.classList.add('show');
  setTimeout(()=>banner.classList.remove('show'),4000);

  showToast(`Staff order ${oid} placed for ${staffSelectedTable}!`);

  // Auto-advance to Preparing
  setTimeout(()=>advanceOrder(oid,'Preparing'),3000);
  setTimeout(()=>advanceOrder(oid,'Ready'),11000);
  setTimeout(()=>advanceOrder(oid,'Completed'),22000);

  // Reset
  staffCart=[];
  document.getElementById('staffDiscount').value='0';
  buildStaffTableSel();
  staffRenderOrderItems();
  staffRenderFooter();
  updateOrderCounts();
  renderAdminHome();
}

/* ══════════════════════════════════════════
   ADMIN FUNCTIONS
══════════════════════════════════════════ */
function refreshAdmin(){renderAdminHome();renderOrdersAdmin();renderAdminMenu();updateOrderCounts();buildStaffMenu();buildStaffTableSel();staffRenderFooter();}

function switchAdminPanel(name,btn){
  document.querySelectorAll('.sidebar-item').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  document.querySelectorAll('.admin-panel').forEach(p=>p.classList.remove('active'));document.getElementById('panel-'+name).classList.add('active');
  const titles={home:'Dashboard',orders:'Order Monitor (KDS)',menu:'Staff — Manual Order'};
  document.getElementById('adminPanelTitle').textContent=titles[name]||'Dashboard';
  if(name==='home')renderAdminHome();
  if(name==='orders')renderOrdersAdmin();
  if(name==='menu'){buildStaffMenu();buildStaffTableSel();staffRenderFooter();}
}

function tblCardClass(t){
  if(t.status==='empty')return'empty';if(t.status==='red')return'occ-r';if(t.status==='orange')return'occ-o';return'occ-g';
}

function renderAdminHome(){
  if(!adminSelectedTable && TABLES_DATA.length)adminSelectedTable=TABLES_DATA[0].id;
  const occ=TABLES_DATA.filter(t=>t.status!=='empty');
  document.getElementById('stat-total').textContent=ORDERS.length;
  document.getElementById('stat-new').textContent=ORDERS.filter(o=>o.status==='New').length;
  document.getElementById('stat-prep').textContent=ORDERS.filter(o=>o.status==='Preparing').length;
  document.getElementById('stat-tbls').textContent=occ.length;

  const selectedTable=adminSelectedTable;
  document.getElementById('homeTableGrid').innerHTML=TABLES_DATA.map(t=>`
    <div class="tbl-card ${tblCardClass(t)}${t.id===selectedTable?' selected':''}" onclick="selectAdminTable('${t.id}')">
      <div class="tbl-hd"><span class="tbl-name">${t.id}</span>${t.time?`<span class="tbl-time ${t.status}">${t.time}</span>`:''}</div>
      <div class="tbl-status">${t.status==='empty'?'Available':`${t.items} items`}</div>
    </div>`).join('');

  const tableOrders=getTableOrders(selectedTable);
  document.getElementById('homeTableOrders').innerHTML=`
    <div class="home-table-orders-panel">
      <div class="hto-header">
        <div class="hto-title">Table ${selectedTable}</div>
        <div class="hto-meta">${tableOrders.length} order${tableOrders.length===1?'':'s'}</div>
      </div>
      ${tableOrders.length ? tableOrders.map(o=>`
        <div class="table-order-card">
          <div class="order-card-hd st-${o.status}">
            <div><div class="oh-meta">${o.time} · <span class="oh-tbl">${o.table}</span>${o.source==='staff'?`<span class="staff-badge">STAFF</span>`:''}</div></div>
            <div class="oh-id">${o.id}</div>
          </div>
          <div class="order-body">
            ${o.items.map(i=>`<div class="order-line${i.struck?' struck':''}"><span class="ol-qty">${i.qty}×</span><div><div class="ol-name">${i.name}</div>${i.detail?`<div class="ol-detail">${i.detail}</div>`:''}</div></div>`).join('')}
          </div>
          <div class="order-card-ft"><span class="s-pill s-${o.status}">${o.status}</span></div>
        </div>
      `).join('') : `<div class="no-table-orders">No orders for ${selectedTable} yet.</div>`}
    </div>`;
}

function updateOrderCounts(){
  ['New','Preparing','Ready','Completed'].forEach(s=>{const el=document.getElementById('cnt-'+s);if(el)el.textContent=ORDERS.filter(o=>o.status===s).length;});
}

function filterOrders(status,btn){
  adminFilter=status;
  document.querySelectorAll('.kds-tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  renderOrdersAdmin();
}

function renderOrdersAdmin(){
  const filtered=adminFilter==='All'?ORDERS:ORDERS.filter(o=>o.status===adminFilter);
  const grid=document.getElementById('ordersGrid');
  if(!filtered.length){grid.innerHTML=`<p style="color:var(--gt);padding:1rem;grid-column:1/-1;">No orders here.</p>`;return;}
  grid.innerHTML=filtered.map(o=>{
    const canAdv=STATUS_FLOW.includes(o.status)&&o.status!=='Completed';
    const elapsed=o.elapsed||0;const m=Math.floor(elapsed/60),sec=elapsed%60;
    const timerLabel=`${m}:${sec.toString().padStart(2,'0')}`;
    const nextLabel={New:'→ Preparing',Preparing:'→ Ready',Ready:'→ Done'}[o.status]||'';
    const srcBadge=o.source==='staff'?`<span style="background:rgba(212,168,67,0.25);color:var(--gold);font-size:0.6rem;padding:1px 6px;border-radius:10px;margin-left:4px;">STAFF</span>`:'';
    return`<div class="order-card">
      <div class="order-card-hd st-${o.status}">
        <div><div class="oh-meta">${o.time} · <span class="oh-tbl">${o.table}</span>${srcBadge}</div></div>
        <div class="oh-id">${o.id}</div>
      </div>
      ${(o.status==='New'||o.status==='Preparing')?`<div class="order-timer${o.status==='Preparing'&&elapsed>180?' warn':''}">⏱ ${timerLabel}</div>`:''}
      <div class="order-body">
        ${o.items.map(i=>`<div class="order-line${i.struck?' struck':''}">
          <span class="ol-qty">${i.qty}×</span>
          <div><div class="ol-name">${i.name}</div>${i.detail?`<div class="ol-detail">${i.detail}</div>`:''}</div>
        </div>`).join('')}
      </div>
      <div class="order-card-ft">
        <span class="s-pill s-${o.status}">${o.status}</span>
        ${canAdv?`<button class="adv-btn adv-${o.status}" onclick="advanceOrderBtn('${o.id}')">${nextLabel}</button>`:''}
      </div>
    </div>`;
  }).join('');
}

function advanceOrderBtn(oid){
  const o=ORDERS.find(x=>x.id===oid);if(!o)return;
  const idx=STATUS_FLOW.indexOf(o.status);
  if(idx<STATUS_FLOW.length-1){o.status=STATUS_FLOW[idx+1];renderOrdersAdmin();updateOrderCounts();renderAdminHome();}
}

function renderAdminMenu(){
  // kept for compat — staff panel now replaces this
}

function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200);
}

/* Live elapsed timer */
setInterval(()=>{
  ORDERS.forEach(o=>{if(o.status==='New'||o.status==='Preparing')o.elapsed=(o.elapsed||0)+1;});
  if(document.getElementById('panel-orders').classList.contains('active'))renderOrdersAdmin();
  if(document.getElementById('panel-home').classList.contains('active'))renderAdminHome();
},1000);

/* INIT */
buildTablePicker();
