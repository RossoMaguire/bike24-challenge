import { Container, Grid, GridItem } from '@chakra-ui/react';
import { Checkout, Controls, OrdersTable } from './components/Sections';

function App() {
  return (
    <div className='App'>
      <Container maxW='1440' color='white' py='20'>
        <Controls />
        <OrdersTable />
        <Checkout />
      </Container>
    </div>
  );
}

export default App;
