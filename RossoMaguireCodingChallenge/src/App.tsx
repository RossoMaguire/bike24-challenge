import { Container } from '@chakra-ui/react';
import { Checkout, Controls, OrdersTable } from './components/Sections';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Container maxW='1440' color='white' py='20'>
        <Header />
        <Controls />
        <OrdersTable />
        <Checkout />
      </Container>
    </div>
  );
}

export default App;
