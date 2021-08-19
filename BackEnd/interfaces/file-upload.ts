export interface IfileUpload{// define los atributos que tendrá la imagen en este caso y el obj en general
    name: string,
    data: any,
    encoding: string,
    size: number,
    tempFilePath: string,
    truncated: boolean,
    mimetype: string,
    md5: string
    mv:Function

}