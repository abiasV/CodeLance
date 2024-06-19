import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
import { Link } from 'react-router-dom';
>>>>>>> 7877bfe840695eceb0f64c689c6a17c4264bb70e

const LINKS = [
	{
		title: "Product",
		items: ["Overview", "Features", "Solutions", "Tutorials"],
	},
	{
		title: "Company",
		items: ["About us", "Careers", "Press", "News"],
	},
	{
		title: "Resource",
		items: ["Blog", "Newsletter", "Events", "Help center"],
	},
];

const currentYear = new Date().getFullYear();

const Home = () => {
	const [activeTab, setActiveTab] = useState("spa");
	return (
		<div className="container 2xl:max-w-screen-2xl">
			<nav className="p-4 bg-primary-900 shadow-lg sticky top-0 z-10">
				<div className="mx-auto flex justify-between items-center">
					<div className="font-bold text-red-900">
						<a href="#" className="text-2xl">
							CodeLance
						</a>
					</div>
					<div className="hidden md:flex space-x-8">
						<li className="text-secondary-300 block hover:text-secondary-900 hover-underline p-2">
							<a className="nav-link" href="#home">Home</a>
						</li>
						<li className="text-secondary-300 block hover:text-secondary-900 hover-underline p-2">
							<a className="nav-link" href="#about">About</a>
						</li>
						<li className="text-secondary-300 block hover:text-secondary-900 hover-underline p-2">
							<a className="nav-link" href="#services">Services</a>
						</li>
						<li className="text-secondary-300 block hover:text-secondary-900 hover-underline p-2">
							<a className="nav-link" href="#contact">Contact</a>
						</li>
					</div>
					<div className="md:hidden">
						<button
							className="text-secondary-300 hover:text-black"
							id="menu-btn"
						>
							<GiHamburgerMenu />
						</button>
					</div>
				</div>
				<div id="mobile-menu" className="md:hidden mt-8 hidden">
					
				</div>
			</nav>

			<section id="home" className="h-[calc(100vh-74px)] overflow-auto bg-fixed flex items-center bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.1)),url('./../img/1.png')] bg-center bg-cover bg-no-repeat">
				<div className="md:w-1/2 text-center text-white p-8">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">
						Work with the best talent you can find in CodeLance
					</h1>
					<p className="md:text-xl text-lg mb-6">
						The easy, affordable way to find the right experts for your
						business.
					</p>
					<p className="md:text-xl text-lg mb-6">
						The talent you need. The flexibility and location you want.
					</p>
					<Link to="/auth">
						<button className="btn btn--primary mr-4">
							Find flexible jobs
						</button>
					</Link>
<<<<<<< HEAD
					<a href="/auth">
=======
					<Link to="/auth">
>>>>>>> 7877bfe840695eceb0f64c689c6a17c4264bb70e
						<button className="btn btn--primary">Hire Talent</button>
					</Link>
				</div>
			</section>

			{/* about us */}
			<section id="about" className="container max-auto mt-24">
        <div className="text-slate-700 mb-4 flex items-center justify-center">
          <img
            className="w-7 h-7 mr-2 object-cover object-center"
            src="/img/about.png"
            alt="Services"
          />
          <span>What we do</span>
				</div>
				<h2 className="text-4xl text-center font-bold mb-5">About Us</h2>
				<div className="flex flex-col md:flex-row items-center gap-8 p-4 md:p-0">
					<div className="md:w-1/2 mb-4 md:mb-0 border border-dashed border-black p-2">
						<img src="img/2.png" alt="about us" />
					</div>
					<div className="md:w-1/2 md:ml-4">
						<p className="text-gray-700 mb-4 leading-8">
							Welcome to CodeLance, where we bridge the gap between talented
							freelancers and employers seeking top-notch skills. Our platform
							is designed to streamline the hiring process, making it easy for
							employers to post job listings and find the perfect candidates for
							their projects. Freelancers can create detailed profiles, browse
							job opportunities, and submit proposals, all in one secure and
							user-friendly environment. At CodeLance, we believe in
							fostering a dynamic and supportive freelance community where both
							employers and freelancers can thrive.
						</p>
						<p className="text-gray-700 mb-4 leading-8">
							Our mission is to empower freelancers and employers alike by
							providing a reliable and efficient platform that caters to their
							unique needs. We prioritize secure transactions, clear
							communication, and a hassle-free experience. Whether you are an
							employer looking to bring your project to life with the right
							talent or a freelancer seeking exciting opportunities,
							CodeLance is here to support you every step of the way. Join us
							today and discover how we can help you achieve your professional
							goals.
						</p>
					</div>
				</div>
			</section>

			<section id="services">
				<div className="container max-auto mt-24">
					<div className="text-slate-700 mb-4 flex items-center justify-center">
						<img
							className="w-7 h-7 mr-2 object-cover object-center"
							src="/img/services.png"
							alt="Services"
						/>
						<span>How We Help</span>
					</div>
					<h2 className="text-4xl text-center font-bold mb-5">Services</h2>
					<div className="flex flex-wrap items-center">
						<div className="w-full lg:w-7/12 lg:pr-0 mb-8 lg:mb-0">
							<div className="tab-content" id="myTabContent">
								<div
									className={`tab-pane ${
										activeTab === "spa" ? "block" : "hidden"
									}`}
									id="spa"
									role="tabpanel"
								>
									<img src="./img/time.png" alt="Service 1" />
								</div>
								<div
									className={`tab-pane ${
										activeTab === "restaurant" ? "block" : "hidden"
									}`}
									id="restaurant"
									role="tabpanel"
								>
									<img src="./img/cost.png" alt="Service 2" />
								</div>
								<div
									className={`tab-pane ${
										activeTab === "swimming" ? "block" : "hidden"
									}`}
									id="swimming"
									role="tabpanel"
								>
									<img src="./img/support.png" alt="Service 3" />
								</div>
								<div
									className={`tab-pane ${
										activeTab === "conference" ? "block" : "hidden"
									}`}
									id="conference"
									role="tabpanel"
								>
									<img src="./img/service6.webp" alt="Service 4" />
								</div>
							</div>
						</div>
						<div className="w-full lg:w-5/12 relative">
							<div>
								<ul className="nav flex flex-col space-y-11">
									<li className="relative left-[-2rem] z-0">
										<a
											className={`flex items-center ${
												activeTab === "spa" ? "text-primary-700" : ""
											}`}
											href="#spa"
											onClick={(e) => {
												e.preventDefault();
												setActiveTab("spa");
											}}
										>
											<span
												className={`w-20 h-20 flex items-center justify-center hover:bg-primary-700 ${
													activeTab === "spa"
														? "bg-primary-700 text-white shadow-md"
														: "bg-slate-500"
												} text-center rounded-full transition-all duration-300 ease-in-out`}
											>
												<img
													className="w-10 h-10"
													src="./img/time.webp"
													alt="Spa Icon"
												/>
											</span>
											<div className="pl-6">
												<h5 className="text-xl md:text-2xl font-bold mb-2">
													Save time
												</h5>
												<p className="text-gray-700">
													Get matched to the right candidate thanks to our
													powerful AI.
												</p>
											</div>
										</a>
									</li>
									<li className="relative left-[-4rem] z-0">
										<a
											className={`flex items-center ${
												activeTab === "restaurant" ? "text-primary-700" : ""
											}`}
											href="#restaurant"
											onClick={(e) => {
												e.preventDefault();
												setActiveTab("restaurant");
											}}
										>
											<span
												className={`w-20 h-20 flex items-center justify-center hover:bg-primary-700 ${
													activeTab === "restaurant"
														? "bg-primary-700 text-white shadow-md"
														: "bg-slate-500"
												} text-center rounded-full transition-all duration-300 ease-in-out`}
											>
												<img
													className="w-10 h-10"
													src="./img/cost.webp"
													alt="Restaurant Icon"
												/>
											</span>
											<div className="pl-6">
												<h5 className="text-xl md:text-2xl font-bold mb-2">
													Cost effective
												</h5>
												<p className="text-gray-700">
													Fixed fee to hire as long as needed. No commissions,
													ever.
												</p>
											</div>
										</a>
									</li>
									<li className="relative left-[-6rem] z-0">
										<a
											className={`flex items-center ${
												activeTab === "swimming" ? "text-primary-700" : ""
											}`}
											href="#swimming"
											onClick={(e) => {
												e.preventDefault();
												setActiveTab("swimming");
											}}
										>
											<span
												className={`w-20 h-20 flex items-center justify-center hover:bg-primary-700 ${
													activeTab === "swimming"
														? "bg-primary-700 text-white shadow-md"
														: "bg-slate-500"
												} text-center rounded-full transition-all duration-300 ease-in-out`}
											>
												<img
													className="w-10 h-10"
													src="./img/support.webp"
													alt="Swimming Icon"
												/>
											</span>
											<div className="pl-6">
												<h5 className="text-xl md:text-2xl font-bold mb-2">
													Great customer support
												</h5>
												<p className="text-gray-700">
													Personalized boutique service. Check out our 5-star
													reviews.
												</p>
											</div>
										</a>
									</li>
									<li className="relative left-[-8rem] z-0">
										<a
											className={`flex items-center ${
												activeTab === "conference" ? "text-primary-700" : ""
											}`}
											href="#conference"
											onClick={(e) => {
												e.preventDefault();
												setActiveTab("conference");
											}}
										>
											<span
												className={`w-20 h-20 flex items-center justify-center hover:bg-primary-700 ${
													activeTab === "conference"
														? "bg-primary-700 text-white shadow-md"
														: "bg-slate-500"
												} text-center rounded-full transition-all duration-300 ease-in-out`}
											>
												<img
													className="w-10 h-10"
													src="./img/concierge.webp"
													alt="Conference Icon"
												/>
											</span>
											<div className="pl-6">
												<h5 className="text-xl md:text-2xl font-bold mb-2">
													Concierge service available
												</h5>
												<p className="text-gray-700">
													Short on time? We&apos;ve got you covered for all your
													hiring needs.
												</p>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact us */}
			<section id="contact" className="container max-auto mt-24">
				<div className="container mx-auto text-center">
        <div className="text-slate-700 mb-4 flex items-center justify-center">
						<img
							className="w-7 h-7 mr-2 object-cover object-center"
							src="/img/contact.png"
							alt="Services"
						/>
						<span>How we Care</span>
					</div>
						
					<h2 className="text-4xl text-center font-bold mb-5">Contact Us</h2>
					<Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
						Whether it&apos;s a question about our services, a request for
						technical assistance, or suggestions for improvement, our team is
						eager to hear from you.
					</Typography>
					<div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
						<div>
							<h1 className="text-left font-extrabold">Let&apos;s Talk</h1>
							<p className="text-lg text-gray-400 text-left mt-3">
								Have some big idea or brand to develop and need help? Then reach
								out we&apos;d love to hear about your project and provide help.
							</p>
							<div className="mt-12">
								<ul className="mt-3">
									<li className="flex items-center">
										<div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20px"
												height="20px"
												fill="#007bff"
												viewBox="0 0 479.058 479.058"
											>
												<path
													d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
													data-original="#000000"
												/>
											</svg>
										</div>
										<a
											href="#"
											className="text-[#007bff] text-sm ml-3"
										>
											<small className="block">Mail</small>
											<strong>info@AbiasCode.ca</strong>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<form className="mt-8 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  First Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="First Name"
                  name="first-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Last Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Last Name"
                  name="last-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Email
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="name@email.com"
                name="email"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Message"
                name="message"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <Button className="w-full bg-primary-900 text-secondary-200 font-bold text-xl">
              Send message
            </Button>
						</form>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="container max-auto mt-24 bg-gray-200 relative w-full">
				<div className="mx-auto w-full max-w-7xl px-8">
					<div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
						<Typography variant="h5" className="mb-6 font-bold">
							CodeLance
						</Typography>
						<div className="grid grid-cols-3 justify-between gap-4">
							{LINKS.map(({ title, items }) => (
								<ul key={title}>
									<Typography
										variant="small"
										color="blue-gray"
										className="mb-3 font-medium opacity-40"
									>
										{title}
									</Typography>
									{items.map((link) => (
										<li key={link}>
											<Typography
												as="a"
												href="#"
												color="gray"
												className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
											>
												{link}
											</Typography>
										</li>
									))}
								</ul>
							))}
						</div>
					</div>
					<div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
						<Typography
							variant="small"
							className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
						>
							&copy; {currentYear} 
							<a href="https://material-tailwind.com/"> Abbas Vaziri</a>. All
							Rights Reserved.
						</Typography>
						<div className="flex gap-4 text-blue-gray-900 sm:justify-center">
							<Typography
								as="a"
								href="#"
								className="opacity-80 transition-opacity hover:opacity-100"
							>
								<svg
									className="h-5 w-5"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
										clipRule="evenodd"
									/>
								</svg>
							</Typography>
							<Typography
								as="a"
								href="#"
								className="opacity-80 transition-opacity hover:opacity-100"
							>
								<svg
									className="h-5 w-5"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
										clipRule="evenodd"
									/>
								</svg>
							</Typography>
							<Typography
								as="a"
								href="#"
								className="opacity-80 transition-opacity hover:opacity-100"
							>
								<svg
									className="h-5 w-5"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
								</svg>
							</Typography>
							<Typography
								as="a"
								href="#"
								className="opacity-80 transition-opacity hover:opacity-100"
							>
								<svg
									className="h-5 w-5"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
										clipRule="evenodd"
									/>
								</svg>
							</Typography>
							<Typography
								as="a"
								href="#"
								className="opacity-80 transition-opacity hover:opacity-100"
							>
								<svg
									className="h-5 w-5"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
										clipRule="evenodd"
									/>
								</svg>
							</Typography>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Home;
