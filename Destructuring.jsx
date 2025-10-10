function Info_Details({name ,age ,depart,mobile_no})
{
  return(
  <>
  <h1>Name:{name}</h1>
  <h1>age:{age}</h1>
  <h1>depart:{depart}</h1>
  <h1>mobile no:{mobile_no}</h1>

  </>
  );

}
function App()
{
  return(
    <>
    <Info_Details name="chaitanya" age={20} depart="compuetr" mobile_no="xxxxxxxxxx"/>
    </>

  );
}
export default App;
