/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import Cards from "../Cards/Cards";
import { Get } from "../useFetch/Fetch";

const Div = styled.div``;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    margin-left: 0.1rem;
    font-size: 20px;
  }
`;

const Input = styled.input`
  width: 200px;
  height: 20px;
  background: #f5f4f6 0% 0% no-repeat padding-box;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  opacity: 1;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  background: #365df0 0% 0% no-repeat padding-box;
  border-radius: 5px;
  border: none;
  padding: 5px 20px;
  opacity: 1;
  transition: 0.5s;
  color: white;

  svg {
    font-size: 1rem;
  }

  &:hover {
    background: #889ef7;
  }
`;

const Check = styled.input`
  margin-left: 0.4rem;
  width: 20px;
  border: 2px solid #ffffff;
  opacity: 1;
`;

const DivCards = styled.div``;

function Search() {
  const url = "http://localhost:3004/tools";

  const [dados, setDados] = useState([]);

  useEffect(() => {
    Get(url, setDados);
  }, []);

  return (
    <Div>
      <Form>
        <div>
          <Input />
          <Check type="checkbox" id="check" />
          <label htmlFor="check">Search in tags only</label>
        </div>
        <Button type="button">
          <MdAdd /> ADD
        </Button>
      </Form>

      <DivCards>
        {dados.map((item) => (
          <Cards
            title={item.title}
            key={item.id}
            link={item.link}
            desc={item.description}
            tags={item.tags}
          />
        ))}
      </DivCards>
    </Div>
  );
}

export default Search;
