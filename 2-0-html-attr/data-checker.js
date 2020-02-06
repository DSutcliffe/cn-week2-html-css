const dataChecker = (string, rank) => {
    if (string.toLowerCase() == "codenation" && rank == 1) {
        // console.log(string)
        console.log("String and Rank are BOTH correct!")
    } else if (string.toLowerCase() == "codenation" && rank != 1) {
        // console.log(string)
        console.log("String is correct, but rank is incorrect")
    } else {
        // console.log(string)
        console.log("String is incorrect")
    }
}

dataChecker("CODENATION", 1)
dataChecker("Codenation", 2)
dataChecker("BodeNation", 1)