import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators, State } from "./store"

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const dispatch = useDispatch();

  const { getAllPeople, getSinglePerson, getNextOrPreviousAllPeople  } = bindActionCreators(actionCreators, dispatch);
  const users = useSelector((state: State) => state.people)

  return (
    <AppContainer>
      <h3>Home work</h3>
      <h1>{ users }</h1>
      <button onClick={() => getAllPeople()}>Deposit</button>
      <button onClick={() => getSinglePerson("Isaac")}>Withdraw</button>
      <button onClick={() => getNextOrPreviousAllPeople(2)}>NextPage</button>
    </AppContainer>
  );
}

export default App;
