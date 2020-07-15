
const single = document.getElementById("single")
const zvE1 = document.getElementById("zvE1")
const zvE2 = document.getElementById("zvE2")
zvE2.style.display = "none"
const year = document.getElementById('year')
let zvE;
let ESt
const result = document.getElementById("result")

function showZVE2() {
    single.checked ? zvE2.style.display = "none" : zvE2.style.display = "block"
}

function berechne() {
    // console.log("test")
    // console.log(year.value)
    // console.log(zvE1.value)
    // if (!single.checked) {
    //     console.log(zvE2.value)
    // }    
    single.checked ? zvE = Number(zvE1.value) : zvE = (Number(zvE1.value) + Number(zvE2.value)) / 2
    console.log(zvE)
    if (year.value == 'year20') {
        if (zvE <= 9408) {
            ESt = 0
        } else if (zvE >= 9409 && zvE <= 14532) {
            let y = (zvE - 9408) / 10000
            ESt = (972.87 * y + 1400) * y
        } else if (zvE >= 14533 && zvE <= 57051) {
            let z = (zvE - 14532) / 10000
            ESt = (212.02 * z + 2397) * z + 972.79
        }
        else if (zvE >= 57051 && zvE <= 270500) {
            ESt = 0.42 * zvE - 8963.74
        } else if (zvE >= 270501) {
            ESt = 0.45 * zvE - 17078.74
        }

    } else if (year.value == 'year19') {
        if (zvE <= 9.168
            ) {
            ESt = 0
        } else if (zvE >= 9169 && zvE <= 14254) {
            let y = (zvE - 9168) / 10000
            ESt = (980.14 * y + 1400) * y
        } else if (zvE >= 14255 && zvE <= 55960) {
            let z = (zvE - 14254) / 10000
            ESt = (216.16 * z + 2397) * z + 965.58
        }
        else if (zvE >= 55961 && zvE <= 265326) {
            ESt = 0.42 * zvE - 8780.90
        } else if (zvE >= 265.327) {
            ESt = 0.45 * zvE - 16740.68
        }
        console.log("2019")
    } else {
        if (zvE <= 9000) {
            ESt = 0
        } else if (zvE >= 9001 && zvE <= 13996) {
            let y = (zvE - 9000) / 10000
            ESt = (997.80 * y + 1400) * y
        } else if (zvE >= 13997 && zvE <= 54949) {
            let z = (zvE - 13.996) / 10000
            ESt = (212.13 * z + 2397) * z + 948.49
        }
        else if (zvE >= 54950 && zvE <= 260532) {
            ESt = 0.42 * zvE - 8621.75
        } else if (zvE >= 260533) {
            ESt = 0.45 * zvE - 16437.70
        }
        console.log("2018")
    }
    single.checked ? result.innerHTML = ESt : result.innerHTML = 2 * ESt
}





