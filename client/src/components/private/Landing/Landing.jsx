
import StickyHeader from "./StickeyHeader/StickeyHeader"
import Card from "./Card/Card"
import GetHotelData from "../../utils/Context/GetHotelData"
function Landing() {
    return (
        <>
        <GetHotelData>
            <StickyHeader />
            <Card />
        </GetHotelData>
        </>
    )
}

export default Landing