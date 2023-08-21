import ProductSimple from "./producto"

import col from "../imagenes/coca.png"
import img from "../imagenes/agua.jpg"
import tabla from "../imagenes/tabla.jpg"
import valenciana from "../imagenes/valenciana.png"
import paellanegra from "../imagenes/paellanegra.png"
import pollo from "../imagenes/pollo.jpg"
import croquetas from "../imagenes/croquetas.jpg"
import helado from "../imagenes/helado.jpg"
import flan from "../imagenes/flan.jpg"


export const bebidas=[
    <ProductSimple img={col} nombre={'Coca-Cola'} precio={'2.50'}/>,
    <ProductSimple img={img} nombre={'Agua'} precio={'1.50'}/>,
]

export const comida=[
    // <ProductSimple img={tabla} nombre={'Tabla de Pescado'} precio={'30,00'} descripcion={'Tabla de pescado para 2 personas Tabla de pescado para 2 personas......'}/>,
    <ProductSimple img={paellanegra} nombre={'aroz negro de pulpo arena-negra'} precio={'14,00'} extra={'Por persona, Min-2 PAX'} descripcion={'Ingredientes: Cebolla, Pimiento Verde, Chipirones, Chopitos, Tomate Natural, Tinta Calamar, Pulpo, Langostinos, Zamburiñas'}/>,
    <ProductSimple img={valenciana} nombre={'paella valenciana'} precio={'30,00'} extra={'Por persona, Min-2 PAX'} descripcion={'Ingredientes: Pollo, Conejo, Tomate Natural, Pimentón, Habichuelas, Caracoles, Te de Azafrán'}/>,
    // <ProductSimple img={pollo} nombre={'pollo'} precio={'10,00'}/>,
    // <ProductSimple img={croquetas} nombre={'croquetas'} precio={'1.50'} extra={'La unidad'}/> ,
]

export const postres=[
    <ProductSimple img={helado} nombre={'Copa helada'} precio={'5,00'}/>,
    <ProductSimple img={flan} nombre={'flan'} precio={'1.50'}/>,
]