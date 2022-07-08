class EmployeePayroll {
    
    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
        this.email = params[5];
        this.zipCode = params[6];
    }

    //getter and setter method
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is incorrect';
    }
    get id() 
    {
        return this._id;
    }
    set id(id)
    {
        let idCheck = RegExp('^[1-9]{1}([0-9]*)$')
        if(idCheck.test(id))
        {
            this._id = id;
        }
        else
        {
            throw "Employee ID should be non zero positive number";
        }
    }
    get salary() 
    {
        return this._salary;
    }
    set salary(salary)
    {
        let salaryCheck = RegExp('^[1-9]{1}([0-9]*)([.]*)[0-9]*$')
        if(salaryCheck.test(salary))
        {
            this._salary = salary;
        }
        else
        {
            throw "Employee salary should be non zero positive number";
        }
    }
    get gender() 
    {
        return this._gender;
    }
    set gender(gender)
    {
        let genderCheck = RegExp('^[M|F]{1}$')
        if(genderCheck.test(gender))
        {
            this._gender = gender;
        }
        else
        {
            throw "gender should be M or F";
        }
    }
    get startDate() 
    {
        return this._startDate;
    }
    set startDate(startDate)
    {
        let today = new Date();
        let dateCheck = RegExp("^[0-9]{1,2}[/][0-9]{1,2}[/][0-9]{4}$");
        if(startDate <= today.toLocaleDateString())
        {
            if(dateCheck.test(startDate))
            {
                this._startDate = startDate;
            }
            else
            {
                throw "Format Mismatch";
            }
        }
        else
        {
            throw "Employee Start Date should  be less than or equal to current Date";
        }
    }
    get email() 
    {
        return this._email;
    }
    set email(email)
    {
        let emailCheck = RegExp('^[0-9a-z]{1,}([.+-]?)[0-9a-z]{1,}(@)[a-z0-9]{1,}(.)(com|co|net)((.in|.com|.au)*)$')
        if(emailCheck.test(email))
        {
            this._email = email;
        }
        else
        {
            throw "Invalid Email ID";
        }
    }
    get zipCode() 
    {
        return this._zipCode;
    }
    set zipCode(zipCode)
    {
        let zipCodeCheck = RegExp('^[0-9]{6}$')
        if(zipCodeCheck.test(zipCode))
        {
            this._zipCode = zipCode;
        }
        else
        {
            throw "Invalid zipCode";
        }
    }
    
    Employee()
    {
        return "id =" + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", startDate = " + this.startDate +
        ",Email: " + this.email + ",Zip Code: " + this.zipCode;
    }
}
{
    try
{
let employeePayroll = new EmployeePayroll(1, "Vijaya", 30000, "F", new Date("8/7/2022").toLocaleDateString(), "vijaya@gmail.com", 521329);
    console.log(employeePayroll.Employee());
    employeePayroll = new EmployeePayroll(2, "Harsha", 40000, "M", new Date("6/7/2022").toLocaleDateString(), "harsha@gmail.com", 530048);
    console.log(employeePayroll.Employee());
    employeePayroll.id = 3;
    employeePayroll.name = "Aaarna";
    employeePayroll.salary = 20000;
    employeePayroll.gender = "M";
    employeePayroll.startDate = new Date("9-7-2022").toLocaleDateString();
    employeePayroll.email = "aarna@gmail.com";
    employeePayroll.zipCode = 50;
    console.log(employeePayroll.Employee());

}
catch(ex)
{
    console.error(ex);
}
}
