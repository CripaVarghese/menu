/* < >  => {} */

const items=document.querySelector(".items");
const all=document.getElementById("all"); 
const breakfast=document.getElementById("breakfast"); 
const lunch=document.getElementById("lunch"); 
const shakes=document.getElementById("shakes"); 
 
const arrays=[
    {
        id:1,
        category:1,
        image:'images/pancakes.jpeg',
        name:'Buttermilk Pancakres1',
        price:'$15.99',
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nibh, tristique et tincidunt non, tincidunt ut est. Integer iaculis odio erat.", 

    },
    {
        id:2,
        category:2,
        image:'images/milkshake.jpeg',
        name:'Buttermilk Pancakres2',
        price:'$15.99',
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nibh, tristique et tincidunt non, tincidunt ut est. Integer iaculis odio erat.", 

    },
    {
        id:3,
        category:3,
        image:'images/godzilla.jpeg',
        name:'Buttermilk Pancakres3',
        price:'$15.99',
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nibh, tristique et tincidunt non, tincidunt ut est. Integer iaculis odio erat.", 

    },
    {
        id:4,
        category:1,
        image:'images/oreo dream.jpeg',
        name:'Buttermilk Pancakres4',
        price:'$15.99',
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nibh, tristique et tincidunt non, tincidunt ut est. Integer iaculis odio erat.", 

    },
    {
        id:5,
        category:2,
        image:'images/godzilla.jpeg',
        name:'Buttermilk Pancakres5',
        price:'$15.99',
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nibh, tristique et tincidunt non, tincidunt ut est. Integer iaculis odio erat.", 

    },
    {
        id:6,
        category:3,
        image:'images/godzilla.jpeg',
        name:'Buttermilk Pancakres6',
        price:'$15.99',
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nibh, tristique et tincidunt non, tincidunt ut est. Integer iaculis odio erat.", 

    }
];

// all.addEventListener("click",() => {});

arrays.map((array) => {

    
   
    // lunch.addEventListener("click",() => {});
    // shakes.addEventListener("click",() => {});
    
    // const items=document.querySelector(".items");
    // // item
    //     // item_image // src

    //     // item_details
    //             // name_price
    //                     // item_name
    //                     // item_price
    //             // item_info

    const item=document.createElement("div");
    item.className="item";
    items.appendChild(item);

            const item_image=document.createElement("div");
            item_image.className="item_image";
            item.appendChild(item_image);

                    const img=document.createElement("img");
                    img.src=array.image;
                    item_image.appendChild(img);
        
            const item_details=document.createElement("div");
            item_details.className="item_details";
            item.appendChild(item_details);
    
                    const name_price=document.createElement("div");
                    name_price.className="name_price";
                    item_details.appendChild(name_price);
    
                            const item_name=document.createElement("div");
                            item_name.className="item_name";
                            name_price.appendChild(item_name);

                                    const name_textNode=document.createTextNode(array.name);
                                    item_name.appendChild(name_textNode);


                            const item_price=document.createElement("div");
                            item_price.className="item_price";
                            name_price.appendChild(item_price);

                                    const price_textNode=document.createTextNode(array.price);
                                    item_price.appendChild(price_textNode);

                    const item_info=document.createElement("div");
                    item_info.className="item_info";
                    item_details.appendChild(item_info);

                                    const info_textNode=document.createTextNode(array.info);
                                    item_info.appendChild(info_textNode);

             breakfast.addEventListener("click",() => {
                 
                    items.innerHTML=arrays[0];
                            
                 
             });
                                    
                        

            
            
          

        
           

               
       

  


});


// let filterArray = arrays.filter(function(array) {
//     return array.description === 2
//   })
//   .map(function(array) {
//     return array.name;
//   });
  
//   let filterOutput = document.createElement('p');
//   filterOutput.innerHTML = filterArray

//   items.appendChild(filterOutput);
