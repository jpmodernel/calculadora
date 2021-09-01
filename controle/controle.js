async function add(req, res) {
    console.log(req.body);
   var num1 = parseInt(req.body.num1)
   var num2 = parseInt(req.body.num2)
   var result;
   var operacoes = req.body.operacoes;

   if(operacoes == 'soma'){
        result = num1 + num2;
}else
   if(operacoes == 'subtracao'){
    result = num1 - num2;
}else
    if(operacoes == 'multi'){
    result = num1 * num2;
}else
    if(operacoes == 'div'){
    result = num1 / num2;
}


   res.render("conta/list.ejs", {result: result});
}
 async function abreAdd(req, res){
     res.render("conta/add.ejs", {});
 }
 
 module.exports = {
     add,
     abreAdd,
 }