const calcular = ()=>{
    //Selectores
    const cantidad = document.querySelector("#cantidad"), 
          precio = document.querySelector("#precio"),
          color = document.querySelector("#color"),
          detalleTotal = document.querySelector("#detalle-total"),
          detalleCantidad = document.querySelector("#detalle-cantidad"),
          detalleColor = document.querySelector("#detalle-color");

    total = (Number(cantidad.value) * Number(precio.innerHTML));
    //alert(total)

    detalleTotal.innerHTML = total;
    detalleCantidad.innerHTML = cantidad.value.toString();
    detalleColor.style.backgroundColor = color.value;
}


