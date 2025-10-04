const nuestroPrimeritoObjeto = {
    claveComoString: 'valor',
    aquiHayUnNumero: 3000,
    esUnBooleano: true,
    unObjetoAnidado: {}
}

console.log("1. Objeto basico:", nuestroPrimeritoObjeto);

const nombre = 'Fran Quesada';
const escuela = 'Fictizia';

const profesor = { nombre, escuela }

console.log("2. Shorthand property names:", profesor);

const string = 'mi string'


const objeto = {
    propiedad1: 'Esta es mi propiedad original'
}

objeto.propiedad2 = 'Esta es una propiedad nueva'
objeto.propiedad1 = 'Esta propiedad la modifico'

console.log("3. Objeto mutado:", objeto);

const heroes = {
    dc: ['batman', 'superman'],
    marvel: ['spiderman', 'iron man']
}

const { dc: heroesDcDestruct } = heroes

console.log("4. Destructuring - Heroes DC:", heroesDcDestruct);

const dc = {
    heroes: {
        batman: {
            nombre: 'Bruce Wayne'
        },
        superman: {
            nombre: 'Clark Kent'
        }
    }
}

const { heroes: { batman } } = dc

console.log("5. Destructuring anidado - Batman:", batman);

const objetoParaCongelar = {
    nombre: 'Fran Quesada',
    edad: 26,
}


const objetoCongelado = Object.freeze(objetoParaCongelar)
objetoCongelado.localidad = 'Madrid'

console.log("6. Object.freeze() - Objeto congelado:", objetoCongelado);
console.log("6. Object.freeze() - localidad agregada?:", objetoCongelado.localidad);

const nuevoObjeto = {
    ...objetoCongelado,
    localidad: 'Madrid'
}

console.log("6. Nuevo objeto con spread operator:", nuevoObjeto);