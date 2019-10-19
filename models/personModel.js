const db = require("./conn");


class PersonDatabase{
    constructor(first_name, last_name, email, gender, job ){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.gender = gender;
        this.job = job;
    }
   static async getAll (){
    try{
        const response = await db.any(`select * from person;`);
        console.log("response", response);
        return response;
    }
    catch(error){
        return error.message; 
    }
   };

}

module.exports = PersonDatabase;