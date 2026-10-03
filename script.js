const datosRecomendaciones = [
  {
    id: 1,
    producto: "Carne de Res (Kg)",
    bodega: "Bodega Norte -> Bodega Centro",
    stock: "15 Kg (Mín: 50)",
    riesgo: "Alto (Riesgo en 6h)",
    riesgoClase: "bg-red-100 text-red-700",
    recomendacion: "Transferencia (30 Kg desde Bodega Norte)"
  },
  {
    id: 2,
    producto: "Aceite de Oliva (L)",
    bodega: "Proveedor -> Bodega Sur",
    stock: "5 L (Mín: 40)",
    riesgo: "Crítico (Agotado hoy)",
    riesgoClase: "bg-red-100 text-red-700",
    recomendacion: "Compra Urgente (100 L a Proveedor)"
  },
  {
    id: 3,
    producto: "Queso Mozzarella (Kg)",
    bodega: "Bodega Este -> Bodega Norte",
    stock: "12 Kg (Mín: 30)",
    riesgo: "Medio (Riesgo en 24h)",
    riesgoClase: "bg-amber-100 text-amber-700",
    recomendacion: "Transferencia (20 Kg desde Bodega Este)"
  }
];

function cargarTabla() {
  const tbody = document.getElementById("tabla-recomendaciones");
  tbody.innerHTML = "";

  datosRecomendaciones.forEach(item => {
    const tr = document.createElement("tr");
    tr.className = "hover:bg-slate-50 transition";
    tr.innerHTML = `
      <td class="p-3 font-medium text-slate-900">${item.producto}</td>
      <td class="p-3 text-slate-600">${item.bodega}</td>
      <td class="p-3 text-slate-600">${item.stock}</td>
      <td class="p-3"><span class="px-2 py-1 rounded-full text-xs font-semibold ${item.riesgoClase}">${item.riesgo}</span></td>
      <td class="p-3 font-medium text-slate-800">${item.recomendacion}</td>
      <td class="p-3 text-center space-x-2">
        <button onclick="aprobar(${item.id})" class="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded text-xs transition">Aprobar</button>
        <button onclick="rechazar(${item.id})" class="bg-slate-200 hover:bg-slate-300 text-slate-700 px-3 py-1 rounded text-xs transition">Rechazar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function aprobar(id) {
  alert(`Recomendación #${id} aprobada con éxito. Se ha enviado la orden.`);
  eliminarItem(id);
}

function rechazar(id) {
  alert(`Recomendación #${id} rechazada.`);
  eliminarItem(id);
}

function eliminarItem(id) {
  const index = datosRecomendaciones.findIndex(i => i.id === id);
  if (index !== -1) {
    datosRecomendaciones.splice(index, 1);
    cargarTabla();
    document.getElementById("m-pendientes").innerText = datosRecomendaciones.length;
  }
}

document.addEventListener("DOMContentLoaded", cargarTabla);
