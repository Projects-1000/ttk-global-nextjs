'use client';
import { formatNumberWithDots, removeDotsFromString } from '@/utils/format';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { FormEvent, useState } from 'react';
import * as yup from 'yup';
import Button from '../../Button/Button';
import ControlledInput from '../../Input';
import { FormSchemaProps } from './ToolSectionForm.type';
import { schema } from './schema';

const ToolSectionForm = () => {
  const [result, setResult] = useState({
    contractCount: '',
    investmentCapital: '',
    totalRate: '',
    commissionPhase1: '',
    commissionPhase2: ''
  });
  const [errors, setErrors] = useState<{ contractCount?: string; investmentCapital?: string }>({});

  const resetForm = () => {
    setResult({
      contractCount: '',
      investmentCapital: '',
      totalRate: '',
      commissionPhase1: '',
      commissionPhase2: ''
    });
    setErrors({});
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const contractCount: FormSchemaProps['contractCount'] = Number(
      removeDotsFromString(formData.get('contractCount') as string)
    );
    const investmentCapital: FormSchemaProps['investmentCapital'] = Number(
      removeDotsFromString(formData.get('investmentCapital') as string)
    );

    try {
      await schema.validate({ contractCount, investmentCapital }, { abortEarly: false });

      const totalRate = 0.025 * Number(contractCount) * Number(investmentCapital);
      const commissionPhase1 = totalRate / 2;
      const commissionPhase2 = totalRate / 2;

      setResult({
        contractCount: contractCount?.toString() || '',
        investmentCapital: investmentCapital?.toString() || '',
        totalRate: totalRate.toString(),
        commissionPhase1: commissionPhase1.toString(),
        commissionPhase2: commissionPhase2.toString()
      });

      setErrors({});
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const newErrors: { contractCount?: string; investmentCapital?: string } = {};
        err.inner.forEach((error) => {
          if (error.path) {
            newErrors[error.path as keyof FormSchemaProps] = error.message;
          }
        });
        setErrors(newErrors);
      }
    }
  }

  const onNumberInput = (e: FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget.querySelector('input');
    if (input) {
      input.value = formatNumberWithDots(input.value);
    }
  };

  const outputStyle = [
    {
      '& input': {
        backgroundColor: '#FAFAFF !important',
        color: 'black !important',
        WebkitTextFillColor: 'black !important'
      }
    }
  ];

  return (
    <div className="flex flex-col gap-m">
      <form
        onSubmit={onSubmit}
        className="border-gradient-stroke-1-p-4xl-xl flex w-full flex-col bg-white p-3xl text-black laptop:gap-2xl laptop:p-4xl"
      >
        <div className="flex flex-col gap-2xl laptop:gap-4xl">
          <div className="grid grid-cols-1 gap-x-3xl gap-y-2xl laptop:grid-cols-2">
            <div className="flex flex-col gap-s">
              <ControlledInput
                name="contractCount"
                label="Số lượng hợp đồng"
                required
                value={result.contractCount}
                onChange={(e) => setResult({ ...result, contractCount: e.target.value })}
                error={errors.contractCount}
                onInput={onNumberInput}
              />
              <p className="footnote-light">
                *Số lượng hợp đồng EBO-C mà Đơn vị cộng tác dự kiến giới thiệu thành công
              </p>
            </div>
            <div className="flex flex-col gap-s">
              <ControlledInput
                name="investmentCapital"
                label="Vốn đầu tư"
                required
                value={result.investmentCapital}
                onChange={(e) => setResult({ ...result, investmentCapital: e.target.value })}
                error={errors.investmentCapital}
                onInput={onNumberInput}
                icon={<AttachMoneyIcon />}
              />
              <p className="footnote-light">{` *Vốn đầu tư trung bình của mỗi hợp đồng EBO-C (>= 10.000 USD)`}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-3xl gap-y-2xl laptop:grid-cols-3">
            <div className="flex flex-col gap-s">
              <ControlledInput
                label="Tổng hoa hồng"
                name="totalRate"
                disabled
                value={formatNumberWithDots(result.totalRate)}
                sx={outputStyle}
                icon={<AttachMoneyIcon />}
              />
              <p className="footnote-light">*Tổng hoa hồng dự kiến mà Đơn vị cộng tác nhận được</p>
            </div>
            <div className="flex flex-col gap-s">
              <ControlledInput
                name="commissionPhase1"
                label="Hoa hồng đợt 1"
                disabled
                value={formatNumberWithDots(result.commissionPhase1)}
                sx={outputStyle}
                icon={<AttachMoneyIcon />}
              />
              <p className="footnote-light">*Số tiền Đơn vị cộng tác nhận được ngay sau Khách hàng khi ký hợp đồng</p>
            </div>
            <div className="flex flex-col gap-s">
              <ControlledInput
                name="commissionPhase2"
                label="Hoa hồng đợt 2"
                disabled
                value={formatNumberWithDots(result.commissionPhase2)}
                sx={outputStyle}
                icon={<AttachMoneyIcon />}
              />
              <p className="footnote-light">
                *Số tiền Đơn vị cộng tác nhận được sau khi dự án của Khách hàng vận hành 6 tháng
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-xl laptop:gap-3xl">
            <Button text="Xóa" color="secondary" classCustom="btn__small laptop:btn__medium" onClick={resetForm} />
            <Button type="submit" isDirty text="Tính hoa hồng" classCustom="btn__small laptop:btn__medium" />
          </div>
        </div>
      </form>
      <div className="flex justify-end">
        <p className="rl-auto footnote-light">
          (*) Lưu ý: Hoa hồng tính theo từng dự án và được nhận vào ngày 05 của tháng.
        </p>
      </div>
    </div>
  );
};

export default ToolSectionForm;
