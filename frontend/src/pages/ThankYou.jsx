const ThankYou = () => {
	return (
		<div className="min-h-screen bg-gray-50">
			<header className="bg-primary-900 text-white text-center py-20">
				<h1 className="text-4xl font-bold mb-4">
					ThankYou for Registration On FreelancerHub
				</h1>
				<p className="text-lg mb-8">
					Thank you for your patience. Please wait until your account is
					reviewed and activated by our admin team on the website.
				</p>
				<button className="btn btn--primary">
					<a href="/auth">Login</a>
				</button>
			</header>
		</div>
	);
};

export default ThankYou;
