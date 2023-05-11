import React from "react";

const contactUs = (props) => {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <h3>Contacez-nous ?</h3>
        <div className="col-lg-12">
          <form
            action="forms/contact.php"
            method="post"
            role="form"
            className="php-email-form"
          >
            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Votre Nom"
                  required=""
                />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Votre Email"
                  required=""
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Sujet"
                required=""
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows={5}
                placeholder="Message"
                required=""
                defaultValue={""}
              />
            </div>
            <div className="my-3">
              <div className="loading">chargement</div>
              <div className="error-message" />
              <div className="sent-message">
                Votre message a été envoyé. Merci!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Envoyer</button>
            </div>
          </form>
        </div>
        {/* End Contact Form */}
      </div>
    </section>
  );
};

export default contactUs;
