import "../../style/Global.css"
import { Nav } from "../header/Nav/Nav";
import StickeyHeader from "../StickeyHeader/StickeyHeader";
import Card from "../Card/Card";
import { Container } from "@mui/material";
export const Home = () => {
    return (
        <>
            <Nav/>
            <StickeyHeader/>
            <Card/>
        </>
    )
}