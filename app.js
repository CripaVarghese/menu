
const items=document.querySelector(".items");
const breakfast=document.getElementById("breakfast"); 
const lunch=document.getElementById("lunch"); 
const shakes=document.getElementById("shakes"); 
 
const menuItems=[
    {
        id:1,
        type:"Breakfast",
        image:'images/pancakes.jpeg',
        name:'Buttermilk Pancakres1',
        price:'$15.99',
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nibh, tristique et tincidunt non, tincidunt ut est. Integer iaculis odio erat.", 
    },
    {
        id:2,
        type:"Lunch",
        image:'images/milkshake.jpeg',
        name:'Buttermilk Pancakres2',
        price:'$15.99',
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nibh, tristique et tincidunt non, tincidunt ut est. Integer iaculis odio erat.", 

    },
    {
        id:3,
        type:"Shakes",
        image:'images/godzilla.jpeg',
        name:'Buttermilk Pancakres3',
        price:'$15.99',
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nibh, tristique et tincidunt non, tincidunt ut est. Integer iaculis odio erat.", 
    },
    {
        id:4,
        type:"Breakfast",
        image:'images/oreo dream.jpeg',
        name:'Buttermilk Pancakres4',
        price:'$15.99',
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nibh, tristique et tincidunt non, tincidunt ut est. Integer iaculis odio erat.", 
    },
    {
        id:5,
        type:"Lunch",
        image:'images/godzilla.jpeg',
        name:'Buttermilk Pancakres5',
        price:'$15.99',
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nibh, tristique et tincidunt non, tincidunt ut est. Integer iaculis odio erat.", 
    },
    {
        id:6,
        type:"Shakes",
        image:'images/pancakes.jpeg',
        name:'Buttermilk Pancakres6',
        price:'$15.99',
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nibh, tristique et tincidunt non, tincidunt ut est. Integer iaculis odio erat.", 
    }
];

breakfast.addEventListener("click",() => {
                     
    let filterArray = menuItems.filter(function(arrayNew) {    
        return arrayNew.type === "Breakfast"                
    });

    items.innerHTML= filterArray.map((itemm,index) => {                
        return renderItem(itemm);
    });
                
});  
lunch.addEventListener("click",() => {
    
    let filterArray = menuItems.filter(function(arrayNew) {    
        return arrayNew.type === "Lunch"        
    });
    
    items.innerHTML = filterArray.map((itemm,index) => {
        return renderItem(itemm);         
    });

});

shakes.addEventListener("click",() => {

    let filterArray = menuItems.filter(function(arrayNew) {    
        return arrayNew.type === "Shakes"        
    });
    
    items.innerHTML = filterArray.map((itemm,index) => {
        return renderItem(itemm);  
    });
                       
});

const renderItem = (itemm)=> {

       return `<div class="item">
                    <div class="item_image">
                        <img src="${itemm.image}" alt="">
                    </div>
                    <div class="item_details">
                        <div class="name_price">
                            <div class="item_name">${itemm.name}</div>
                            <div class="item_price">${itemm.price}</div>
                        </div>
                        <div class="item_info">${itemm.info}</div>
                    </div> 
                </div>`
    
}





















































