import {WithNavigation} from '../../../App';

export type TData = {
  title: string;
  data: any[];
};

export interface TableChildrenPropsData extends WithNavigation {
  props: TData;
  index: number;
}

export type TableChildrenProps = Partial<TableChildrenPropsData>;

export interface AccordionTableProps extends WithNavigation {
  tableData: TData[];
  tableTitles: string[];
  children: React.ReactElement;
}
