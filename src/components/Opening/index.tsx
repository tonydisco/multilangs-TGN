import Introduce from './Introduce';
import Construction from './Construction';
import ProductionCapacity from './ProductionCapacity';
import Partners from './Partners';

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
      <Partners />
    </section>
  );
};

export default Opening;
