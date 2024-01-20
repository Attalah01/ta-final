import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="h-[100vh]">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white font-Poppins">
            Visit Our Location
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8428896238233!2d112.72303707516066!3d-7.258714992748032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9503d619c43%3A0x411d4cbbe989434!2sSMK%20Negeri%202%20Surabaya!5e0!3m2!1sen!2sid!4v1705627218610!5m2!1sen!2sid"
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Our Address
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                  Jl. Tentara Genie Pelajar No.26, Petemon, Kec. Sawahan, Surabaya, Jawa Timur 60252
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Hours</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    Monday - Friday: 9am - 5pm
                  </p>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">Saturday - Sunday: Closed</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Contact</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">Email: <a href="mailto:support@aodemy.com">support@aodemy.com</a></p>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">Phone: +62 819 1127 1235</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
