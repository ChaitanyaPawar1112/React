//form using controlled components
import React,{useState} from "react"

function Form()
{
  const[Form,setForm]=useState({
    fname:"chaitanya",
    lname:"pawar",
    mobile_no:"097466742",
    email:"@gmail.com"


  });

  const submit_handler=()=>
  {
    if(Form.fname=="" || Form.lname=="" || Form.mobile_no=="" || Form.email=="")
    {
      alert("please filled all fields");
    }
    else if(isNaN(Form.mobile_no))
    {
      alert("mobile no should be in number only");
    }
    else if(!Form.email.includes("@") || !Form.email.includes("gmail.com"))
    {
      alert("email is invalid please write correct email");
    }
    else
    {
      alert("submit successfully");
      console.log(Form.fname);
      console.log(Form.email);
    }
  }

  return(
    <div>

         <label>Enter first name:</label>
         <input type="text" value={Form.fname} onChange={(e)=>setForm({...Form,fname:e.target.value})}/>
         <br />

         <label>Enter last name:</label>
         <input type="text" value={Form.lname} onChange={(e)=>setForm({...Form,lname:e.target.value})}/>
         <br />

         <label>Enter mobile no:</label>
         <input type="text" value={Form.mobile_no} onChange={(e)=>setForm({...Form,mobile_no:e.target.value})}/>
         <br />

         <label>Enter Email:</label>
         <input type="text" value={Form.email} onChange={(e)=>setForm({...Form,email:e.target.value})}/>
         <br />

         <p>name:{Form.fname} {Form.lname} , email:{Form.email}</p>

         <button type="button" onClick={submit_handler}>submit</button>
        

    </div>
 

  );

}
export default Form;
