import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const ColorForm = ({addColor}) => {
  const [formData, setFormData] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  // const addData = (newData) => {
  //   setData(newData);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({...formData});
    setFormData('');
    navigate('/colors');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Color name </label>
        <input
          id='name'
          type='text'
          name='name'
          placeholder='Enter a name for the color'
          value={formData.name}
          onChange={handleChange}
        />
        <br/>
        <label htmlFor='color'>Color value </label>
        <input 
          name='color'
          type='color'
          value={formData.color}
          onChange={handleChange}
        />
        <br/>
        <button>Add Color</button>
      </form>
    </div>
  )
}

export default ColorForm;