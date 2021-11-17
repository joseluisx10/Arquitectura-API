window.addEventListener('load', ()=>{

    let getProductos=async(url)=>{
        let registroProd = await fetch(url,
            {
            method: 'GET', 
            cache: 'default',
            headers:{
                'accep': 'application/json',
                'version': '1.0'}
        });
        return registroProd.json();
    }
    
    getProductos('/api/Productos').then(response =>{

        console.log(response)
        var cont = 0;
        let HTMLResponse = document.querySelector('tbody');
        console.log(response)
     
        for(const element of response) {
            console.log(element.codigo)
            cont += 1;
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
            let button = document.createElement('button');
            button.type= "button";
            button.className= "btn btn-outline-success";
            button.innerText = "Editar"
            let tdButton= document.createElement('td')
            tdButton.appendChild(button);
           
            let button1 = document.createElement('button');
            button1.type= "button";
            button1.className= "btn btn-outline-danger";
            button1.innerText = "Eliminar"
            tdButton.appendChild(button1);
            tr.appendChild(tdButton)
            HTMLResponse.appendChild(tr);
        };
    })
    
})