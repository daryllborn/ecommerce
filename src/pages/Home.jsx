import styled from "styled-components";
import Navbar from "../components/Navbar"
import Announcements from "../components/Announcements"
import Slider from "../components/Slider"
import Categories from "../components/Categories"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"

const Container = styled.div`
    justify-content: center;
    align-items: center;
`;


const Home = () => {
    return (
        <Container>
            <Announcements />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
        </Container>
    )
}

export default Home
