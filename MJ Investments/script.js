// script.js
function calculateNSSF() {
    // Get input values
    const age = parseInt(document.getElementById('age').value);
    const yearsOfWork = parseInt(document.getElementById('yearsOfWork').value);
    const salary = parseFloat(document.getElementById('salary').value);
    
    // Constants
    const retirementAge = 55;
    const nssfPercentage = 0.15;
    
    // Calculate years to retirement
    const yearsToRetirement = retirementAge - age;
    
    // Calculate total NSSF accumulated
    const totalNSSF = yearsOfWork * 12 * (nssfPercentage * salary);
    
    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Years to Retirement: ${yearsToRetirement}</p>
        <p>Total NSSF Accumulated: UGX ${totalNSSF.toFixed(2)}</p>
    `;
}
