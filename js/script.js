
//var gradi=0,start_m=0,start_h=0,start_s=0;
let data=new Date;

//setInterval(orologio,1000);


//setInterval(orologio,1000);
let start_s=data.getSeconds(),start_m=data.getMinutes(),start_h=data.getHours(); 
let status=false, flag=1;

    
   
   // cronometro();
   orologio();  


    function orologio ()
{
    document.getElementById("i_quad").style.top=window.innerHeight/4+"px";
    document.getElementById("i_quad").style.left=window.innerWidth/4+"px";
    document.getElementById("l_sec").style.top=window.innerHeight/2.55+"px";
    document.getElementById("l_sec").style.left=window.innerWidth/5.8+"px";
    document.getElementById("l_min").style.top=window.innerHeight/2.55+"px";
    document.getElementById("l_min").style.left=window.innerWidth/5.8+"px";
    document.getElementById("l_ore").style.top=window.innerHeight/2.55+"px";
    document.getElementById("l_ore").style.left=window.innerWidth/5.8+"px";
    

    if(flag==1)
    {
        po_h=(start_h-12)*30-90;
        po_m=(start_m*6)-90;
        console.log(start_s);
        po_s=(start_s*6)-90;
        
        document.getElementById("l_min").style.transform="rotate("+po_m+"deg)";
        document.getElementById("l_min").style.transformOrigin="0%";
        document.getElementById("l_ore").style.transform="rotate("+po_h+"deg)";
        document.getElementById("l_ore").style.transformOrigin="0%";
                
        setInterval(() => {
            po_s+=6;
            document.getElementById("l_sec").style.transform="rotate("+po_s+"deg)";
            document.getElementById("l_sec").style.transformOrigin="0%";
            if(po_s==360)
            {
                po_s=0;
                po_m+=6;
            }
            if(po_m==360)
            {
            po_m=0
            po_h+=30; 
            }
            if(po_h==360)
            {
                po_h=0;
            }
            document.getElementById("l_min").style.transform="rotate("+po_m+"deg)";
            document.getElementById("l_min").style.transformOrigin="0%";
            document.getElementById("l_ore").style.transform="rotate("+po_h+"deg)";
            document.getElementById("l_ore").style.transformOrigin="0%";
        
        }, 1000);
    }
    else if(flag==2)
    {
        let counter=0;
    
        let po_s=270, po_h=270,po_m=270;
        document.getElementById("l_min").style.transform="rotate("+po_m+"deg)";
        document.getElementById("l_min").style.transformOrigin="0%";
        document.getElementById("l_ore").style.transform="rotate("+po_h+"deg)";
        document.getElementById("l_ore").style.transformOrigin="0%";
        
        setInterval(() => {
            
            document.getElementById("l_sec").style.transform="rotate("+po_s+"deg)";
            document.getElementById("l_sec").style.transformOrigin="0%";
            if(po_s==360)
            {
                po_s=0;
                po_m+=6;
            }
            if(po_m==360)
            {
            po_m=0
            po_h+=30; 
            }
            if(po_h==360)
            {
                po_h=0;
            }
            document.getElementById("l_min").style.transform="rotate("+po_m+"deg)";
            document.getElementById("l_min").style.transformOrigin="0%";
            document.getElementById("l_ore").style.transform="rotate("+po_h+"deg)";
            document.getElementById("l_ore").style.transformOrigin="0%";
            document.getElementById("display").value=++counter+"sec";    
            po_s+=6;
            status=1;
        }, 1000);
 
        
    }

    
}
function cronometro()
{
    
    let counter=0;
    while(status==0)
    {
        let po_s=0, pos_h=0,pos_m=0;
        document.getElementById("l_min").style.transform="rotate("+po_m+"deg)";
        document.getElementById("l_min").style.transformOrigin="0%";
        document.getElementById("l_ore").style.transform="rotate("+po_h+"deg)";
        document.getElementById("l_ore").style.transformOrigin="0%";
        
        setInterval(() => {
            
            document.getElementById("l_sec").style.transform="rotate("+po_s+"deg)";
            document.getElementById("l_sec").style.transformOrigin="0%";
            if(po_s==360)
            {
                po_s=0;
                po_m+=6;
            }
            if(po_m==360)
            {
            po_m=0
            po_h+=30; 
            }
            if(po_h==360)
            {
                po_h=0;
            }
            document.getElementById("l_min").style.transform="rotate("+po_m+"deg)";
            document.getElementById("l_min").style.transformOrigin="0%";
            document.getElementById("l_ore").style.transform="rotate("+po_h+"deg)";
            document.getElementById("l_ore").style.transformOrigin="0%";
            document.getElementById("display").value=++counter+"sec";    
            po_s+=6;
            status=1;
        }, 1000);
 
    }
}

function change()
{
    
    if(flag==1)
    {
        
        
        flag=2;
        

    }
    else if(flag==2){
        
        
        flag=1;
       
        
    }
            


}