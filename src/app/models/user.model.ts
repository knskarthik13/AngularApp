export interface User{
            id:number,
            email:string,
            name:string,
            profilePic:string,
            address: {
                street: string,
                suite: string,
                city: string,
                zipcode: string
              },
            profession:string,
            mobileno:number
}