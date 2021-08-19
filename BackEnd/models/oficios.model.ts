import {Schema, model} from 'mongoose';

const oficioSchema = new Schema ({

    oficio:{
        type:String,
        required:[true, '¿A qué te dedicas?']

    },
    descripcion:{
        type: String, 
        max: 100,
        required:[true, 'Añade una breve descripción'],

    },
    signUpDate: { 
        type: Date, 
        default: Date.now()
    },
    icon:{
        type: String,
        default:'material_icon.png'
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: "Usuario"
        
    },
    /////AGREGAR CALIFICACIONES

})

export const Oficios = model('Oficio', oficioSchema);