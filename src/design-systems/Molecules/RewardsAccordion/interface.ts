
export interface RewardsAccordionProps {
    type? : string
    label?: string
    btnLabel ? :string
    columns: ColumnData[];
    rowData: TableData[];
}


export interface ColumnData {
    name: string;
    id: string
  }
  
 export  interface TableData {
    fee: string 
    id : string 
    disable : string
    earned : string
 }