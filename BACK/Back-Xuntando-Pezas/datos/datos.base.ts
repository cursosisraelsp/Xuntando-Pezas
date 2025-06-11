import { arquivoBBDD } from "../Tipos/bbdd.tipos";
import { DatoBBDD } from "../Tipos/datos.base.interfaces";

let creacionTablasBBDD : DatoBBDD = {
    bbdd:`CREATE TABLE if not exists PRODUCTO (

                ID_PRODUCTO						        INTEGER PRIMARY KEY AUTOINCREMENT,
                CODIGO_PRODUCTO						    TEXT(50),
                NOME_PRODUCTO						    TEXT(200),
                DESCRIPCION_PRODUCTO				    TEXT(200) NOT NULL,
                PESO_PRODUCTO						    REAL,
                PRECIO_PRODUCTO						    NUMERIC NOT NULL,
                TIPO_PRODUCTO						    TEXT(200),
                STOCK_PRODUCTO						    NUMERIC NOT NULL

);

CREATE TABLE if not exists CLIENTE(

		        ID_CLIENTE						        INTEGER PRIMARY KEY AUTOINCREMENT,
                NAME_CLIENTE						    TEXT(50),
                APELIDO1_CLIENTE					    TEXT(50),
                EMPRESA_CLIENTE						    TEXT(200) NOT NULL,
                PROFESION_CLIENTE					    TEXT(200) NULL,
                ROL_CLIENTE						        TEXT(200) NULL,
                EMAIL_CLIENTE						    TEXT(50)
);
CREATE TABLE if not exists TRABALLADOR(
                 ID_USER_TRABALLADOR			 		INTEGER PRIMARY KEY AUTOINCREMENT,
                 NAME_USER_TRABALLADOR           		TEXT(50),
                 APELIDO1_TRABALLADOR            		TEXT(50),
                 APELIDO2_TRABALLADOR            		TEXT(50),
                 PWD_TRABALLADOR                 		TEXT(50),
                 EMAIL_TRABALLADOR               		TEXT(50),
                 ROL_TRABALLADOR                        TEXT(50)
              );

CREATE TABLE if not exists FACTURA(
                 ID_FACTURA					 	        INTEGER PRIMARY KEY AUTOINCREMENT,
                 CODIGO_FACTURA			     			TEXT(50),
                 NOME_PRODUCTO_FACTURA	     			TEXT(50),
                 FECHA_FACTURA            	 			TEXT(50),
                 CODIGO_PRODUCTO_FACTURA       			TEXT(50),
                 CANTIDADE_PRODUCTO_FACTURA	 			INTEGER,
                 PRECIO_PRODUCTO_FACTURA       			REAL,
                 FOREIGN KEY (CODIGO_PRODUCTO_FACTURA) REFERENCES PRODUCTO (CODIGO_PRODUCTO) ON DELETE SET NULL        
                 
                );

CREATE TABLE  if not exists FACTURAS(
                 ID_FACTURAS					 	    INTEGER PRIMARY KEY AUTOINCREMENT,
                 ID_CLIENTE_FACTURAS					INTEGER NOT NULL,
                 CODIGO_FACTURA_FACTURAS       			TEXT(50),
                 TOTAL			             			REAL,
                 PAGADA					                INTEGER,
                 
                 FOREIGN KEY (CODIGO_FACTURA_FACTURAS) REFERENCES FACTURA (CODIGO_FACTURA) ON UPDATE CASCADE,
                 FOREIGN KEY (ID_CLIENTE_FACTURAS) REFERENCES CLIENTE (ID_CLIENTE)
                );`
    
}

let arquivosBBDD : arquivoBBDD = {
    xeral: 'basedatos.db',
    persoal:'proba.israel.db'
}
export{
    creacionTablasBBDD,
    arquivosBBDD
}