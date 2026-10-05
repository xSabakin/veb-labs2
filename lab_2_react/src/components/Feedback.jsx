function Feedback() {
  return (
    <section>
      <h2>Зворотній зв'язок</h2>
      <form action="#" method="post">
        <div>
          <p>Телефон: +380673766879</p>
          <p>
            <a href="https://github.com/xSabakin" target="_blank" rel="noreferrer">
              Мій GitHub
            </a>
          </p>
        </div>
        <div>
          <label htmlFor="email">Ваш Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="vasyl.vizichkanych.kb.2025@lpnu.ua"
            required
          />
        </div>
        <button type="submit">Надіслати</button>
      </form>
    </section>
  );
}

export default Feedback;