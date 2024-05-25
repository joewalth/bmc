document.addEventListener('DOMContentLoaded', (event) => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    document.getElementById('currentDate').innerText = formattedDate;
    document.getElementById('agreementDate').innerText = formattedDate;
});

document.getElementById('agreeCheckbox').addEventListener('change', function() {
    document.getElementById('downloadButton').disabled = !this.checked;
});

document.getElementById('downloadButton').addEventListener('click', function() {
    const contractText = document.querySelector('.contract-content').innerText;
    const blob = new Blob([contractText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Bmc_Team_Member_Contract.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
