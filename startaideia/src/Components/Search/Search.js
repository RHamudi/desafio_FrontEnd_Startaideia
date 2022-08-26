/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import Modal from "react-modal";
import Cards from "../Cards/Cards";
import { Get } from "../useFetch/Fetch";
import Add from "../Pages/Add/Add";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

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
  const [url, setUrl] = useState("http://localhost:3004/tools");

  const [inputValue, setInputValue] = useState("");
  const [radioValue, setRadioValue] = useState(false);

  const [dados, setDados] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  function handleChange(e) {
    setInputValue(e.target.value);
    if (radioValue === false) {
      setUrl(`http://localhost:3004/tools?q=${inputValue}`);
    } else {
      setUrl(`http://localhost:3004/tools?tags_like=${inputValue}`);
    }
  }

  function handleRadio() {
    setRadioValue(!radioValue);
  }

  useEffect(() => {
    Get(url, setDados);
  }, [inputValue]);

  return (
    <Div>
      <Form>
        <div>
          <Input value={inputValue} onChange={handleChange} />
          <Check type="checkbox" id="check" onClick={handleRadio} />
          <label htmlFor="check">Search in tags only</label>
        </div>
        <Button type="button" onClick={handleOpenModal}>
          <MdAdd /> ADD
        </Button>
      </Form>

      <DivCards>
        {dados.map((item) => (
          <Cards
            id={item.id}
            title={item.title}
            link={item.link}
            desc={item.description}
            tags={item.tags}
          />
        ))}
      </DivCards>
      <Modal
        isOpen={modalOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <Add />
      </Modal>
    </Div>
  );
}

export default Search;
