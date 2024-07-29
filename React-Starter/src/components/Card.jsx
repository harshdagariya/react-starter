import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardEle() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://dummyimage.com/600x400/000/fff" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                        Click Me
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardEle;