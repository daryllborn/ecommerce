import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Categories = () => {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItem item={item} key={item.id} />
            ))}         
        </Container>
    )
}

export default Categories
