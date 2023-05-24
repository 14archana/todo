import Container from "react-bootstrap/Container";
import { useForm } from "react-hook-form";


export default function App() {
  


  const { register, handleSubmit } = useForm();
  const onFormSubmit  = data => console.log(data);
  const onErrors = errors => console.error(errors);




  return (
    <div>
      <Container className="mt-5 pt-5">
        <h1 className="text-center mb-5">Form</h1>


<form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
  <label htmlFor="">Name</label>
  <input type="text" name="name" {...register('name',{ required: "name is required" })} id="" />
  <br /><br />
  <label htmlFor="">Address</label>
  <input type="text" name="address" {...register('address',{ required: "address is required" })} id="" />
  <br />
  <br />
  <label htmlFor="">Place</label>
  <input type="text" name="address" {...register('address',{ required: "Place is required" })} id="" />
  <br /><br />
  <label htmlFor="">College</label>
  <input type="text" name="College" {...register('address',{ required: "College is required" })} id="" />
  <br /><br />
  <label htmlFor="">Contact number</label>
  <input type="text" name="contact number"{...register('contact number',{ required: "contact number is required" })} id="" />
  <br /><br />
  <button type="submit">Submit</button>
</form>






      </Container>
    </div>
  );
}