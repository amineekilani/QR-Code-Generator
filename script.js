function generateQRCode()
{
    var text=document.getElementById("text").value;
    var qrcodeContainer=document.getElementById("qrcode");
    qrcodeContainer.innerHTML="";
    new QRCode(qrcodeContainer,text);
}