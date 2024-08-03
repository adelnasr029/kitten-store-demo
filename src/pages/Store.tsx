import { Col, Row } from "react-bootstrap"
import storeItems from "../data/item.json"
import { StoreItem } from "../components/StoreItem"
export function Store(){
    return(
    <>
    <h1>Store</h1>
    <Row XS={1} md={2} lg={3} className="g-3">
        {storeItems.map(item => (
            <Col>
                <StoreItem {...item}/>
            </Col>
        ))}
    </Row>
    </>
    )
}