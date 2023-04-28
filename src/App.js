import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";

import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import ViewDisplayBalances from "./components/ViewDisplayBalances";
import EntryLine from "./components/EntryLine";
function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance
        title="Your Balance"
        value="555592.50"
        color="black"
        size="small"
      />

      <ViewDisplayBalances />
      <MainHeader title="History" type="h3" />

      <EntryLine description="income" value="10,000.0" />
      <EntryLine description="expense" value="3,000.0" isExpense />

      <MainHeader title="Add New Transaction" type="h3" />

      <NewEntryForm />
    </Container>
  );
}

export default App;
