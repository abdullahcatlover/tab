window.addEventListener("DOMContentLoaded", ()=>{
    const loader = document.querySelector(".loader");
    const tabs = document.querySelectorAll(".tabheader__item"),
    tabContent = document.querySelectorAll(".tabcontent"),
    headerParent=document.querySelector(".tabheader__items");
    

    setTimeout (function (){
        loader.style.opacity = "0";
        setTimeout(function (){
            loader.style.display = "none";
        }, 1000)
    }, 1500)

    function hideTabContent() {
        tabContent.forEach(item =>{
            item.style.display = "none";
        })

        tabs.forEach(item =>{
            item.classList.remove("tabheader__item_active");
        });
    }

   


    function showTabContent(i=0){
        tabContent[i].style.display="block";
        tabs[i].classList.add("tabheader__item_active");
    }
    
    hideTabContent();
    showTabContent();
   

    headerParent.addEventListener('click', (event)=>{
        const target = event.target;
        if(target && target.classList.contains("tabheader__item")){
            tabs.forEach((item, i)=>{
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })
    
    });
    

    



