import Counter from '../components/counter';

const data = [
  {
    name: 'Counter 1',
  },
  {
    name: 'Counter 2',
  },
  {
    name: 'Counter 3',
  },
  {
    name: 'Counter 4',
  },
  {
    name: 'Counter 5',
  },
];

function Home() {
  return (
    data.map(({ name }) => <><Counter counterTitle={name} /></>));
}

export default Home;
