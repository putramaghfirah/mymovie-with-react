import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { List } from 'rsuite';

type Detail = {
  Title: string;
  Poster: string;
  Year: string;
  Director: string;
  Writer: string;
  Actors: string;
};

export function Post() {
  const { id } = useParams<{ id: string }>();
  const [detail, setDetail] = useState<Detail>();

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=cca42522&i=${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setDetail(data);
      });
  }, [id]);
  return (
    <React.Fragment>
      {detail && (
        <Container>
          <Image src={detail.Poster}></Image>
          <Content>
            <List bordered>
              <List.Item>
                <Title>
                  {detail.Title} ({detail.Year})
                </Title>
              </List.Item>
              <List.Item>
                <Director>Director : {detail.Director}</Director>
              </List.Item>
              <List.Item>
                <Writer>Writer : {detail.Writer}</Writer>
              </List.Item>
              <List.Item>
                <Actor>Actor : {detail.Actors}</Actor>
              </List.Item>
            </List>
          </Content>
        </Container>
      )}
    </React.Fragment>
  );
}

const Image = styled.img`
  width: 250px;
  height: 300px;
  margin: 20px 0 20px 20px;
`;

const Container = styled.div`
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  overflow: auto;
  @media only screen and (min-width: 700px) {
    /* height: 400px; */
    margin: 20px auto;
    width: 700px;
  }
  @media only screen and (max-width: 650px) {
    margin: 20px;
    display: block;
    ${Image} {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

const Director = styled.p``;

const Writer = styled.p``;

const Actor = styled.p``;
