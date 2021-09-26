import styled from "styled-components";

const Info = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: black;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    font-size: 30px;
    &:hover {
      color: white;
    }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  `;

  const Container = styled.div`
  flex: 1;
  margin: 20px;
  height: 70vh;
  position: relative;
  transition: all 0.5s ease-in-out;

  &:hover {
    //border: 1px solid lightgray;
    transform: scale(1.05);

  }
  &:hover ${Button}{
    color: white;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Button>{item.title}</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
