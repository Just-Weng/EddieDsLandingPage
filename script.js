function storeHours() {
    let date = new Date();
    let weekday = date.getDay();
    let hour = date.getHours();
    let isOpen = false;
    let wkdString;

    if (weekday >= 1 && weekday <= 6 && hour >= 11 && hour <= 21) {
        isOpen = true;
    } else {
        isOpen = false;
    }

    switch (weekday) {
        case 1:
            wkdString = "mon";
            break;
        case 2:
            wkdString = "tues";
            break;
        case 3:
            wkdString = "wed";
            break;
        case 4:
            wkdString = "thurs";
            break;
        case 5:
            wkdString = "fri";
            break;
        case 6:
            wkdString = "sat";
            break;
        default:
            wkdString = "sun";
            break;
    }

    // Grab the element by ID (no # in the string)
    const hourState = document.getElementById(wkdString);

    if (isOpen) {
        hourState.classList.add("store-open");
        hourState.classList.remove("store-closed");
    } else {
        hourState.classList.add("store-closed");
        hourState.classList.remove("store-open");
    }
}
