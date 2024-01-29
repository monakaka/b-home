const bazarCostCalculation = (elementId) => {
    const bazarCostField = document.getElementById(elementId);
    const bazarCostString = bazarCostField.value;
    const bazarCostNum = parseFloat(bazarCostString);
    return bazarCostNum;
}

// meal function ----------------->>>
const mealData = (elementId) => {
    const mealField = document.getElementById(elementId);
    const mealString = mealField.value;
    const mealNum = parseFloat(mealString);
    return mealNum;
}


document.getElementById('button').addEventListener('click', function () {
    const shamimBazar = bazarCostCalculation('shamim-bazar');
    const rakibBazar = bazarCostCalculation('rakib-bazar');
    const sohagBazar = bazarCostCalculation('sohag-bazar');
    const khayerBazar = bazarCostCalculation('khayer-bazar');
    const diamondBazar = bazarCostCalculation('diamond-bazar');
    const arifBazar = bazarCostCalculation('arif-bazar');
    const salmanBazar = bazarCostCalculation('salman-bazar');
    const sujonBazar = bazarCostCalculation('sujon-bazar');


    // total bazar 
    const totalBazar = shamimBazar + rakibBazar + sohagBazar + khayerBazar + diamondBazar + arifBazar + salmanBazar + sujonBazar;


    // total bazar set 
    const totalBazarField = document.getElementById('total-bazar');
    totalBazarField.innerText = totalBazar;


    // meal calculation --------------->>>
    const shamimMeal = mealData('shamim-Meal');
    const rakibMeal = mealData('rakib-Meal');
    const sohagMeal = mealData('sohag-Meal');
    const khayerMeal = mealData('khayer-Meal');
    const diamondMeal = mealData('diamond-Meal');
    const arifMeal = mealData('arif-Meal');
    const salmanMeal = mealData('salman-Meal');
    const sujonMeal = mealData('sujon-Meal')


    // total meal ---------------
    const totalMeal = shamimMeal + rakibMeal + sohagMeal + khayerMeal + diamondMeal + arifMeal + salmanMeal + sujonMeal;

    // set total meal ------------------
    const totalMealField = document.getElementById('total-meal');
    totalMealField.innerText = totalMeal;


    // Per meal charge calculation

    const perMealCharge = totalBazar / totalMeal;

    // per meal charge set ------
    const mealCharge = document.getElementById('per-meal-cost');
    mealCharge.innerText = perMealCharge.toFixed(2);


    // meal charge calculation
    // shamim meal charge -----
    const shamimTotalMealCharge = shamimMeal * perMealCharge;
    console.log(shamimTotalMealCharge);
    const shamimMealChargeField = document.getElementById('shamim-meal-charge');
    shamimMealChargeField.innerText = shamimTotalMealCharge.toFixed(2);

    // rakib meal charge 
    const rakibTotalMealCharge = rakibMeal * perMealCharge;
    const rakibMealChargedField = document.getElementById('rakib-meal-charge')
    rakibMealChargedField.innerText = rakibTotalMealCharge.toFixed(2);

    // sohag meal charge 
    const sohagTotalMealCharge = sohagMeal * perMealCharge;
    const sohagMealChargedField = document.getElementById('sohag-meal-charge')
    sohagMealChargedField.innerText = sohagTotalMealCharge.toFixed(2);

    // khayer meal charge 
    const khayerTotalMealCharge = khayerMeal * perMealCharge;
    const khayerMealChargedField = document.getElementById('khayer-meal-charge')
    khayerMealChargedField.innerText = khayerTotalMealCharge.toFixed(2);
    // diamond meal charge 
    const diamondTotalMealCharge = diamondMeal * perMealCharge;
    const diamondMealChargedField = document.getElementById('diamond-meal-charge')
    diamondMealChargedField.innerText = diamondTotalMealCharge.toFixed(2);
    // arif meal charge 
    const arifTotalMealCharge = arifMeal * perMealCharge;
    const arifMealChargedField = document.getElementById('arif-meal-charge')
    arifMealChargedField.innerText = arifTotalMealCharge.toFixed(2);
    // salman meal charge 
    const salmanTotalMealCharge = salmanMeal * perMealCharge;
    const salmanMealChargedField = document.getElementById('salman-meal-charge')
    salmanMealChargedField.innerText = salmanTotalMealCharge.toFixed(2);
    // sujon meal charge 
    const sujonTotalMealCharge = sujonMeal * perMealCharge;
    const sujonMealChargedField = document.getElementById('sujon-meal-charge')
    sujonMealChargedField.innerText = sujonTotalMealCharge.toFixed(2);



    // transaction section
    const transactionDemo = 'পাবে ঃ';
    const transactionDemo2 = 'দিবে ঃ';

    // shamim transaction 

    const shamimTransaction = shamimBazar - shamimTotalMealCharge;
    const shamimTransactionField = document.getElementById('shamim-transaction');
    if (shamimTransaction === 0) {
        shamimTransactionField.innerText = `Dismiss`;
    }
    else if (shamimTransaction > 0) {
        shamimTransactionField.innerText = `${transactionDemo}: ${shamimTransaction.toFixed(2)} tk`;
    }
    else if (shamimTransaction < 0) {
        shamimTransactionField.innerText = `${transactionDemo2}: ${shamimTransaction.toFixed(2)} tk`;
    }

    // rakib transaction 
    const rakibTransaction = rakibBazar - rakibTotalMealCharge;
    const rakibTransactionField = document.getElementById('rakib-transaction');
    if (rakibTransaction === 0) {
        rakibTransactionField.innerText = `Dismiss`;
    }
    else if (rakibTransaction > 0) {
        rakibTransactionField.innerText = `${transactionDemo}: ${rakibTransaction.toFixed(2)} tk`;
    }
    else if (rakibTransaction < 0) {
        rakibTransactionField.innerText = `${transactionDemo2}: ${rakibTransaction.toFixed(2)} tk`;
    }
    // sohag transaction 
    const sohagTransaction = sohagBazar - sohagTotalMealCharge;
    const sohagTransactionField = document.getElementById('sohag-transaction');
    if (sohagTransaction === 0) {
        sohagTransactionField.innerText = `Dismiss`;
    }
    else if (sohagTransaction > 0) {
        sohagTransactionField.innerText = `${transactionDemo}: ${sohagTransaction.toFixed(2)} tk`;
    }
    else if (sohagTransaction < 0) {
        sohagTransactionField.innerText = `${transactionDemo2}: ${sohagTransaction.toFixed(2)} tk`;
    }

    // khayer taransaction 
    const khayerTransaction = khayerBazar - khayerTotalMealCharge;
    const khayerTransactionField = document.getElementById('khayer-transaction');
    if (khayerTransaction === 0) {
        khayerTransactionField.innerText = `Dismiss`;
    }
    else if (khayerTransaction > 0) {
        khayerTransactionField.innerText = `${transactionDemo}: ${khayerTransaction.toFixed(2)} tk`;
    }
    else if (khayerTransaction < 0) {
        khayerTransactionField.innerText = `${transactionDemo2}: ${khayerTransaction.toFixed(2)} tk`;
    }
    // diamond transtion 
    const diamondTransaction = diamondBazar - diamondTotalMealCharge;
    const diamondTransactionField = document.getElementById('diamond-transaction');
    if (diamondTransaction === 0) {
        diamondTransactionField.innerText = `Dismiss`;
    }
    else if (diamondTransaction > 0) {
        diamondTransactionField.innerText = `${transactionDemo}: ${diamondTransaction.toFixed(2)} tk`;
    }
    else if (diamondTransaction < 0) {
        diamondTransactionField.innerText = `${transactionDemo2}: ${diamondTransaction.toFixed(2)} tk`;
    }
    // arif transaction 
    const arifTransaction = arifBazar - arifTotalMealCharge;
    const arifTransactionField = document.getElementById('arif-transaction');
    if (arifTransaction === 0) {
        arifTransactionField.innerText = `Dismiss`;
    }
    else if (arifTransaction > 0) {
        arifTransactionField.innerText = `${transactionDemo}: ${arifTransaction.toFixed(2)} tk`;
    }
    else if (arifTransaction < 0) {
        arifTransactionField.innerText = `${transactionDemo2}: ${arifTransaction.toFixed(2)} tk`;
    }
    // salman transaction 
    const salmanTransaction = salmanBazar - salmanTotalMealCharge;
    const salmanTransactionField = document.getElementById('salman-transaction');
    if (salmanTransaction === 0) {
        salmanTransactionField.innerText = `Dismiss`;
    }
    else if (salmanTransaction > 0) {
        salmanTransactionField.innerText = `${transactionDemo}: ${salmanTransaction.toFixed(2)} tk`;
    }
    else if (salmanTransaction < 0) {
        salmanTransactionField.innerText = `${transactionDemo2}: ${salmanTransaction.toFixed(2)} tk`;
    }
    // SUJON 
    const sujonTransaction = sujonBazar - sujonTotalMealCharge;
    const sujonTransactionField = document.getElementById('sujon-transaction');
    if (sujonTransaction === 0) {
        sujonTransactionField.innerText = `Dismiss`;
    }
    else if (sujonTransaction > 0) {
        sujonTransactionField.innerText = `${transactionDemo}: ${sujonTransaction.toFixed(2)} tk`;
    }
    else if (sujonTransaction < 0) {
        sujonTransactionField.innerText = `${transactionDemo2}: ${sujonTransaction.toFixed(2)} tk`;
    }
});



var downloadButton = document.getElementById('download-button');

downloadButton.addEventListener('click', function () {
    // Get the HTML content of the current page
    var html = document.documentElement.outerHTML;

    // Create a new blob with the HTML content
    var blob = new Blob([html], { type: 'text/html' });

    // Create a URL for the blob
    var url = URL.createObjectURL(blob);

    // Create a link and simulate a click to initiate the download
    var link = document.createElement('a');
    link.href = url;
    link.download = 'page.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up by revoking the URL object
    URL.revokeObjectURL(url);
});

