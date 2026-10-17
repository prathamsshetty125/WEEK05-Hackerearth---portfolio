import { useState } from "react";

function Contact({ profile }) {
  const [form, setForm] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Message from " + form.name);
    const body = encodeURIComponent(form.message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: "", message: "" });
  };

  return (
    <section id="contact" className="section">
      <div className="wrap narrow">
        <h2>Contact</h2>
        <p className="muted">
          Write to me at <a href={"mailto:" + profile.email}>{profile.email}</a> or use the form.
        </p>

        <form onSubmit={handleSubmit} className="form">
          <label>
            Your name
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />
          </label>
          <button className="btn" type="submit">Send message</button>
          {sent && <p className="ok">Your email app should open with the message ready to send.</p>}
        </form>

        <p className="links-row">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
