import React, { useState } from 'react';
import { Alert, Button, Form, FormGroup, Input, Modal, ModalHeader, ModalBody, ModalFooter, NavLink } from 'reactstrap';

const CreateProduct = () => {
    const [modal, setModal] = useState(false);
    const [visible, setVisible] = useState(false)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [imageurl, setImageUrl] = useState('')
    const AlertFail = (props) => {
        props = [visible, setVisible]
        const onDismiss = () => setVisible(false);
      
        return (
          <Alert color="danger" isOpen={visible} toggle={onDismiss}>
            Fail to create product. Please fill all the required fields!
          </Alert>
        );
      }
      
    const handleSubmit = (event) => {
        event.preventDefault()

        fetch('https://test-binar.herokuapp.com/v1/products/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('token')
            },
            body: JSON.stringify({ name, price, imageurl })
        }).then(response => response.json())
            .then((data) => {
                if (data.result) {
                    window.location.reload()
                } else {
                    setVisible(true)
                }
            })
            // .then(() => setModal(!modal))
    }
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button onClick={toggle}>Create new</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Create new</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Input
                                value={name}
                                onChange={e => setName(e.target.value)}
                                name="name"
                                type="name"
                                placeholder="Product Name"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                                type="number"
                                placeholder="Price (Dollar USD)"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                            value={imageurl}
                            onChange={e => setImageUrl(e.target.value)}
                            type="url"
                            placeholder="Image url" />
                        </FormGroup>
                    </Form>

                    <AlertFail />
                </ModalBody>
                <ModalFooter>
                    <NavLink href='#' onClick={toggle}>Back</NavLink>{' '}
                    <Button onClick={handleSubmit}>Create</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CreateProduct;