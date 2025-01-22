'use client';
import { FormEvent, useState } from 'react';
import Button from '../../Button/Button';
import ControlledInput from '../../Input';

const ToolSectionForm = () => {
  const [result, setResult] = useState({
    contractCount: '',
    investmentCapital: '',
    totalRate: '',
    commissionPhase1: '',
    commissionPhase2: ''
  });

  const resetForm = () => {
    setResult({
      contractCount: '',
      investmentCapital: '',
      totalRate: '',
      commissionPhase1: '',
      commissionPhase2: ''
    });
  };
  console.log('rerender');
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const contractCount = formData.get('contractCount');
    const investmentCapital = formData.get('investmentCapital');

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
  }

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
                value={result.contractCount}
                onChange={(e) => setResult({ ...result, contractCount: e.target.value })}
              />
              <p className="footnote-light">
                *Số lượng hợp đồng EBO-C mà Đơn vị cộng tác dự kiến giới thiệu thành công
              </p>
            </div>
            <div className="flex flex-col gap-s">
              <ControlledInput
                name="investmentCapital"
                label="Vốn đầu tư"
                value={result.investmentCapital}
                onChange={(e) => setResult({ ...result, investmentCapital: e.target.value })}
              />
              <p className="footnote-light">{` *Vốn đầu tư trung bình của mỗi hợp đồng EBO-C (>= 10.000 USD)`}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-3xl gap-y-2xl laptop:grid-cols-3">
            <div className="flex flex-col gap-s">
              <ControlledInput
                inputColor="bg-blue-10"
                label="Tổng hoa hồng"
                name="totalRate"
                disabled
                value={result.totalRate}
              />
              <p className="footnote-light">*Tổng hoa hồng dự kiến mà Đơn vị cộng tác nhận được</p>
            </div>
            <div className="flex flex-col gap-s">
              <ControlledInput
                name="commissionPhase1"
                inputColor="bg-blue-10"
                label="Hoa hồng đợt 1"
                disabled
                value={result.commissionPhase1}
              />
              <p className="footnote-light">*Số tiền Đơn vị cộng tác nhận được ngay sau Khách hàng khi ký hợp đồng</p>
            </div>
            <div className="flex flex-col gap-s">
              <ControlledInput
                name="commissionPhase2"
                inputColor="bg-blue-10"
                label="Hoa hồng đợt 2"
                disabled
                value={result.commissionPhase2}
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
