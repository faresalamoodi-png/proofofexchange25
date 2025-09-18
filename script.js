document.getElementById('amountNumber').addEventListener('input', function() {
    const amount = parseFloat(this.value);
    if (!isNaN(amount)) {
        const words = numberToWords(amount);
        document.getElementById('amountInWords').value = words + " ريال سعودي فقط";
    } else {
        document.getElementById('amountInWords').value = '';
    }
});

function numberToWords(num) {
    const arabicNumbers = ["", "واحد", "اثنان", "ثلاثة", "أربعة", "خمسة", "ستة", "سبعة", "ثمانية", "تسعة", "عشرة", "أحد عشر", "اثنا عشر", "ثلاثة عشر", "أربعة عشر", "خمسة عشر", "ستة عشر", "سبعة عشر", "ثمانية عشر", "تسعة عشر"];
    const tens = ["", "", "عشرون", "ثلاثون", "أربعون", "خمسون", "ستون", "سبعون", "ثمانون", "تسعون"];
    const hundreds = ["", "مائة", "مائتان", "ثلاثمائة", "أربعمائة", "خمسمائة", "ستمائة", "سبعمائة", "ثمانمائة", "تسعمائة"];
    const thousands = ["", "ألف", "ألفان", "ثلاثة آلاف", "أربعة آلاف", "خمسة آلاف", "ستة آلاف", "سبعة آلاف", "ثمانية آلاف", "تسعة آلاف"];
    const tenThousands = ["", "عشرة آلاف", "عشرون ألف", "ثلاثون ألف", "أربعون ألف", "خمسون ألف", "ستون ألف", "سبعون ألف", "ثمانون ألف", "تسعون ألف"];
    const hundredThousands = ["", "مائة ألف", "مائتان ألف", "ثلاثمائة ألف", "أربعمائة ألف", "خمسمائة ألف", "ستمائة ألف", "سبعمائة ألف", "ثمانمائة ألف", "تسعمائة ألف"];

    if (num < 20) return arabicNumbers[num];
    if (num < 100) {
        const ones = num % 10;
        const tensValue = Math.floor(num / 10) * 10;
        if (ones === 0) {
            return tens[Math.floor(num / 10)];
        } else {
            return arabicNumbers[ones] + " و" + tens[Math.floor(num / 10)];
        }
    }
    if (num < 1000) {
        const remainder = num % 100;
        if (remainder === 0) {
            return hundreds[Math.floor(num / 100)];
        } else {
            return hundreds[Math.floor(num / 100)] + " و" + numberToWords(remainder);
        }
    }
    if (num < 10000) {
        const remainder = num % 1000;
        if (remainder === 0) {
            return thousands[Math.floor(num / 1000)];
        } else {
            return thousands[Math.floor(num / 1000)] + " و" + numberToWords(remainder);
        }
    }
    if (num < 100000) {
        const remainder = num % 10000;
        if (remainder === 0) {
            return tenThousands[Math.floor(num / 10000)];
        } else {
            return tenThousands[Math.floor(num / 10000)] + " و" + numberToWords(remainder);
        }
    }
    if (num < 1000000) {
        const remainder = num % 100000;
        if (remainder === 0) {
            return hundredThousands[Math.floor(num / 100000)];
        } else {
            return hundredThousands[Math.floor(num / 100000)] + " و" + numberToWords(remainder);
        }
    }
    if (num == 1000000) return "مليون";

    return "العدد كبير جداً";
}

function printReceipt() {
   window.print();
}
