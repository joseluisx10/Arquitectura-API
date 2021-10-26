# Arquitectura-
Nombre del grupo:induOnline

Integrantes: Jose Luis Quispe Surculento

Descripción del negocio elegido. 

La tienda se dedica a la venta de indumentaria tanto masculino como feemenino online 
La app consiste en brindar inventario para su consumo. 

------------------------------------------------------
Crud de Productos


Request ---> Get /API/Listings/Products?order=name HTTP/1.1
             Host: induOnline.com
             Accep: Application/Json
             Version: v1
             
             Su funcion es realizar un pedido de la lista de todos los productos ordenado por nombre.
             
Response ---> HTTP/1.1 200 OK
            
             EL servidor envia el resultado. En este caso un 200 OK. Caso contratrio 404 Not Found


Request ---> Post /API/Listings/Products HTTP/1.1           
             Host: induOnline.com
             Content-type: Application/Json
             {{"id":1,"name":""....}, Obj2,....ObjN}
             
             Agraga nuevos productos en la lista 
           
Response ---> HTTP/1.1 201 Created

             EL servidor envia el resultado. En este caso un 201 Created, caso contrario 504 Gateway Timeout

Request ---> DELETE /API/Listings/Products/{id} HTTP/1.1
             Host: induOnline.com
             
             Elimina un objeto o producto por clave id
             
Response --->HTTP/1.1 200 OK

             EL servidor envia el resultado. En este caso un 200 OK, caso contrario 501 Not Implemented 



CRUD DE CATEGORIAS 

Request ---> Get /API/Categorias HTTP/1.1
             Host: induOnline.com
             Accep: Application/Json
             
             Realiza el pedido de de todas las categoria
        
Response ---> HTTP/1.1 200 OK
              
             EL servidor envia el resultado. En este caso un 200 OK. Caso contratrio 404 Not Found
             
             
Request ---> Post /API/Categorias HTTP/1.1           
             Host: induOnline.com
             Content-type: Application/Json
             {name = NOMBRE_NUEVA_CATEGORIA}
                        
             Agraga una nueva categoria 
           
Response ---> HTTP/1.1 201 Created

             EL servidor envia el resultado. En este caso un 201 Created
             
          
Request ---> DELETE /API/Categorias/{id} HTTP/1.1
             Host: induOnline.com
             
             Elimina una categoria por clave id
             
Response --->HTTP/1.1 200 OK

             EL servidor envia el resultado. En este caso un 200 OK, caso contrario 501 Not Implemented 

             

 --------------------------------------------------------------------------------------------------
 consulta: queria saber si para cada imagen tenemos que crear una direccion por ej: GET.../API/Pructos/x/imagenes/y
 tambien si venia mas o menos encaminado
 Me falta el crud de clientes
