import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Input, Modal, ModalHeader, ModalBody, ModalFooter, NavLink } from 'reactstrap';

const EditProduct = (props) => {
    const [modal, setModal] = useState(false);
    const [sendRequest, setSendRequest] = useState(false)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [imageurl, setImageUrl] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()

        fetch(`https://test-binar.herokuapp.com/v1/products/${props.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('token')
            },
            body: JSON.stringify({ name, price, imageurl })
        }).then(response => response.json())
            .then((data) => {
                if (data.result) {
                    console.log(data)
                } else {
                    console.log(data)
                }
            }).then(() => setModal(!modal))
    }
    const toggle = () => {
        setModal(!modal)
        setSendRequest(!sendRequest)
    }
    useEffect(() => {
        if (sendRequest) {
            fetch(`https://test-binar.herokuapp.com/v1/products/${props.id}`, {
                method: 'GET',
                headers: {
                    'Authorization': sessionStorage.getItem('token')
                }
            }).then(response => response.json())
                .then((data) => {
                    setName(data.result.name)
                    setPrice(data.result.price)
                    setImageUrl(data.result.imageurl)
                })
                setSendRequest(false)
        }
    }, [sendRequest])
    return (
        <div>
            <span onClick={toggle} style={{ cursor: 'pointer', float: 'right', fontSize: '35px', margin: '5px' }}><i style={{ float: 'right', fontSize: '35px', margin: '5px' }} className="fa fa-edit"></i></span>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Edit Product</ModalHeader>
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
                </ModalBody>
                <ModalFooter>
                    <NavLink href='#' onClick={toggle}>Back</NavLink>{' '}
                    <Button onClick={handleSubmit}>Update</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default EditProduct;