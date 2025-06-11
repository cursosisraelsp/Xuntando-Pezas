CREATE TABLE if not exists TRABALLADOR(
                 ID_USER_TRABALLADOR			 		INTEGER PRIMARY KEY AUTOINCREMENT,
                 NAME_USER_TRABALLADOR           		CHAR(50),
                 APELIDO1_TRABALLADOR            		CHAR(50),
                 APELIDO2_TRABALLADOR            		CHAR(50),
                 PWD_TRABALLADOR                 		CHAR(50),
                 EMAIL_TRABALLADOR               		CHAR(50)
              );

CREATE TABLE if not exists FACTURA(
                 ID_FACTURA					 	        INTEGER PRIMARY KEY AUTOINCREMENT,
                 CODIGO_FACTURA			     			CHAR(50),
                 NOME_PRODUCTO_FACTURA	     			CHAR(50),
                 FECHA_FACTURA            	 			CHAR(50),
                 CODIGO_PRODUCTO_FACTURA       			CHAR(50),
                 CANTIDADE_PRODUCTO_FACTURA	 			INTEGER,
                 PRECIO_PRODUCTO_FACTURA       			REAL,
                 FOREIGN KEY (CODIGO_PRODUCTO_FACTURA) REFERENCES PRODUCTO (CODIGO_PRODUCTO) ON DELETE SET NULL        
                 
                );

CREATE TABLE  if not exists FACTURAS(
                 ID_FACTURAS					 	    INTEGER PRIMARY KEY AUTOINCREMENT,
                 ID_CLIENTE_FACTURAS					INTEGER NOT NULL,
                 CODIGO_FACTURA_FACTURAS       			CHAR(50),
                 TOTAL			             			REAL,
                 PAGADA					                INTEGER,
                 
                 FOREIGN KEY (CODIGO_FACTURA_FACTURAS) REFERENCES FACTURA (CODIGO_FACTURA) ON UPDATE CASCADE,
                 FOREIGN KEY (ID_CLIENTE_FACTURAS) REFERENCES CLIENTE (ID_CLIENTE)
                );


CREATE TABLE if not exists CLIENTE(

		        ID_CLIENTE						        INTEGER PRIMARY KEY AUTOINCREMENT,
                NAME_CLIENTE						    CHAR(50),
                APELIDO1_CLIENTE					    CHAR(50),
                EMPRESA_CLIENTE						    TEXT(200) NOT NULL,
                PROFESION_CLIENTE					    TEXT(200) NULL,
                ROL_CLIENTE						        TEXT(200) NULL,
                EMAIL_CLIENTE						    CHAR(50)
);

CREATE TABLE if not exists PRODUCTO (

                ID_PRODUCTO						        INTEGER PRIMARY KEY AUTOINCREMENT,
                CODIGO_PRODUCTO						    CHAR(50),
                NOME_PRODUCTO						    TEXT(200),
                DESCRIPCION_PRODUCTO				    TEXT(200) NOT NULL,
                PESO_PRODUCTO						    REAL,
                PRECIO_PRODUCTO						    NUMERIC NOT NULL,
                TIPO_PRODUCTO						    TEXT(200),
                STOCK_PRODUCTO						    NUMERIC NOT NULL

);