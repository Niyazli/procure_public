import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="footer--heading">
        <h3 class="text-white">CONTACT US</h3>
      </div>
      <div class="footer--map">
        <mat-card class="footer--map__wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.7069202661514!2d49.81866511576822!3d40.37102246634141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc6dea586dd%3A0xbd5b3f0dea2f977f!2sProcure!5e0!3m2!1sru!2s!4v1588749839268!5m2!1sru!2s"
            width="100%"
            height="408"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </mat-card>
      </div>
      <div class="footer--cols">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-5 other-app">
              <h3 class="text-white">ABILITIY TO INTEGRATE WITH OTHER APPLICATIONS</h3>
              <div class="grid">
                <figure *ngFor="let item of [].constructor(6)"></figure>
              </div>
            </div>
            <div class="col-xl-3 contact-us">
              <h3 class="text-white">CONTACT US</h3>
              <!--              (+99412) 537-15-58 Qurban Xəlilov 8, Bakı, Azərbaycan office@procure.az-->
              <ul>
                <li>
                  <a href="tel:+994-12-537-15-58">(+99412) 537-15-58</a>
                </li>
                <li>
                  <a target="_blank" href="https://goo.gl/maps/UwuL848LkMn5fn9J7">Qurban Xəlilov 8, Bakı, Azərbaycan</a>
                </li>
                <li>
                  <a href="mailto:office@procure.az">office@procure.az</a>
                </li>
              </ul>
              <div class="grid">
                <figure *ngFor="let item of [].constructor(4)"></figure>
              </div>
            </div>
            <div class="col-xl-4 contact-form">
              <h3 class="text-white">OR LEAVE YOUR CONTACT FOR CALL</h3>
              <form>
                <mat-form-field color="primary" class="is-white" appearance="legacy">
                  <input type="text" matInput placeholder="Name" required />
                </mat-form-field>
                <mat-form-field color="primary" class="is-white" appearance="legacy">
                  <input type="text" matInput placeholder="Email" required />
                </mat-form-field>
                <mat-form-field color="primary" class="is-white" appearance="legacy">
                  <input type="text" matInput placeholder="Number" required />
                </mat-form-field>
                <button type="submit" mat-raised-button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
