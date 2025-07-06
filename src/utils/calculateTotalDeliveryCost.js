const calculateTotalDeliveryCost = (parcelType, weight, senderCity, receiverCity) => {
	let deliveryCost = 0;
	if (parcelType === "document") {
		if (senderCity === receiverCity) deliveryCost = 60;
		else deliveryCost = 80;
	} else if (parcelType === "not document" && weight <= 3) {
		if (senderCity === receiverCity) deliveryCost = 110;
		else deliveryCost = 150;
	} else if (parcelType === "not document" && weight > 3) {
		const costPerKg = 40;
		if (senderCity === receiverCity) deliveryCost = costPerKg * weight;
		else deliveryCost = costPerKg * weight + 40;
	}
	return deliveryCost;
};

export default calculateTotalDeliveryCost;
