import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || form.message.length < 10) {
      alert("Please fill all fields correctly.");
      return;
    }
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="col-md-6 mx-auto">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <textarea
              placeholder="Message"
              className="form-control"
              rows="4"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
