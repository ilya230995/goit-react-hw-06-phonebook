import Phonebook from './components/Phonebook/Phonebook';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import Container from './components/Container/Container';

function App() {
  return (
    <Container>
      <h2 className="section-title">Phonebook</h2>
      <Phonebook />
      <h2 className="section-title">Statistics</h2>
      <Filter />
      <Contacts />
    </Container>
  );
}

export default App;
