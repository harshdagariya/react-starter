import CardEle from './Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CardList() {
    const data = [1,2,3,4,5,6,7,8,9]
    return (
        <div className="container card-list">
            <Row>
                {data.map((item, index) => (
                    <Col sm={3} key={index} className='mb-4'>
                        <CardEle key={index} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default CardList