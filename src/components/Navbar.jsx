import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive"
import { Link } from "react-router-dom"


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;  
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  text-decoration: none;
`;

const Logo = styled.h1`
  font-size: 40px;
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const StyledLink  = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
      <Container>
        <Wrapper>
          <Left>
            <Language> EN </Language>
            <SearchContainer>
              <Input />
              <Search style={{color:"gray", fontSize:16}}/>
            </SearchContainer>
          </Left>
          <Center>
            <StyledLink to="/">
              <Logo>BORN.</Logo>
            </StyledLink>
          </Center>
          <Right>
          <StyledLink to="/register">
            <MenuItem>REGISTREREN</MenuItem>
          </StyledLink>
          <StyledLink to="/login">
            <MenuItem>LOGIN</MenuItem>
          </StyledLink>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
  );
};

export default Navbar;
