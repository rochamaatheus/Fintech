import Box from '../Components/Box';
import GraficoVendas from '../Components/GraficoVendas';
import { useData } from '../Context/DataContext';

const Resumo = () => {
  const { data } = useData();

  if (!data) return null;
  return (
    <section>
      <div className="resumo flex mb">
        <Box
          title="Vendas"
          filterCondition="falha"
          data={data}
          filterConditionFalse={true}
        />
        <Box title="Recebido" filterCondition="pago" data={data} />
        <Box title="Processando" filterCondition="processando" data={data} />
      </div>
      <div className="box mb">
        <GraficoVendas data={data} />
      </div>
    </section>
  );
};

export default Resumo;
