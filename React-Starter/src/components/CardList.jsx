import CardEle from './Card'
function CardList() {
    const data = [1,2,3,4,5,6,7,8,9]
    return (
        <div className="card-list">
            {data.map((item, index) => (
                <CardEle key={index} title={item.title} description={item.description} />
            ))}
        </div>
    );
}

export default CardList