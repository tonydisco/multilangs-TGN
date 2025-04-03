import Introduce from './Introduce';
import Construction from './Construction';
import ProductionCapacity from './ProductionCapacity';
import Partners from './Partners';
import Projects from './Projects';
import Products from './Products';
import News from './News';

const Opening = () => {
  return (
    <section
      style={{
        marginBottom: 120
      }}
    >
      <Introduce />
      <Construction />
      <ProductionCapacity />
      <Projects />
      <Products />
      <News />
      <Partners />
    </section>
  );
};

export default Opening;
