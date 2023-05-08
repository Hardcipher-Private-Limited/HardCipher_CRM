import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController,LoadingController } from '@ionic/angular';
import { BackendService } from '../Backend/backend.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {
  websiteForm:FormGroup;
  blogsForm:FormGroup;
  contactForm:FormGroup;
  careerForm:FormGroup;
  websiteFlag:boolean=true;
  blogsFlag:boolean=false;
  contactFlag:boolean=false;
  careerFlag:boolean=false;

  constructor(private router: Router,
    private bs: BackendService,
    public formBuilder: FormBuilder) {
      this.websiteForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        url: ['', [Validators.required]],
      }
      )
      this.blogsForm = this.formBuilder.group({
        meta_deta_description: ['', [Validators.required]],
        title: ['', [Validators.required]],
        url: ['', [Validators.required]],
        description: ['', [Validators.required]],
        image:['', [Validators.required]],
      })
      this.contactForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        message: ['', [Validators.required]],
        subject: ['', [Validators.required]],
        status: ['', [Validators.required]],
      })
      this.careerForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        message: ['', [Validators.required]],
        resume: ['', [Validators.required]],
      })
      this.start()
     }
     start(){
      this.websiteFlag=true;
     }
     WebsiteInfo(){
       console.log("Wesite Info",this.websiteForm.value)
       this.websiteFlag=false;
       this.blogsFlag=true;
     }
     BlogsInfo(){
       console.log("blogs Info",this.blogsForm.value)
       this.blogsFlag=false;
       this.contactFlag=true;
     }
     ContactInfo(){
       console.log("cantact us Info",this.contactForm.value)
       this.contactFlag=false;
       this.careerFlag=true;
     }
     CareerInfo(){
       console.log("career Info",this.careerForm.value)
     }

  ngOnInit() {
  }

}
