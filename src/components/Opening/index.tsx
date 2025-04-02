import Introduce from './Introduce';
import Construction from './Construction';
import ProductionCapacity from './ProductionCapacity';
import Partners from './Partners';
import Projects from './Projects';

const Opening = () => {
  return (
    <section
      style={{
        marginBottom: 150
      }}
    >
      <Introduce />
      <Construction />
      <ProductionCapacity />
      <Projects />
      <Partners />
    </section>
  );
};

export default Opening;
