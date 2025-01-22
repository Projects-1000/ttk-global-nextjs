export async function onFormPostAction(formState: FormData) {
  const contractCount = formState.get('contractCount');
  const investmentCapital = formState.get('investmentCapital');

  if (!contractCount || !investmentCapital) {
    throw new Error('Please fill in all fields');
  }
  const totalRate = 0.025 * Number(contractCount) * Number(investmentCapital);
  const commissionPhase1 = totalRate / 2;
  const commissionPhase2 = totalRate / 2;
  console.log(commissionPhase1, commissionPhase2, totalRate);
  formState.set('totalRate', totalRate.toString());
  formState.set('commissionPhase1', commissionPhase1.toString());
  formState.set('commissionPhase2', commissionPhase2.toString());
}
