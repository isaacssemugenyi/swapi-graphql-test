import styled from "styled-components";

interface IHomePageProps {}

const Container = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export function HomePage(props: IHomePageProps) {
    return <Container>
        <h1>Hot People</h1>
    </Container>
}