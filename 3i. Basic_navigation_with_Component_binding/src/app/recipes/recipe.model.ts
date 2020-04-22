export class Recipe{

    public id:number;
    public name:string;
    public description:string;
    public imagePath:string;

    constructor(id:number, name: string, desc:string,imagePath:string)
    {
        this.name = name;
        this.id = id;
        this.description = desc;
        this.imagePath = imagePath;
    }
}