export interface FormProps {
  contractCount: number;
  investmentCapital: number;
  totalRate: string;
  commissionPhase1: string;
  commissionPhase2: string;
}

export interface FormSchemaProps extends Pick<FormProps, 'contractCount' | 'investmentCapital'> {}