import styled from 'styled-components';

export function NotFound() {
  return <PageNotFound>404. Page Not Found</PageNotFound>;
}

const PageNotFound = styled.h2`
  text-align: center;
  font-size: 20px;
`;
