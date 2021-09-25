import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    height: 60vh;
    background-color: #efefef;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;
const InputContainer = styled.div`
    width: 30%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    
`;
const Input = styled.input`
    border: none;
    flex: 10;
    padding-left: 20px;
    font-size: 20px;
`;
const Button = styled.button`
    flex: 1;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Announcements = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates on your favorite products</Desc>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Announcements
