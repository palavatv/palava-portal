const InfoContact = (props) => {
  return <div className="info">
    <InfoHeader/>

    <main id="contact">
      <h1>Contact</h1>
      <p><a href="mailto:contact@palava.tv">contact@palava.tv</a></p>

      <h2>Address</h2>
      <address className="vcard">
        <div className="fn org">palava e. V.</div>
        <div className="street-address">Thomas-Müntzer-Platz 5</div>
        <div>
          <span className="postal-code">01307</span>
          <span className="locality">Dresden</span>
        </div>
        <div className="country-name">Germany</div>
      </address>

      <h2>Registration</h2>
      <p>VR 5967 (Amtsgericht Dresden)</p>

      <h2>Representatives</h2>
      <p>Marius Melzer, Jan Lelis, Alexandra Weiss</p>
    </main>

    <div className="plv-mobile-footer">
      <Footer/>
    </div>
    <GitHubRibbon/>
  </div>
}
