import News from './News';
import Partners from './Partners';
import Products from './Products';
import Projects from './Projects';
import Introduce from './Introduce';
import Construction from './Construction';
import ProductionCapacity from './ProductionCapacity';
import '@/styles/Opening.scss';

const Opening = () => {
  return (
    <section className="tgn-opening-section">
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
