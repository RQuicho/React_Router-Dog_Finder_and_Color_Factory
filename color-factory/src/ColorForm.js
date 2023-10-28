import React, {useState} from 'react';

const ColorForm = () => {
  const [formData, setFormData] = useState('');
  const [data, setData] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  const addData = (newData) => {
    setData(newData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addData({...formData});
    setFormData('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id='name'
          type='text'
          name='name'
          placeholder='Enter a name for the color'
          value={formData.name}
          onChange={handleChange}
        />
        <input type='color' />
        <button>Add Color</button>
      </form>
    </div>
  )
}

export default ColorForm;