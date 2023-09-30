import ProductSimple from "./producto"

import col from "../imagenes/coca.png"
import img from "../imagenes/agua.jpg"
import tabla from "../imagenes/tabla.jpg"
import valenciana from "../imagenes/valenciana.png"
import paellanegra from "../../../public/images/tintaHorizontal.jpg"

import helado from "../imagenes/helado.jpg"
import flan from "../imagenes/flan.jpg"
import glutem from '../alergenos/icons/Gluten.png'
import moluscos from '../alergenos/icons/Moluscos.png'
import crustaceos from '../alergenos/icons/Crustaceos.png'
import sulfitos from '../alergenos/icons/Sulfitos.png'
import pescado from '../alergenos/icons/Pescado.png'



// Bebidas
export const refrescos =[
    <ProductSimple img={''} nombre={'Coca-Cola'} precio={'2.50'}/>,
    <ProductSimple img={''} nombre={'Agua'} precio={'1.50'}/>,
]
export const vinoTinto =[
    <ProductSimple img={''} nombre={'Vino Tenerife'} precio={'2.50'}/>,
    <ProductSimple img={''} nombre={'Vino Gran Canaria'} precio={'1.50'}/>,
]
export const bebidasAlcoholicas =[
    <ProductSimple img={''} nombre={'Sangria'} precio={'2.50'}/>,
    <ProductSimple img={''} nombre={'Tinto de Verano'} precio={'1.50'}/>,
    <ProductSimple img={''} nombre={'whisky'} precio={'2.50'}/>,
    <ProductSimple img={''} nombre={'Licor de hirbas'} precio={'1.50'}/>,
]
export const cocktails =[
    <ProductSimple img={''} nombre={'Mojito'} precio={'2.50'}/>,
    <ProductSimple img={''} nombre={'Cubata'} precio={'1.50'}/>,
]
export const cafe =[
    <ProductSimple img={''} nombre={'Cortado / Expreso'} precio={'2.50'}/>,
    <ProductSimple img={''} nombre={'Barraquito'} precio={'1.50'}/>,
]

// Comida
export const arroces=[
    // <ProductSimple img={tabla} nombre={'Tabla de Pescado'} precio={'30,00'} descripcion={'Tabla de pescado para 2 personas Tabla de pescado para 2 personas......'}/>,
    <ProductSimple img={paellanegra} nombre={'aroz negro de pulpo arena-negra'} precio={'15,00'} extra={'Por persona, Min-2 PAX'} descripcion={'Ingredientes: Cebolla, Pimiento Verde, Chipirones, Chopitos, Tomate Natural, Tinta Calamar, Pulpo, Langostinos, Zamburiñas'} alergenos={[{img:moluscos, alt:'moluscos'},{img:crustaceos, alt:'crustaceos'},{img:sulfitos, alt:'Sulfitos'},{img:pescado, alt:'pescado'}]}/>,
    <ProductSimple img={valenciana} nombre={'paella valenciana'} precio={'30,00'} extra={'Por persona, Min-2 PAX'} descripcion={'Ingredientes: Pollo, Conejo, Tomate Natural, Pimentón, Habichuelas, Caracoles, Te de Azafrán'}/>,
    // <ProductSimple img={pollo} nombre={'pollo'} precio={'10,00'}/>,
    // <ProductSimple img={croquetas} nombre={'croquetas'} precio={'1.50'} extra={'La unidad'}/> ,
]

export const postres=[
    <ProductSimple img={helado} nombre={'Copa helada'} precio={'5,00'}/>,
    <ProductSimple img={flan} nombre={'flan'} precio={'1.50'}/>,
]