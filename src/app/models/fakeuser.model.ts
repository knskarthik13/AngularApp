export interface Fakeuser{
    id:number,
            email:string,
            name:string,
            username:string,
            address: {
                street: string,
                suite: string,
                city: string,
                zipcode: string,
                geo:{
                    lat:string,
                    lng:string
                }
              },
            profession:string,
            website:string,
            phone:string,
            company:{
                name:string,
                catchPhtase:string,
                bs:string
            }
}