import Introduce from './Introduce';
import Construction from './Construction';
import ProductionCapacity from './ProductionCapacity';

const Opening = () => {
  return (
    <section
      style={{
        marginBottom: 400
      }}
    >
      <Introduce />
      <Construction />
      <ProductionCapacity />
    </section>
  );
};

export default Opening;
