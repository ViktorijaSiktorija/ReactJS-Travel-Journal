import Header from '../src/components/Header';
import Entry from '../src/components/Entry';
import data from './data';

export default function App() {
  const cities = data.map((data) => {
    return <Entry key={data.id} {...data} />;
  });
  return (
    <>
      <Header />
      <main className="container">{cities}</main>
    </>
  );
}
