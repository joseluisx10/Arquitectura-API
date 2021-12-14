window.addEventListener('load', (e)=>{
  
    function StaticCont(){
      this.cont = 0;
      this.setSumar = function(){
        this.cont ++;
      }
      this.setRestar = function(){
        this.cont --;
      }
      this.getCont = function(){
        return this.cont;
      }

    }
    
    let contador = new StaticCont();

    let getProductos=async(url)=>{
        let registroProd = await fetch(url,
            {
            method: 'GET', 
            cache: 'default',
            headers:{
                'Accept': 'Application/Json',
                'Version': '1.0'}
        });
        if(registroProd.status == 200){
            return registroProd.json();
        }else{
            throw "Respuesta incorrecta del servidor";
        }
        
    }
    
    getProductos('/api/Productos').then(response =>{

        console.log(response)
        var cont = 0;
        let HTMLResponse = document.querySelector('tbody');
        console.log(response)
     
        for(const element of response) {
            console.log(element.codigo)
            cont += 1;
            contador.setSumar();
            let tr= document.createElement('tr');
            let th = document.createElement('th');
            th.scope = "row";
            th.appendChild(document.createTextNode(cont));
            tr.appendChild(th);
            let tdCod = document.createElement('td');
            tdCod.appendChild(document.createTextNode(element.codigo))
            tr.appendChild(tdCod);
            let tdMarca = document.createElement('td');
            tdMarca.appendChild(document.createTextNode(element.marca))
            tr.appendChild(tdMarca);
            let tdCategoria = document.createElement('td');
            tdCategoria.appendChild(document.createTextNode(element.categoria));
            tr.appendChild(tdCategoria);
            let tdDescrip= document.createElement('td');
            tdDescrip.appendChild(document.createTextNode(element.descripcion))
            tr.appendChild(tdDescrip);
            let tdPrecio = document.createElement('td');
            tdPrecio.appendChild(document.createTextNode(element.precio));
            tr.appendChild(tdPrecio);
            let tdStock = document.createElement('td');
            tdStock.appendChild(document.createTextNode(element.stock));
            tr.appendChild(tdStock);
            let tdImg= document.createElement('td');
            tdImg.appendChild(document.createTextNode(element.img));
            tr.appendChild(tdImg);
            
            let html = 
            ` <button type="button" class="bton btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal-${cont}" data-bs-whatever=${element.codigo}>Editar</button>
            <div class="modal fade" id="exampleModal-${cont}" tabindex="-1" aria-labelledby="exampleModalLabel-${cont}" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel-${cont}">Complete los campos que desea Editar</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="mb-1">
                        <label for="codigo" class="col-form-label">Codigo:</label>
                        <input type="number" class="codigo form-control" id="codigo">
                      </div>
                      <div class="mb-1">
                        <label for="marca" class="col-form-label">Marca:</label>
                        <input type="text" class="marca form-control" id="marca">
                      </div>
                      <div class="mb-1">
                        <label for="categoria" class="col-form-label">Categoria:</label>
                        <input type="text" class="categoria form-control" id="categoria">
                      </div>
                      <div class="mb-1">
                        <label for="descripcion" class="col-form-label">Descripcion:</label>
                        <input type="text" class="descripcion form-control" id="descripcion">
                      </div>
                      <div class="mb-1">
                        <label for="precio" class="col-form-label">Precio $:</label>
                        <input type="number" class="precio form-control" id="precio">
                      </div>
                      <div class="mb-1">
                        <label for="stock" class="col-form-label">Stock:</label>
                        <input type="number" class="stock form-control" id="stock">
                      </div>
                      <div class="mb-1">
                        <label for="img" class="col-form-label">Link Img:</label>
                        <input type="text" class="img form-control" id="img">
                      </div>

                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                    <button  onclick="" type="button" class="btn btn-outline-success">Guardar</button>
                  </div>
                </div>
              </div>
            </div> `;
            let tda= document.createElement('td');
            let button1 = document.createElement('button');
            tda.innerHTML = html;

            button1.type= "button";
            button1.className= "bton btn btn-outline-danger";
            button1.innerText = "Eliminar";
            button1.onclick=()=>{ deletePRO(element.codigo, tr)};
            let a1 = document.createElement('a');
            a1.appendChild(button1);
            tda.appendChild(a1)
            tr.appendChild(tda);
            HTMLResponse.appendChild(tr);
           
        };
    })
    .catch(err =>{
        console.log(err);
    });
    
    let form= document.querySelector('form');
    form.addEventListener('submit', (e1)=>{
       console.log("hola")
        e1.preventDefault();       
        let data= new FormData(form);
        console.log(data.get('cantidad'))
        let body = {
            codigo: Number(data.get('codigo')),
            marca: data.get('marca'),
            categoria: data.get('categoria'),
            descripcion: data.get('descripcion'),
            precio: Number(data.get('precio')),
            stock: Number(data.get('cantidad')),
            img: data.get('link')
        }

        let crearProducto=async(url, body)=>{
          let setProduct = await fetch(url,{
          method: 'POST', 
          headers:{
              'Content-Type': "Application/Json"
          },
          body:JSON.stringify(body)
        
        
        })
        if(setProduct.status == 201 ){
          
          contador.setSumar();
          let tbody = document.querySelector('tbody');
          let tr= document.createElement('tr');
          let th = document.createElement('th');
          th.scope = "row";
          th.appendChild(document.createTextNode(contador.getCont()));
          tr.appendChild(th);
          let tdCod = document.createElement('td');
          tdCod.appendChild(document.createTextNode(body.codigo))
          tr.appendChild(tdCod);
          let tdMarca = document.createElement('td');
          tdMarca.appendChild(document.createTextNode(body.marca))
          tr.appendChild(tdMarca);
          let tdCategoria = document.createElement('td');
          tdCategoria.appendChild(document.createTextNode(body.categoria));
          tr.appendChild(tdCategoria);
          let tdDescrip= document.createElement('td');
          tdDescrip.appendChild(document.createTextNode(body.descripcion))
          tr.appendChild(tdDescrip);
          let tdPrecio = document.createElement('td');
          tdPrecio.appendChild(document.createTextNode(body.precio));
          tr.appendChild(tdPrecio);
          let tdStock = document.createElement('td');
          tdStock.appendChild(document.createTextNode(body.stock));
          tr.appendChild(tdStock);
          let tdImg= document.createElement('td');
          tdImg.appendChild(document.createTextNode(body.img));
          tr.appendChild(tdImg);
          
          let html = 
          `<button type="button" class="bton btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal-${contador.getCont()}" data-bs-whatever=${body.codigo}>Editar</button>
          <div class="modal fade" id="exampleModal-${contador.getCont()}" tabindex="-1" aria-labelledby="exampleModalLabel-${contador.getCont()}" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel-${contador.getCont()}">Complete los campos que desea Editar</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-1">
                      <label for="marca" class="col-form-label">Marca:</label>
                      <input type="text" class="marca form-control" id="marca" placeholder="${body.marca}">
                    </div>
                    <div class="mb-1">
                      <label for="categoria" class="col-form-label">Categoria:</label>
                      <input type="text" class="categoria form-control" id="categoria" placeholder="${body.categoria}">
                    </div>
                    <div class="mb-1">
                      <label for="descripcion" class="col-form-label">Descripcion:</label>
                      <input type="text" class="descripcion form-control" id="descripcion" placeholder="${body.descripcion}">
                    </div>
                    <div class="mb-1">
                      <label for="precio" class="col-form-label">Precio $:</label>
                      <input type="number" class="precio form-control" id="precio">
                    </div>
                    <div class="mb-1">
                      <label for="stock" class="col-form-label">Stock:</label>
                      <input type="number" class="stock form-control" id="stock">
                    </div>
                    <div class="mb-1">
                      <label for="img" class="col-form-label">Link Img:</label>
                      <input type="text" class="img form-control" id="img">
                    </div
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                  <button  onclick="editProducto()" type="button" class="btn btn-outline-success">Guardar</button>
                </div>
              </div>
            </div>
          </div> `;
          let tda= document.createElement('td');
          let button1 = document.createElement('button');
          tda.innerHTML = html
          button1.type= "button";
          button1.className= "bton btn btn-outline-danger";
          button1.innerText = "Eliminar";
          button1.onclick=()=>{ deleteProducto(body.codigo, tr)};
          let a1 = document.createElement('a');
          a1.appendChild(button1);
          tda.appendChild(a1)
          tr.appendChild(tda)
          tbody.appendChild(tr);
        }else{
          alert("El producto con codigo "+ body.codigo + " ya existe")
        }
        }
        crearProducto('/api/Productos', body);


        

    })
    
    const deleteProducto = (codigo, tr)=>{
        let xhttp = new XMLHttpRequest();
        xhttp.open('DELETE', `/api/productos/${codigo}` )
        xhttp.setRequestHeader('Accept', '*/*');
        xhttp.onreadystatechange = ()=>{
            if(xhttp.readyState == 4){
                contador.setRestar();
                tr.parentNode.removeChild(tr);
            }
        }
        xhttp.send();
    }

    

    function editProducto(codigo, cont) {
        console.log('el cod: ' + codigo)
        let modal = document.getElementById(`exampleModal-${cont}`);
        modal.addEventListener('show.bs.modal', function (event) {
            // Button that triggered the modal
            var button = event.relatedTarget;
            // Extract info from data-bs-* attributes
            var recipient = button.getAttribute('data-bs-whatever');
            // If necessary, you could initiate an AJAX request here
            // and then do the updating in a callback.
            //
            // Update the modal's content.
            //var modalTitle = exampleModal.querySelector('.modal-title')
            console.log(recipient);
            var modalBodyInput = exampleModal.querySelector('.modal-body .codigo');

            //modalTitle.textContent = 'New message to ' + recipient
            modalBodyInput.value = recipient;

            let xhttp = new XMLHttpRequest();
            xhttp.open('PUT', `/api/productos/${codigo}`);
            xhttp.setRequestHeader('Content-Type', 'Application/Json');
            xhttp.onreadystatechange = () => {
                if (xhttp.readyState == 4) {
                }
            };
            xhttp.send();


        });
    }

})
