var data = new Date();
dia = data.getDate().toString()
diaF = (dia.length == 1) ? '0' + dia : dia
mes = (data.getMonth() + 1).toString()
mesF = (mes.length == 1) ? '0' + mes : mes
anoF = data.getFullYear()
var dataFormatada = anoF + "-" + mesF + "-" + ((diaF.length == 1) ? '0' + (parseInt(diaF) - 1) : diaF)


module.exports = dataFormatada;