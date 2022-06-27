const ConstantsQueries = {
    GET_ALL_VEHICLES: 'SELECT * FROM VEHICULO',
    GET_ALL_CLIENTES: 'SELECT * FROM CLIENTE',
    GET_ALL_DISTRITOS: 'SELECT * FROM DISTRITO',
    GET_ALL_SUCURSAL: 'SELECT * FROM SUCURSAL',
    GET_VEHICLES_BY_CLIENT: 'SELECT v.idvehiculo, v.placa, v.marca, v.modelo, v.color, v.anio FROM vehiculo v INNER JOIN poliza p ON v.idvehiculo = p.idvehiculo INNER JOIN (SELECT * FROM cliente WHERE dni=?) per ON p.idcliente=per.idcliente',

    GET_ALL_TIPES_TALLER:'SELECT * FROM TALLER',
    GET_POLIZAS_BY_CLIENT: 'SELECT * FROM poliza p LEFT JOIN cliente c ON p.idcliente = c.idcliente WHERE c.dni = ?',
    GET_RED_TALLERES_BY_PLACA:'SELECT * FROM clausula_veha cv LEFT JOIN poliza p ON cv.idpoliza=p.idpoliza LEFT JOIN vehiculo v ON p.idvehiculo=v.idvehiculo WHERE v.placa = "asd123" group by cv.idred_talleres',
    GET_TALLERES_FILTROS:'SELECT t.idtaller, t.nombre, t.telefono, t.sitioWeb, t.longitud, t.latitud, s.denominacion, s.idsucursal FROM taller t LEFT JOIN sucursal s ON t.idsucursal=s.idsucursal LEFT JOIN red_talleres rt ON t.idred_talleres=rt.idred_talleres RIGHT JOIN  (SELECT cv.idred_talleres FROM clausula_veha cv LEFT JOIN poliza p ON cv.idpoliza=p.idpoliza LEFT JOIN vehiculo v ON p.idvehiculo=v.idvehiculo WHERE v.placa = ? group by cv.idred_talleres) aux ON rt.idred_talleres=aux.idred_talleres WHERE t.idsucursal=? AND t.iddistrito=?'
}

module.exports = {
    ConstantsQueries
}