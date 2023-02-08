const btn = document.getElementById("btn")
const wrap = document.querySelector("body")
 const cp = document.getElementById("cp")
 const lbl = document.getElementById("lbl")
 
 
 //initial call
gk()
 
 function gk()
 {
      //console.log("hi")
    var clrCode =  Math.ceil(Math.random() * 255) + "," +  Math.ceil(Math.random() * 255) + "," +  Math.ceil(Math.random() * 255)
    clrCode = clrCode.toString()
    
    //console.log(clrCode)
    wrap.style.backgroundColor =" rgb( "+ clrCode + " )";
 }
 
 
 
 

btn.onclick = () =>
{
   
    var clrCode =  Math.ceil(Math.random() * 255) + "," +  Math.ceil(Math.random() * 255) + "," +  Math.ceil(Math.random() * 255)
    clrCode = clrCode.toString()
    
    //console.log(clrCode)
    wrap.style.backgroundColor =" rgb( "+ clrCode + " )";
    if(btn.click)
    {
        btn.innerHTML = "next " + " ⏩"
    }
    if(cp.checked)
    {
        lbl.innerHTML="copy"
        try { 
        navigator.clipboard.writeText(" rgb( "+ clrCode + " )")   
        console.log('Text copied to clipboard')
        } catch (err) 
        { 
        console.log('Failed to copy text: ', err)
        }
    }
    
    
    
}
setInterval("gk()",5000)// background color change on every 5 sec
