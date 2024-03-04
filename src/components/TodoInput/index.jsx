import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useFormik} from 'formik'
import { generateId } from '../../utils/generateId';

function TodoInput({onData}) {

  const {resetForm,handleChange,handleSubmit,values}=useFormik({
    initialValues: {title:"", description:""},
    onSubmit:(data)=>{
      data.id=generateId()
      console.log("data",data);
      onData(data)
      resetForm

    }
  })
  return (
    <div className='p-5 w-50 mx-auto'>
       <h1 className="text-center my-4 text-success">My Todo App</h1>
      <Form.Group className='mb-3 '>
       
        <Form.Control
          type='text'
        
          placeholder='Title...'  value={values.title} onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
       
        <Form.Control
          type='desc'
          placeholder='Desc...'
           value={values.description} onChange={handleChange}
        />
      </Form.Group>
      <Button
        variant='outline-success'
        className='w-100'onClick={handleSubmit}
      >
        Add
      </Button>
    </div>
  );
}

export default TodoInput;
