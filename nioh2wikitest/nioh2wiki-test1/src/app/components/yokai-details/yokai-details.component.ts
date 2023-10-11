import { ActivatedRoute } from '@angular/router';
import { YokaiService } from './../../services/yokai.service';
import { Yokai } from 'src/app/common/yokai';
import { Component, OnInit, Inject } from '@angular/core';
import { Message } from 'src/app/common/message';
import { MsgBoardValidator } from 'src/app/msg-board-validator';

//okta
import { OktaAuth } from '@okta/okta-auth-js';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-yokai-details',
  templateUrl: './yokai-details.component.html',
  styleUrls: ['./yokai-details.component.css']
})
export class YokaiDetailsComponent implements OnInit {

  yokai!: Yokai;


  messages: Message[] = [];

  storage: Storage = sessionStorage;

  // okta
  isAuthenticated: boolean = false;
  userFullName!: string ;

  msgForm!: FormGroup;

  constructor(private yokaiService: YokaiService,
              private route: ActivatedRoute,
              private oktaAuthService: OktaAuthStateService,
              @Inject(OKTA_AUTH) private oktaAuth: OktaAuth){ 

                let messageData = JSON.parse(this.storage.getItem('message')!);

                if (messageData !=null) {
                  this.messages = messageData;

                  this.updateMessage();
                }
              }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleYokaiDetails();
    });

    // Subscribe to authentication state changes
    this.oktaAuthService.authState$.subscribe(
      (result) => {
        this.isAuthenticated = result.isAuthenticated!;
        this.getUserDetails();
      }
    );

    this.msgForm = new FormGroup({
      message: new FormControl('', [Validators.required, Validators.minLength(1), MsgBoardValidator.whitespace])
    });
  }

  handleYokaiDetails() {

    // get the id param string. convert to number
    const theYokaiId: number = +this.route.snapshot.paramMap.get('id')!;

    this.yokaiService.getYokai(theYokaiId).subscribe(
      data => {
        this.yokai = data;
      }
    )
  }

  updateMessage() {
    this.storage.setItem('message', JSON.stringify(this.messages));
  }

  addMessage(form: FormGroup): void {

    console.log('Name', this.userFullName);
    console.log('Message', form.value.message);

    form.markAsDirty();

    if ( !form.value.message.trim() ) {
      console.log(`this is not valid`);
      return;
    }

    const message = new Message(this.userFullName, form.value.message);

    this.messages.push(message);

    this.updateMessage();

    // clear
    this.msgForm.reset();
    

  }


  // 與okta 有關 抓出用戶名稱自動帶入至表單 
  getUserDetails() {
    if (this.isAuthenticated) {

      // Fetc the logged in user details (user's claims)
      //
      // user full name is exposed as a property name
      this.oktaAuth.getUser().then(
        (res) => {
          this.userFullName = res.name as string;
          console.log(this.userFullName);
        });
    }
  }

}
