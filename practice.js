function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
    let reversed = ""
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
}

const Calculator = {
    add(x, y) {
        return x + y;
    },

    subtract(x, y) {
        return x - y;
    },

    devide(x, y) {
        if (y == 0)
            return "y cannot equal zero";
        else return x / y;
    },

    multiply(x, y) {
        return x * y;
    }
}

export {capitalize, reverseString, Calculator};