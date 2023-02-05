import Card from 'react-bootstrap/Card';


function cardImage({titulo, url, info}) {
  return (
    <Card style={{ width: '300px'}} className="card">
      <Card.Img variant="top" src={url}/>
      <Card.Body className='bg-primary'>
        <Card.Title className="titulo">{titulo}</Card.Title>
        <Card.Text>
          {info}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default cardImage;
