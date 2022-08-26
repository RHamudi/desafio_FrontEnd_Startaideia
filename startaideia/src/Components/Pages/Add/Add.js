/* eslint-disable no-use-before-define */
/* eslint-disable object-shorthand */
import { useState } from "react";
import styled from "styled-components";
import { Post } from "../../useFetch/Fetch";

const DivAdd = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 400px;

  label {
    margin: 0.1rem 0;
    font-size: 16px;
    font-weight: bold;
  }
`;

const H1 = styled.h1`
  margin: 2rem 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  height: 20px;
  background: #f5f4f6 0% 0% no-repeat padding-box;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  opacity: 1;
`;

const InputDesc = styled.textarea`
  background: #f5f4f6 0% 0% no-repeat padding-box;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background: #365df0 0% 0% no-repeat padding-box;
  border-radius: 5px;
  margin: 0.5rem 0;
  width: 70px;
  transition: 0.5s;

  &:hover {
    background: #889ef7;
  }
`;

/* eslint-disable jsx-a11y/label-has-associated-control */
function Add() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState("");

  function name(e) {
    setTitle(e.target.value);
  }

  function links(e) {
    setLink(e.target.value);
  }

  function descs(e) {
    setDesc(e.target.value);
  }

  function tagss(e) {
    setTags(e.target.value);
  }

  const array = tags.split(" ");

  const dados = {
    title: title,
    link: link,
    description: desc,
    tags: array,
  };

  function submit() {
    Post("http://localhost:3004/tools", dados);
    document.location.reload();
  }

  return (
    <DivAdd>
      <H1>Add new tool</H1>
      <Form>
        <label htmlFor="name">Tool Name</label>
        <Input type="text" id="name" value={title} onChange={name} />
        <label htmlFor="link">Tool Link</label>
        <Input type="text" id="link" value={link} onChange={links} />
        <label htmlFor="">Tool description</label>
        <InputDesc
          type="text"
          id="desc"
          rows="5"
          value={desc}
          onChange={descs}
        />
        <label htmlFor="tags">Tags</label>
        <Input type="text" id="tags" value={tags} onChange={tagss} />
        <Button type="button" onClick={submit}>
          Add Tool
        </Button>
      </Form>
    </DivAdd>
  );
}

export default Add;
