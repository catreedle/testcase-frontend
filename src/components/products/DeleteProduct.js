import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const DeleteProduct = (props) => {
    const [modal, setModal] = useState(false)

    const handleDelete = (event) => {
        event.preventDefault()

        fetch(`https://test-binar.herokuapp.com/v1/products/${props.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('token')
            },
        }).then(response => response.json())
        .then((data) => {
            if(data.result) {
                console.log(data.result.message)
                window.location.reload()
            } else {
                console.log(data.message)
            }
        })
    }

    const toggle = () => setModal(!modal);

    return (
        <div>
            <span onClick={toggle} style={{cursor: 'pointer', float: 'right', fontSize: '35px', margin: '5px'}}><i className="fa fa-trash"></i></span>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalBody>
                    Are you sure you want to delete<br></br>
                    product name ?
                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggle}>
                        No
                    </Button>
                    <Button onClick={handleDelete}>
                        Yes, delete it
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default DeleteProduct