const validPin = 1234;
const addMoney = document.getElementById('add-money-btn');
addMoney.addEventListener('click', function (e) {
  e.preventDefault(); //Default Behavior close
  const bank = document.getElementById('bank-name').value.trim();
  const accountNumber = document.getElementById('bank-account').value.trim();
  const amount = document.getElementById('add-amount').value.trim();
  const pin = document.getElementById('add-pin').value.trim();

  const amountConvert = parseInt(amount);
  const accountNumberConvert = parseInt(accountNumber);
  const pinConvert = parseInt(pin);

  if (accountNumberConvert.toString().length !== 11) {
    alert('Please enter a valid 11-digit account number.');
    return;
  }
  if (pinConvert !== validPin) {
    alert('Invalid PIN. Please try again.');
    return;
  }

  const balanceDisplay = parseInt(
    document.getElementById('total-bal').innerText
  );
  const currentBalance = balanceDisplay + amountConvert;
  document.getElementById('total-bal').innerText = currentBalance;
  alert(`Successfully added $${amountConvert} to your account.`);
});

const cashOut = document.getElementById('cashout-btn');
cashOut.addEventListener('click', function (e) {
  e.preventDefault(); //Default Behavior close
  const accountNumber = document.getElementById('agent-number').value.trim();
  const withdrawAmount = document
    .getElementById('withdraw-amount')
    .value.trim();
  const pin = document.getElementById('add-pin').value.trim();

  const withAmountConvert = parseInt(withdrawAmount);
  const accountNumberConvert = parseInt(accountNumber);
  const pinConvert = parseInt(pin);

  const balanceDisplay = parseInt(
    document.getElementById('total-bal').innerText
  );
  const currentBalance = balanceDisplay - withAmountConvert;
  document.getElementById('total-bal').innerText = currentBalance;
  alert(`Successfully withdrawn $${withAmountConvert} from your account.`);
});

// Toggling Add Money Form
document.getElementById('add-money').addEventListener('click', function () {
  document.getElementById('cashout-button').style.display = 'none';
  document.getElementById('add-money-button').style.display = 'block';
  document.getElementById('add-money').classList.add('actives');
  document.getElementById('cashout').classList.remove('actives');
});
document.getElementById('cashout').addEventListener('click', function () {
  document.getElementById('cashout-button').style.display = 'block';
  document.getElementById('add-money-button').style.display = 'none';
  document.getElementById('cashout').classList.add('actives');
  document.getElementById('add-money').classList.remove('actives');
});
