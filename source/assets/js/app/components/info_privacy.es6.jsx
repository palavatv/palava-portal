
class InfoPrivacy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      language: "de",
    }
  }

  switchTo(language) {
    this.setState({
      language
    })
  }

  englishVersion() {
    return <main id="privacy">
      <h1>Privacy Policy</h1>

      <p className="switch-language">
        This is a translation of our privacy policy into English.<br/>
        Please click the following link to view the original German version:<br/>
        <a href="/info/privacy" onClick={(e) => {e.preventDefault(); this.switchTo("de")}}>Zur deutschen Version wechseln</a>
      </p>

      <p>
        The protection of your personal data is of particular concern to us. In this privacy
        policy we inform you about the data processing within the scope of our website. You
        are invited to contact our current board for data protection inquieries:
      </p>

      <p>
        Marius Melzer, Jan Lelis, and Alexandra Weiß<br />
        contact@palava.tv
      </p>

      <p>
        Additional contact data can be found in our imprint. The responsible authority is the
        Saxon data protection officer.
      </p>

      <h2>Collection and processing of data</h2>

      <p>
        On palava.tv it is possible to form a mutual group change by entering
        the same conference name on the start page, or accessing the group directly by URL.
        In order be able to provide the service, the following data of every participant is
        sent via our server to all other participants of the same group chat:
      </p>

      <ul>
        <li>all IP addresses of the user (including local and network-internal ones)</li>
        <li>user agent (browser, browser version, browser engine)</li>
        <li>information about supported audio- and video codecs of the browser</li>
      </ul>

      <p>
        There is no long-term (beyond time of usage) data retention.
        Furthermore, we do not use cookies and do not record personal data (e.g. ip addresses) in our server logs.
      </p>

      <h2>Data retention by our server provider</h2>

      <p>
         Our server is provided by <a href="https://www.simplyroot.de/">simplyroot. (LiWiNeA GmbH)</a>.
         Regarding to information, objection or complaint about data potentially collected by simplyroot. (LiWiNeA GmbH),
         please contact them directly (<a href="https://www.simplyroot.de/de/ansprechpartner/">contact page</a>).
      </p>

      <h2>Contact to us</h2>

      <p>
        If you contact us via e-mail, we will only use your email address to communicate with you.
        Other uses are precluded.
      </p>
    </main>
  }

  germanVersion() {
    return <main id="privacy">
      <h1>Datenschutzerklärung</h1>

      <p className="switch-language">
        <a href="/info/privacy" onClick={(e) => {e.preventDefault(); this.switchTo("en")}}>Switch to English version</a>
      </p>

      <p>
        Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. In diesen
        Datenschutzinformationen informieren wir Sie über die Datenverarbeitung im Rahmen
        unserer Website. Sie können sich mit Datenschutzanliegen
        gern an unseren aktuellen Vorstand wenden:
      </p>

      <p>
        Marius Melzer, Jan Lelis und Alexandra Weiß<br />
        contact@palava.tv
      </p>

      <p>
        Weiterführende Kontaktdaten finden Sie in unserem Impressum. Die zuständige
        Datenschutzbehörde ist der sächsische Datenschutzbeauftragte.
      </p>

      <h2>Erhebung und Verarbeitung von Daten</h2>

      <p>
        Auf palava.tv ist es möglich einen gemeinsamen Gruppenchat zu bilden, indem
        man auf der auf der Startseite den gleichen Konferenznamen angibt,
        beziehungsweise direkt per URL die jeweilige Gruppe zugreift. Die Bereitstellung
        des Dienstes erfordert aus technischen Gründen, die Weitergabe von
        folgenden Daten eines jeder_n Teilnehmer_innen über unseren Server an
        alle anderen Teilnehmer_innen des gleichen Gruppenchats:
      </p>

      <ul>
        <li>alle IP-Adressen des_der Nutzer_in (auch lokale und netzwerkinterne)</li>
        <li>User Agent (Browser, Browserversion, Browserengine)</li>
        <li>Informationen über unterstützte Audio- und Videocodecs des Browsers</li>
      </ul>

      <p>
        Eine längerfristige Speicherung, die über die Nutzungsdauer des Dienstes hinaus
        geht, erfolgt nicht. Weiterhin verwenden wir keine Cookies und protokollieren
        keine personenbezogenen Daten (z.b. IP Adressen) in unseren Serverlogs.
      </p>

      <h2>Datenspeicherung durch den Serverbetreiber</h2>

      <p>
        Unser Server wird von <a href="https://www.simplyroot.de/">SimplyRoot</a> bereitgestellt.
         Zwecks Auskunft, Widerspruch oder Beschwerde über potenziell von SimplyRoot
         erhobene Daten, wenden Sie sich bitte direkt an SimplyRoot
         (<a href="https://www.simplyroot.de/de/ansprechpartner/">Kontaktseite</a>).
      </p>

      <h2>Kontakt zu uns</h2>

      <p>
        Wenn Sie per E-Mail Kontakt mit uns aufnehmen, so verwenden wir Ihre E-Mail-Adresse
        nur, um mit Ihnen in Kontakt zu treten. Andere Verwendungen
        schließen wir aus.
      </p>
    </main>
  }

  render() {
    return <div className="info">
      <InfoHeader/>
      { this.state.language === "en" ? this.englishVersion() : this.germanVersion() }
      <div className="plv-mobile-footer">
        <Footer/>
      </div>
      <GitHubRibbon/>
    </div>
  }
}
