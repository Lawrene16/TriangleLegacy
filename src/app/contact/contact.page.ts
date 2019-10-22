import { Component, OnInit } from "@angular/core";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { EmailComposer } from "@ionic-native/email-composer/ngx";
import { ToastController, MenuController } from '@ionic/angular';

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
    private emailComposer: EmailComposer
  ) {}

  ngOnInit() {}

  submitform() {
    if (this.names == "") {
      this.presentToast("Name field cannot be left blank")
    } else if (
      this.email == "" ||
      this.email.length < 3 ||
      !this.email.includes("@") ||
      !this.email.includes(".")
    ) {
      this.presentToast("Invalid email format")
    } else if (this.subject == "") {
      this.presentToast("Subject field cannot be left blank");
    } else if (this.message == "") {
      this.presentToast("Message field cannot be left blank")
    } else {
      this.emailComposer.isAvailable().then((available: boolean) => {
        if (available) {
          let email = {
            to: ["max@mustermann.de", "lawrenedickson49@gmail.com"],
            cc: "erika@mustermann.de",
            // bcc: ["john@doe.com", "jane@doe.com"],
            // attachments: [
            //   "file://img/logo.png",
            //   "res://icon.png",
            //   "base64:icon.png//iVBORw0KGgoAAAANSUhEUg...",
            //   "file://README.pdf"
            // ],
            subject: "Triangle Legacy Help",
            body: "Names: " + this.names + "/n" +
                  "Email: " + this.email + "/n" +
                  "Subject: " + this.subject + "/n" +
                  "Message: " + this.message + "/n",
            isHtml: true
          };

          this.emailComposer.open(email);
        }
      });
    }
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
      color: 'dark'
    });
    toast.present();
  }

  callUs(){
    this.callNumber.callNumber("18008303324", true).then((res) =>{
       console.log(res)
    }).catch((err) =>{
      console.log(err)
    })
  }


  openMenu(){
    this.menuCtrl.toggle();
  }
}
