/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Delete } from "../useFetch/Fetch";

const DivRemove = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    font-size: 18px;
  }
`;

const DivButton = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  button:nth-child(1) {
    padding: 5px 10px;
    border: none;
    background: #e1e7fd 0% 0% no-repeat padding-box;
    border-radius: 5px;
    transition: 0.5s;

    &:hover {
      background: #cad6fc 0% 0% no-repeat padding-box;
    }
  }
  button:nth-child(2) {
    padding: 5px 10px;
    border: none;
    background: #f95e5a 0% 0% no-repeat padding-box;
    border-radius: 5px;
    transition: 0.5s;

    &:hover {
      background: #cc4c4c 0% 0% no-repeat padding-box;
    }
  }
`;

function Remove({ close, id }) {
  function handleDelete() {
    Delete(`http://localhost:3004/tools/${id}`);
    document.location.reload(true);
  }

  return (
    <DivRemove>
      <h1>Remove Tool</h1>
      <p>Are you sure you want to remove?</p>
      <DivButton>
        <button type="button" onClick={close}>
          Cancel
        </button>
        <button type="button" onClick={handleDelete}>
          Yes, Remove
        </button>
      </DivButton>
    </DivRemove>
  );
}
export default Remove;
