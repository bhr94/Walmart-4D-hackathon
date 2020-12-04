import spark from "../assets/images/spark.svg"
import play from "../assets/images/googleplay.svg"
import app from "../assets/images/appstore.svg"

function DownloadApp(props) {
  return (
    <section className="download-app">
      <img className="download-app__spark" src={spark} alt="spark" />
      {props.children}
      <article className="download-app__main">
        <h3 className="download-app__awesome">
          Awesome! You've unlocked an exclusive rollback deal.
        </h3>
        <p className="download-app__added">
          The deal has been added to{" "}
          <u>å
            <strong>My Roll Backs</strong>
          </u>
        </p>
        <p className="download-app__twice">
          Want twice the deals?{" "}
          <strong>Shop Walmart grocery on our App!</strong>
        </p>
        <div className="download-app__apps">
          <img className="download-app__link" src={app} alt="App store" />
          <img className="download-app__link" src={play} alt="Google Play" />
        </div>
      </article>
    </section>
  )
}

export default DownloadApp
