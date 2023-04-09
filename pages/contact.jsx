import { db } from "@/firebase.config";
import { useState, useRef } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";


const Contact = () => {

	const sendContactForm = async ({ email, subject, comment }) => {
		try {
			const ref = collection(db, "contact");
			await addDoc(ref, {
				email,
				subject,
				comment,
				sentAt: Timestamp.now().toDate(),
			});
			return 0;
		} catch (err) {
			console.log(err)
			return -1;
		}
	};

	const [message, setMessage] = useState("");
  const formRef = useRef();
  const submitContact = async (e) => {
    e.preventDefault();
    const res = await sendContactForm({
      email: e.target[0].value,
      subject: e.target[1].value,
      comment: e.target[2].value,
    });
    if (res == 0) {
      setMessage("Thank you for your valuable comment!");
      formRef.current.reset();
    } else {
      setMessage("Something went wrong! Please try again");
    }
  };

	return (
		<main>
		<section className="animate__animated animate__fadeInUp mt-24 mb-2 md:mt-16 px-12">
			<h2 className="text-center text-4xl lg:text-5xl font-bold lg:tracking-tight">
				Contact
			</h2>
			<p className="text-center text-lg mt-8 text-slate-600">
				<span className="font-bold text-blue1">Bumper</span><span className="text-red1">Talk</span> Would love to hear your feedback.</p> 
				<p className=" text-center text-lg text-slate-600" >Also, if you would like to see something that is not on Bumpertalk, please send us an email.
				</p>
		</section>
		<section>
			<div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
				<div className="text-center text-lg m-4 text-blue1 font-semibold">{message}</div>
			<span onClick={() => setMessage("")}>  </span>     
				<form 
				ref={formRef}
				onSubmit={submitContact} 
				className="space-y-8">
          <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input type='email' id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required />
          </div>
          <div>
            <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
            <input type='subject' id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >Send message</button>
      	</form>
  		</div>
		</section>
		</main>
	)
};

export default Contact