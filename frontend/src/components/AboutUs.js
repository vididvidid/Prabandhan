import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          About Us
        </h1>
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-lg text-gray-600">
              We are a team of passionate developers and innovators, committed
              to simplifying the way you manage projects. Our application is
              designed with flexibility, scalability, and ease of use in mind,
              catering to the needs of small teams as well as large
              organizations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-gray-600">
              At <span className="font-semibold">[Your Application Name]</span>,
              we focus on:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600 mt-2 space-y-2">
              <li>
                <strong>Streamlined Workflow Management</strong>: Helping you
                track progress, set priorities, and meet deadlines effortlessly.
              </li>
              <li>
                <strong>Real-Time Collaboration</strong>: Enabling teams to work
                together, share updates, and resolve issues on the go.
              </li>
              <li>
                <strong>Customizable Features</strong>: Allowing you to tailor
                the platform to match your unique project management style.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600">
              With a modern, intuitive interface and powerful features built on
              the cutting-edge MERN stack, our application is fast, reliable,
              and user-centric. We understand the challenges teams face and are
              here to provide a solution that bridges the gap between vision and
              execution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-lg text-gray-600">
              Developed as a collaborative effort by a group of BTech Computer
              Science students,{" "}
              <span className="font-semibold">[Your Application Name]</span> is
              not just a project but a labor of passion and teamwork. Using
              agile methodologies, we built this platform to address the
              real-world needs of project management, just like we experienced
              in our own journey.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-lg text-gray-600 mt-2 space-y-2">
              <li>
                <strong>Innovation</strong>: Constantly improving to bring the
                best solutions to our users.
              </li>
              <li>
                <strong>Transparency</strong>: Ensuring clarity and openness in
                everything we do.
              </li>
              <li>
                <strong>Collaboration</strong>: Putting teamwork at the core of
                our platform and operations.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
