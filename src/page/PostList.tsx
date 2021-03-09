import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { InputGroup, Icon, Input, Panel } from 'rsuite';

type Movie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export function PostList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState<string>('');
  const styles = {
    width: 300,
    marginBottom: 10,
  };

  function handleChange(value: string) {
    setSearch(value);
  }

  function handleClick() {
    fetch(`http://www.omdbapi.com/?apikey=cca42522&s=${search}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  }
  return (
    <React.Fragment>
      <Row>
        <InputGroup inside style={styles}>
          <Input onChange={handleChange} placeholder="Search movies here..." />
          <InputGroup.Button onClick={handleClick}>
            <Icon icon="search" />
          </InputGroup.Button>
        </InputGroup>
      </Row>
      <Wrapper>
        <Container>
          {movies &&
            movies.map((movie, index) => {
              return (
                <Panel
                  key={index}
                  shaded
                  bordered
                  bodyFill
                  style={{
                    display: 'inline-block',
                    width: 240,
                    marginBottom: 20,
                  }}
                >
                  <Image src={movie.Poster} height="300" />
                  <Panel>
                    <Title>
                      <Link to={`/blog/${movie.imdbID}`}>{movie.Title}</Link>
                    </Title>
                  </Panel>
                </Panel>
              );
            })}
        </Container>
      </Wrapper>
    </React.Fragment>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  margin: 10px 0;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 800px;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 250px;
  height: 300px;
`;

const Title = styled.div`
  a {
    color: #a4a9b3;
    text-decoration: none;
  }

  a:hover {
    color: white;
  }
`;
