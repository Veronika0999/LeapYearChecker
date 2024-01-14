let isLeapYear = function(year) {
 return (year % 4 ===0 && (year % 100 != 0 || year % 400 === 0));
}

let checkLeapYear = function() {
    const startYear = parseInt(document.getElementById("startYear").value);
    const endYear = parseInt(document.getElementById("endYear").value);

    if(isNaN(startYear) || isNaN(endYear)){
        alert("Pleasse fill both start year and end year fields.");
        return;  
    }

    let resultText="<strong>Leap Years: <strong/>";

    for (let year = startYear; year <= endYear; year++) {
        if (isLeapYear(year)) {
            resultText += year + " ";
        }
    }

    document.getElementById("result").innerHTML = resultText || "No leap years in the given range.";
}