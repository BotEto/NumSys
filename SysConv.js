//функция для перевода систем счисления
function convert()
{
    var inum  = document.getElementById("ipnum").value;
    var itype = document.getElementById("iptype").value;
    var otype = document.getElementById("optype").value;
    var onum;

    //перевод из 2 в 8, 10, 16
    if(itype=="ipbin" && otype=="opdec") onum = bin2dec(inum);
    if(itype=="ipbin" && otype=="opoct") onum = bin2oct(inum);
    if(itype=="ipbin" && otype=="ophex") onum = bin2hex(inum);
    if(itype=="ipbin" && otype=="op31") onum = bin2thone(inum); 
    if(itype=="ipbin" && otype=="opbin") onum = "INVALID";

    //перевод из 8 в 2, 10, 16
    if(itype=="ipoct" && otype=="opbin") onum = oct2bin(inum);
    if(itype=="ipoct" && otype=="opdec") onum = oct2dec(inum);
    if(itype=="ipoct" && otype=="ophex") onum = oct2hex(inum);
    if(itype=="ipoct" && otype=="op31") onum = oct2thone(inum); 
    if(itype=="ipoct" && otype=="opoct") onum = "INVALID";   

    //перевод из 10 в 2, 8, 16
    if(itype=="ipdec" && otype=="opbin") onum = dec2bin(inum);
    if(itype=="ipdec" && otype=="opoct") onum = dec2oct(inum);
    if(itype=="ipdec" && otype=="ophex") onum = dec2hex(inum);
    if(itype=="ipdec" && otype=="op31") onum = dec2thone(inum); 
    if(itype=="ipdec" && otype=="opdec") onum = "INVALID"; 

    //перевод из 16 в 2, 8, 10
    if(itype=="iphex" && otype=="opbin") onum = hex2bin(inum);
    if(itype=="iphex" && otype=="opoct") onum = hex2oct(inum);
    if(itype=="iphex" && otype=="opdec") onum = hex2dec(inum);
    if(itype=="iphex" && otype=="op31") onum = hex2thone(inum);
    if(itype=="iphex" && otype=="ophex") onum = "INVALID";

    //перевод из 31 в 2, 8, 10, 16
    if(itype=="ip31" && otype=="opbin") onum = thone2bin(inum);
    if(itype=="ip31" && otype=="opoct") onum = thone2oct(inum);
    if(itype=="ip31" && otype=="opdec") onum = thone2dec(inum);
    if(itype=="ip31" && otype=="ophex") onum = thone2hex(inum); 
    if(itype=="ip31" && otype=="op31") onum = "INVALID";   

    document.getElementById("opnum").value = onum;
}

//---------------------------------------------------------------

//2 сс в 8 сс функция перевода
function bin2dec(inum)
{
    return parseInt(inum, 2);
}

//2 сс в 10 сс функция перевода
function bin2oct(inum)
{
    return parseInt(inum, 2).toString(8);
}

//2 сс в 16 сс функция перевода
function bin2hex(inum)
{
    return parseInt(inum, 2).toString(16);
}

//2 сс в 16 сс функция перевода
function bin2thone(inum)
{
    return parseInt(inum, 2).toString(31);
}

//---------------------------------------------------------------

//8 сс в 2 сс функция перевода
function oct2bin(inum)
{
    return parseInt(inum, 8).toString(2);
}

//8 сс в 10 сс функция перевода
function oct2dec(inum)
{
    return parseInt(inum, 8).toString(10);
}

//8 сс в 16 сс функция перевода
function oct2hex(inum)
{
    return parseInt(inum, 8).toString(16);
}

//8 сс в 31 сс функция перевода
function oct2thone(inum)
{
    return parseInt(inum, 8).toString(31);
}

//---------------------------------------------------------------

//10 сс в 2 сс функция перевода
function dec2bin(inum)
{
    return parseInt(inum).toString(2);
}

//10 сс в 8 сс функция перевода
function dec2oct(inum)
{
    return parseInt(inum).toString(8);
}

//10 сс в 16 сс функция перевода
function dec2hex(inum)
{
    return parseInt(inum).toString(16);
}

//10 сс в 31 сс функция перевода
function dec2thone(inum)
{
    return parseInt(inum).toString(31);
}



//---------------------------------------------------------------

//16 сс в 2 сс функция перевода
function hex2bin(inum)
{
    return parseInt(inum, 16).toString(2);
}

//16 сс в 8 сс функция перевода
function hex2dec(inum)
{
    return parseInt(inum, 16).toString(8);
}

//16 сс в 10 сс функция перевода
function hex2oct(inum)
{
    return parseInt(inum, 16).toString(10);
}

//16 сс в 31 сс функция перевода
function hex2thone(inum)
{
    return parseInt(inum, 16).toString(31);
}

//---------------------------------------------------------------

//31 сс в 2 сс функция перевода
function thone2bin(inum)
{
    return parseInt(inum, 31).toString(2);
}

//31 сс в 8 сс функция перевода
function thone2oct(inum)
{
    return parseInt(inum, 31).toString(8);
}

//31 сс в 10 сс функция перевода
function thone2dec(inum)
{
    return parseInt(inum, 31).toString(10);
}

//31 сс в 16 сс функция перевода
function thone2hex(inum)
{
    return parseInt(inum, 31).toString(16);
}