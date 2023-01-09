import { FaqService } from '../services/faq.service';
import { Router, ActivatedRoute } from '@angular/router';


import { Faq } from '../services/faq';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-faq',
  templateUrl: './create-faq.component.html',
  styleUrls: ['./create-faq.component.css']
})
export class CreateFaqComponent implements OnInit {
  

  faq: Faq = new Faq();
  isUpdate = false;
  formData = new FormData();
  file: File;
  submitted = false;
  

  constructor(
    private faqService: FaqService,
    private route: ActivatedRoute,
    private router: Router,
  ) { 
    console.log("I am here");

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("I am here faq");
    if (id) {
      this.isUpdate = true;
      this.getFaq(id);
    }
  }

  getFaq(id): void {
    this.faqService.getFaq(id).subscribe(
      data => {
        console.log(data);
        this.faq = data;
      },
      err => {
        console.log(err);
      }
    );

  }
 

  newFaq(): void {
    this.submitted = false;
    this.faq = new Faq();
  }

save() {    
  console.log(this.faq);
 
  this.faqService.createFaq(this.faq).subscribe(
    data => {
      console.log(data);
      // this.isSuccessful = true;
      // this.isSignUpFailed = false;
      this.newFaq();
      this.router.navigate(['/faq']);
    },
    err => {
      // this.errorMessage = err.error.message;
      // this.isSignUpFailed = true;
    }
  );
}

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.updateFaq();
    } else {
      this.submitted = true;
      this.save();
    }
    
  }

  updateFaq(): void {
    
    // Put faq form in FormData ///
    for (let key in this.faq) {
      console.log("Insie Iterator")
      this.formData.append(key, this.faq[key]);
    }
    if(this.file) {
      console.log("I am here");
      // End of Request ///
      this.faqService.updateUploadFaq(this.faq.faq_id, this.formData).subscribe(
        data => {
          console.log(data);
          // this.isSuccessful = true;
          // this.isSignUpFailed = false;
          this.router.navigate(['/faq']);
        },
        err => {
          // this.errorMessage = err.error.message;
          // this.isSignUpFailed = true;
        }
      );
    } else {
      // End of Request ///
      this.faqService.updateFaq(this.faq.faq_id, this.faq).subscribe(
        data => {
          console.log(data);
          // this.isSuccessful = true;
          // this.isSignUpFailed = false;
          this.router.navigate(['/faq']);
        },
        err => {
          // this.errorMessage = err.error.message;
          // this.isSignUpFailed = true;
        }
      );
    }
    
  }
}
