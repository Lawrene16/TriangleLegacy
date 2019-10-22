import { Component, OnInit } from "@angular/core";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { EmailComposer } from "@ionic-native/email-composer/ngx";
import { ToastController, MenuController, LoadingController } from "@ionic/angular";
declare var emailjs: any;

@Component({
  selector: "app-contact",
  templateUrl: "./contact.page.html",
  styleUrls: ["./contact.page.scss"]
})
export class ContactPage implements OnInit {
  names = "";
  email = "";
  subject = "";
  message = "";
  phonenumber;

  constructor(
    private callNumber: CallNumber,
    private menuCtrl: MenuController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private emailComposer: EmailComposer
  ) {}

  ngOnInit() {}

  submitform() {
    if (this.names == "") {
      this.presentToast("Name field cannot be left blank");
    } else if (
      this.email == "" ||
      this.email.length < 3 ||
      !this.email.includes("@") ||
      !this.email.includes(".")
    ) {
      this.presentToast("Invalid email format");
    } else if (this.subject == "") {
      this.presentToast("Subject field cannot be left blank");
    } else if (this.message == "") {
      this.presentToast("Message field cannot be left blank");
    } else {
      this.loadingCtrl.create({message: "Please wait", duration: 3000}).then((res) =>{
        res.present();
   
        setTimeout(() => {
          
        this.presentToast("Your request has been submitted successfully");
        this.names = "";
        this.email = "";
        this.subject = "";
        this.message = "";

        }, 4500);
        // this.sendEmail("lawrenedickson49@gmail.com")
        this.sendEmail("trianglelegacymanager@gmail.com");
        this.sendEmail("trianglelegacy@gmail.com");
      });
   
    }

  }

  sendEmail(to_email) {
    emailjs.send("gmail", "template_6Fqm0iy9", {
      to_email: to_email,
      full_name: this.names,
      from_email: this.email,
      subject: this.subject,
      message: this.message
    });
  }

  callphone(index) {
    switch (index) {
      case 0:
        this.phonenumber = "2028882960";
        break;

      case 1:
        this.phonenumber = "3015239419";
        break;

      case 2:
        this.phonenumber = "7045047472";
        break;

      case 3:
        this.phonenumber = "7035047472";
        break;
    }

    this.callNumber
      .callNumber(this.phonenumber, true)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      color: "dark"
    });
    toast.present();
  }

  callUs() {
    this.callNumber
      .callNumber("18008303324", true)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  openMenu() {
    this.menuCtrl.toggle();
  }
}
