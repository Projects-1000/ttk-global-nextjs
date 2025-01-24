import * as yup from 'yup';
import { FormSchemaProps } from './ToolSectionForm.type';

export const schema: yup.ObjectSchema<FormSchemaProps> = yup.object<FormSchemaProps>().shape({
  contractCount: yup
    .number()
    .typeError('Số lượng hợp đồng phải là số')
    .min(1, 'Số lượng hợp đồng phải lớn hơn 0')
    .required('Số lượng hợp đồng không được để trống'),
  investmentCapital: yup
    .number()
    .typeError('Vốn đầu tư phải là số')
    .min(10000, 'Vốn đầu tư trung bình của mỗi hợp đồng EBO-C (>= 10.000 USD)')
    .required('Vốn đầu tư không được để trống')
});
