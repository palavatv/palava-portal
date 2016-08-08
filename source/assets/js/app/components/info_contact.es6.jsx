const InfoContact = (props) => {
  return (
    <div className="container">
      <div id="contact">
        <h2>Internet</h2>
        <p><a href="mailto:contact@palava.tv">contact@palava.tv</a> | <a href="https://twitter.com/palavatv">@palavatv</a></p>

        <h2>Address</h2>

        <div className="vcard">
          <div className="fn org">palava e.V.</div>
          <div className="street-address">Thomas-Müntzer-Platz 5</div>
          <div className="postal-code float-left">01307</div><span className="float-left">&nbsp;</span><div className="locality">Dresden</div>
          <div className="country-name">Germany</div>
        </div>

        <h2>Representatives</h2>
        <p>Marius Melzer / Jan Lelis / Alexandra Weiss</p>

        <h2>Registration</h2>
        <p>Amtsgericht Dresden / VR 5967</p>
      </div>

      <Footer/>
    </div>
  )
}
