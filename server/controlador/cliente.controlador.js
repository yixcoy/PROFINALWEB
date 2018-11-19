const Cliente = require('../modelosbd/cliente')

const clienteCtrl = {};

clienteCtrl.getClientes = async (req, res) => {

    const clientes = await Cliente.find();
   res.json(clientes);
} 


clienteCtrl.createClientes = async (req, res) => {
 
    console.log(req.body);
    res.json('recibido');

}


clienteCtrl.getCliente = function(){



}

clienteCtrl.editCliente = function(){

}

clienteCtrl.deleteCliente = function(){



}




module.exports = clienteCtrl;


