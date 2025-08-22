document.getElementById('loginBtn').addEventListener('click', function (e) {
  e.preventDefault(); //Default Behavior close

  const mobileNumber = 12345678904;
  const pinNumber = 1234;

  const mobileInputValue = document.getElementById('mobile-Number').value;
  const pinNumberValue = document.getElementById('pin-Number').value;

  const mobileNumberConvert = parseInt(mobileInputValue);
  const pinNumberConvert = parseInt(pinNumberValue);

  if (mobileNumberConvert === '' || pinNumberConvert === '') {
    alert('Please enter both mobile number and PIN.');
    return;
  }
  if (
    typeof mobileNumberConvert !== 'number' ||
    isNaN(mobileNumberConvert) ||
    mobileInputValue.length !== 11
  ) {
    alert('Please enter a valid 11-digit mobile number.');
    return;
  }

  if (mobileNumberConvert === mobileNumber && pinNumberConvert === pinNumber) {
    window.location.href = './home.html';
  } else {
    alert('Invalid mobile number or PIN. Please try again.');
  }
});
