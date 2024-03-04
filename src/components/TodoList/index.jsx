import React, { useState } from 'react';
import { ListGroup, Modal, Button, Form } from 'react-bootstrap';

function TodoList({ list, onRemove, onUpdate }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleUpdate = (item) => {
    setSelectedItem(item);
    setFormData({ title: item.title, description: item.description });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setFormData({ title: '', description: '' });
    setShowModal(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    
    onUpdate(selectedItem.id, formData);
    setShowModal(false);
  };
  const handleRemove = () => {
    if (selectedItem) {
      onRemove(selectedItem.id);
      setShowModal(false);
    }
  };
  return (
    <>
     
    <ListGroup className='w-50 mx-auto'>
      {list?.map((item, index) => (
        <ListGroup.Item
          className='d-flex justify-content-between align-items-center cursor-pointer'
          role='button'
          key={item.id}
          onClick={() => handleUpdate(item)}
        >
          <div>
            {index + 1}: {item.title}|{item.description}{' '}
          </div>
          <Button variant="outline-success" size="sm" onClick={() => handleUpdate(item)}>Edit</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                name='title'
                value={formData.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                name='description'
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="danger" onClick={handleRemove}>
            Remove
          </Button>
          <Button variant='secondary' onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TodoList;
