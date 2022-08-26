/* eslint-disable no-unused-expressions */
import styled from "styled-components";
import { useState } from "react";
import Modal from "react-modal";

import { CgPlayListRemove } from "react-icons/cg";
import Remove from "./Remove";

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

const Div = styled.div`
  margin-top: 1rem;
  padding: 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 25px #0000001a;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  opacity: 1;
`;

const DivButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 3px 10px;
  color: #fff;
  cursor: pointer;
  border: none;
  background: #f95e5a 0% 0% no-repeat padding-box;
  border-radius: 5px;
  transition: 0.5s;

  svg {
    font-size: 1rem;
  }

  &:hover {
    background: #cc4c4c;
  }
`;

const H1 = styled.h1``;

const Desc = styled.p`
  margin-top: 0.5rem;
`;

const Tags = styled.p`
  font-weight: bold;
  margin-top: 0.5rem;
  span {
    margin-right: 1rem;
  }
`;

/* eslint-disable react/prop-types */
function Cards({ title, link, desc, tags, id }) {
  const [modalOpen, setModalOpen] = useState(false);

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  return (
    <Div>
      <DivButton>
        <H1>
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
        </H1>
        <Button type="button" onClick={handleOpenModal}>
          <CgPlayListRemove /> Remove
        </Button>
      </DivButton>
      <Desc>{desc}</Desc>
      <Tags>
        {tags.map((item) => (
          <span key={item}>#{item}</span>
        ))}
      </Tags>
      <Modal
        isOpen={modalOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <Remove close={handleCloseModal} id={id} />
      </Modal>
    </Div>
  );
}

export default Cards;
