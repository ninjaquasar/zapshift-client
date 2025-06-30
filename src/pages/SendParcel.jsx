import SendParcelForm from "../components/forms/SendParcelForm";
import Divider from "../components/shared/Divider";

const SendParcel = () => {
	return (
		<div
			id="send-parcel-page"
			className="pt-16 pb-24"
		>
			<div className="px-24 py-20 bg-light rounded-4xl space-y-12">
				<h1 className="text-5xl font-extrabold text-secondary">Send Parcel</h1>
				<Divider />
				<h3 className="text-3xl font-extrabold text-secondary">
					Enter your parcel details
				</h3>
				<SendParcelForm />
				<p className="font-medium">
					<span className="text-success">✱</span> Pickup Time 4PM - 7PM Approx.
				</p>
			</div>
		</div>
	);
};

export default SendParcel;
