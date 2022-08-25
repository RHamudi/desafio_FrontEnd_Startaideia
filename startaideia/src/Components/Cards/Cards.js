import styled from "styled-components";

const Div = styled.div`
  margin-top: 1rem;
  padding: 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 25px #0000001a;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  opacity: 1;
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
function Cards({ title, link, desc, tags }) {
  return (
    <Div>
      <H1>
        <a href={link} target="_blank" rel="noreferrer">
          {title}
        </a>
      </H1>
      <Desc>{desc}</Desc>
      <Tags>
        {tags.map((item) => (
          <span>#{item}</span>
        ))}
      </Tags>
    </Div>
  );
}

export default Cards;
