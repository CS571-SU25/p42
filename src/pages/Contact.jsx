export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            placeholder="your@email.com" 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            rows="5" 
            placeholder="Your message here..."
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}