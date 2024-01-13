export interface Employee{
    firstName:string,
    lastName:string,
    experience:string,
    agr:string,
    address:[
        {
            houseNo:string,
            streetName:string,
            landmark:string,
            countryName:string,
            stateName:string,
            cityName:string
        }
    ],
    id:any
}