import { IVenda } from '../Context/DataContext';

type IBox = {
  title: string;
  filterCondition: 'falha' | 'pago' | 'processando';
  filterConditionFalse?: boolean;
  data: IVenda[];
};

const Box = ({ title, filterCondition, filterConditionFalse, data }: IBox) => {
  const filteredData = data.filter((i) =>
    filterConditionFalse
      ? i.status !== filterCondition
      : i.status === filterCondition
  );
  const total = filteredData
    .reduce((acc, i) => acc + i.preco, 0)
    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="box">
      <h2>{title}</h2>
      <span>{total}</span>
    </div>
  );
};

export default Box;
