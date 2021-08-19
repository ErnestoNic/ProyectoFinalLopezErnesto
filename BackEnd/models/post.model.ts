import { Schema, Document, model } from "mongoose";

const postSchema = new Schema<Ipost> ({

    created:{
        type:Date
    },
    comentario:{
        type: String
    },
   
    coords:{
        type: String
    },
    

    img:[{
        type: String

    }],
    calificaciones: {
        type: Number
    },
    usuario:{//como si fuera la foreing key de mysql-> establece relacion con otro schema
        type: Schema.Types.ObjectId,
        ref:'Usuario',
        required: [true, "debe completar el usuario"]
    }

});
postSchema.pre<Ipost>('save', function (next){//funciona como midelware
    this.created = new Date()
    next()
})

interface Ipost extends Document {
    created: Date,
    comentario: string,
    coords: string,
    calificaciones: number,
    img: string[],
    usuario: string
}

export const Post = model<Ipost>('Post', postSchema);