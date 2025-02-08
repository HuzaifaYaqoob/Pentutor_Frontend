



const OrderViewPage = (props) => {
    const { order_id } = props?.match?.params
    return (
        <div>
            <div className="max-w-[900px] mx-auto">

                <h1>Order View Page</h1>
                <p>{order_id}</p>
            </div>
        </div>
    )
}

export default OrderViewPage