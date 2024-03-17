import "../../style/Global.css"
import { Nav } from "../header/Nav/Nav";
import StickeyHeader from "../StickeyHeader/StickeyHeader";
import { Container } from "@mui/material";
export const Home = () => {
    return (
        <>
            <Nav/>
            <StickeyHeader/>
        </>
    )
}