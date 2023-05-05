import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {
  websiteForm:FormGroup
  constructor(private router: Router,
    public formBuilder: FormBuilder) 
    {
      this.websiteForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        url: ['', [Validators.required]],
      })
     }

  ngOnInit() {
  }
  login(){
    console.log("Hello")
  }

}
