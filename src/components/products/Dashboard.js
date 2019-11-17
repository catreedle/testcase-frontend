import React, { useEffect, useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Row } from 'reactstrap';
import CreateProduct from './CreateProduct'
import DeleteProduct from './DeleteProduct';
import EditProduct from './EditProduct';

const Dashboard = (props) => {
    const [products, setProducts] = useState([])
    const handleLogout = () => {
        sessionStorage.clear()
    }
    useEffect(() => {
        fetch('https://test-binar.herokuapp.com/v1/products', {
            method: 'GET',
            headers: {
                'Authorization': sessionStorage.getItem('token')
            }
        }).then(response => response.json())
            .then((data) => {
                if (data.result) {
                    setProducts([...products, ...data.result])
                }
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    var allProducts = products.map(product => {
        return (
            <div key={product.id}>
                <Col xs="6" md="4">
                    <Card style={{ width: '25vw', margin: '1em', padding: '1em' }}>
                        <div>
                            <DeleteProduct id={product.id} />
                            <EditProduct id={product.id} />
                        </div>
                        <CardImg top style={{ width: '23vw', height: '23vh' }} src={product.imageurl} alt="product" />
                        <CardBody>
                            <Row><CardTitle>{product.name}</CardTitle></Row>
                            <Row><CardSubtitle>$ {product.price}</CardSubtitle></Row>
                        </CardBody>
                    </Card>
                </Col>
            </div>
        )
    })

    return (
        <div>
            <Navbar expand="md">
                <Nav className="mr-auto" navbar>
                    <NavbarBrand>Product List</NavbarBrand>
                    <NavItem>
                        <CreateProduct />
                    </NavItem>
                </Nav>
                <Nav>
                    <NavLink href="/" onClick={handleLogout}>Logout</NavLink>
                </Nav>
            </Navbar>
            <hr></hr>
            <Row style={{ display: 'flex', justifyContent: 'center', margin: '1em', padding: '1em' }}>
                {allProducts}
            </Row>
        </div>
    );
}

export default Dashboard;