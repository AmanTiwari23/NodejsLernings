const homePage = (req,res)=>{
    res.send("this is home page of employee")
}
const aboutPage = (req,res)=>{
    res.send("this is about page of employee");
}

const designstionPage = (req,res)=>{
    res.send("this is designationa page of employee");
}

const departmentPage = (req,res)=>{
   res.send("this is department page of empolyee");
}

const salaryPage = (req,res)=>{
    res.send("this is salary page of empolyee");
}

module.exports = {homePage,aboutPage,departmentPage,departmentPage,salaryPage};
