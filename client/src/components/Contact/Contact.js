import React from "react";

const Contact = () => {
  return (
    <section id="contact" class="contact">
      <div class="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          Nous sommes à votre écoute ! Contactez-nous pour signaler des bugs ou
          poser des questions, notre équipe dévouée est là pour vous assister à
          tout moment.
        </p>
      </div>

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4">
          <div class="col-lg-6">
            <div class="row gy-4">
              <div class="col-md-6">
                <div class="info-item" data-aos="fade" data-aos-delay="200">
                  <i class="bi bi-geo-alt"></i>
                  <h3>Adresse</h3>
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                </div>
              </div>

              <div class="col-md-6">
                <div class="info-item" data-aos="fade" data-aos-delay="300">
                  <i class="bi bi-telephone"></i>
                  <h3>Téléphone</h3>
                  <p>+1 5589 55488 55</p>
                  <p>+1 6678 254445 41</p>
                </div>
              </div>

              <div class="col-md-6">
                <div class="info-item" data-aos="fade" data-aos-delay="400">
                  <i class="bi bi-envelope"></i>
                  <h3>Email</h3>
                  <p>niainachristopher4@gmail.com</p>
                  <p>suppor@correctorpro.com</p>
                </div>
              </div>

              <div class="col-md-6">
                <div class="info-item" data-aos="fade" data-aos-delay="500">
                  <i class="bi bi-clock"></i>
                  <h3>Open Support</h3>
                  <p>Monday - Friday</p>
                  <p>9:00AM - 05:00PM</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <form
              action="forms/contact.php"
              method="post"
              class="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="row gy-4">
                <div class="col-md-6">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Nom"
                    required
                  />
                </div>

                <div class="col-md-6 ">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>

                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    placeholder="Sujet"
                    required
                  />
                </div>

                <div class="col-md-12">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div class="col-md-12 text-center">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>

                  <button type="submit">Envoyer</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
