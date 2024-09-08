import './pagination.css';


export default function Pagination({ dataLength, productType }) {
    const totalPage = Math.ceil(dataLength / 6);

    return (
        <div className='pagination_container'>

            {Array.from({ length: totalPage }, (_, i) => (
                <a key={i + 1} href={`/products/${productType}?page=${i + 1}`}  className='page_number'>{i + 1}</a>
            ))}
        </div>
    )
}
