export default function ContactPage() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      {/* Ukryty input z nazwą formularza */}
      <input type="hidden" name="form-name" value="contact" />

      {/* Pole honeypot (antyspam) */}
      <p style={{ display: "none" }}>
        <label>Nie wypełniaj: <input name="bot-field" /></label>
      </p>

      <p>
        <label>Imię: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Email: <input type="email" name="email" /></label>
      </p>

      <button type="submit">Wyślij</button>
    </form>
  );
}
