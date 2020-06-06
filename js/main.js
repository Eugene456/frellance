$(document).ready(function(){

    let scrolling = function (ancker){
        $(ancker).click(function() {
            let elementClick = $(this).attr("href");
            let destination = $(elementClick).offset().top;
            
            console.log(destination);
            jQuery("html:not(:animated), body:not(:animated)").animate({
                scrollTop: destination - 80
            }, 800);
            return false;
        })
    }
    
    scrolling("a.arrow");
    
    $(".nav__link").each(function(index, item){
        scrolling(item);
    });

    $(".company").each(function(index, item){
        $(item).click(function() {
            let anc = $(item).children(".company__more")
            let elementClick = $(anc).attr("href");
            let destination = $(elementClick).offset().top;
            
            console.log(destination);
            jQuery("html:not(:animated), body:not(:animated)").animate({
                scrollTop: destination - 80
            }, 800);
            return false;
        })
    });


    let a = [];
        $(".nav__link").each(function(index, item){
            let element = $(item).attr("href");
            let controlPoint = $(element).offset().top;
            a.push(controlPoint - 80);
            
        })
   

    $(window).scroll(function(){
        let position = $(this).scrollTop();
       
        $(".nav__link").each(function(index, item){
            if($(item).hasClass("active")){
                $(item).removeClass("active");
            };
        });


        for(let i = 1; i < a.length; i++){
           if(position >= a[i - 1] && position < a[i]){
                $($(".nav__link")[i-1]).addClass("active");
           } 
           
           if (position >= a[a.length - 1]){
                $($(".nav__link")[a.length - 1]).addClass("active");
           }
                 
        }
    })

    let decision =  $(".decision");

    for(let k = 0; k < decision.length; k++){
       $(decision[k]).mouseover(function(){      
                    let decisionItem = $(decision[k]).children(".decision__item");
                    let plusWrap = $(decisionItem).children(".plus-wrap");
                    plusWrap.addClass("plus-wrap-hover");
                    let plus = plusWrap.children(".plus");
                    plus.addClass("plus-hover");
            })
    }
    

    $(".decision").each(function(index, item){
        $(item).mouseleave(function(){
                let decisionItem = $(item).children(".decision__item");
                let plusWrap = $(decisionItem).children(".plus-wrap");
                plusWrap.removeClass("plus-wrap-hover");
                let plus = plusWrap.children(".plus");
                plus.removeClass("plus-hover");
                
        });
    });

    $(".decision__inner").click(function(event){
        let target = event.target;
        target = target.closest(".decision");
        
        $(".decision").each(function(index, item){
            if(item == target){
                let decisionText = $(item).children(".decision__text");
                decisionText.toggleClass("block");
                let decisionItem = $(item).children(".decision__item");
                let plusWrap = $(decisionItem).children(".plus-wrap");
                let plus = plusWrap.children(".plus");
                plus.toggleClass("plus-click");

            }
        });

    });

    if( $(window).width() < 960){
        console.log(1);

            let block = $($(".reverce")[0]).children(".text");
            $(block).removeClass("arrow-right");
            $(block).addClass("arrow-left");

            let block1 = $($(".reverce")[1]).children(".text");
            $(block1).removeClass("arrow-left");
            $(block1).addClass("arrow-right");
      

    }
    
});

