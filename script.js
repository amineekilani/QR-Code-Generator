function generateQRCode()
{
    var text=document.getElementById("text").value;
    var qrcodeContainer=document.getElementById("qrcode");
    qrcodeContainer.innerHTML="";
    new QRCode(qrcodeContainer,text);
}
document.getElementById("year").innerHTML=new Date().getFullYear();