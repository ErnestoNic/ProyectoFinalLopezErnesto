import { Schema, model } from "mongoose";

const categoriaSchema = new Schema({

    nombre:{
        type:String,
        unique: [true, 'la categoria ya existe'],
        required:[true, '¿Categoría?']

    },
    descripcion:{
        Type: String, 
        max: 100,
        required:[true, 'Añade una descripcion'],

    },

    signUpDate:{
        type:Date,
        default: Date.now
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: "Usuario"
        
    },
    oficios:{
        type: Schema.Types.ObjectId,
        ref: "Oficios"
    }
})
export const Categorias = model('Categoria', categoriaSchema);