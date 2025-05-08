const billItem = {
    
}
const paymentType = billItem.billDetails?.paymentType[30].paymentType || "Credit";

console.log(paymentType);