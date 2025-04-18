export default function initFinance() {
    // Wait until the canvases are available in the DOM
    const waitForCanvas = setInterval(() => {
      const incomeCanvas = document.getElementById("myDoughnutChart-income");
      const expenseCanvas = document.getElementById("myDoughnutChart-expense");
  
      if (incomeCanvas && expenseCanvas) {
        clearInterval(waitForCanvas); // Proceed only when both are ready
        loadFinanceCharts(incomeCanvas, expenseCanvas);
      }
    }, 100);
  }
  
  function loadFinanceCharts(incomeCanvas, expenseCanvas) {
    // Income Chart
    new Chart(incomeCanvas.getContext("2d"), {
      type: 'doughnut',
      data: {
        labels: ['Salary', 'Freelance', 'Others'],
        datasets: [{
          data: [1200, 500, 300],
          backgroundColor: ['#4caf50', '#81c784', '#c8e6c9'],
          borderColor: '#fff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        // maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          },
          title: {
            display: true,
            text: 'Income'
          }
        }
      }
    });
  
    // Expense Chart
    new Chart(expenseCanvas.getContext("2d"), {
      type: 'doughnut',
      data: {
        labels: ['Rent', 'Groceries', 'Transport'],
        datasets: [{
          data: [600, 400, 200],
          backgroundColor: ['#f44336', '#ff8a65', '#e57373'],
          borderColor: '#fff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        // cutout: 90 ,
        // maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          },
          title: {
            display: true,
            text: 'Expenses'
          }
        }
      }
    });
  }
  