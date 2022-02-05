import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ Form,Button,Navbar,Nav,Container} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <div className='navbar'>
          <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#home">CheeckPoint React JS</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About us</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
            </Container>
          </Navbar>

      </div>
<Form className='formulaire'>
  <fieldset disabled>
    <h1 className='titre'> Formulaire React </h1>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="FirstName">First Name</Form.Label>
      <Form.Control id="FirstName" placeholder="input your First Name" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="SecondName">Second Name</Form.Label>
      <Form.Control id="SecondName" placeholder="input your Second Name" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="Adresse">Adresse</Form.Label>
      <Form.Control id="Adresse" placeholder="input your Adresse" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
    
    <Form.Group className="mb-3">
      <Form.Check
        type="checkbox"
        id="disabledFieldsetCheck"
        label="Can't check this"
      />
    </Form.Group>
    <center>
    <Button type="submit">Submit</Button>
    </center>
  </fieldset>
</Form>
    </div>
  );
}

export default App;
