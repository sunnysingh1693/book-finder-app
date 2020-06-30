import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfigService } from './services/config.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appName = 'book-finder app';
  bookEnquiryForm: FormGroup;
  title: FormControl;
  author: FormControl;
  publisher: FormControl;
  books: any = [];
  inputTitle: string;
  showResult: boolean = false;
  isAdvanced: boolean = false;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.title = new FormControl('', [Validators.required]);
    this.author = new FormControl('',);
    this.publisher = new FormControl('',);

    this.bookEnquiryForm = new FormGroup({
      title: this.title,
      author: this.author,
      publisher: this.publisher
    });

    // let obj = {title: 'harry potter', author: 'rowling', publisher: 'pottermore'}
    // this.searchQuery(obj);
  }

  advancedSearchToggle() {
    this.isAdvanced = !this.isAdvanced;
  }

  searchQuery(formValues) {
    if (this.title.value.trim().length === 0) {
      alert('Can not submit whitespaces.\nTry again!!');
      this.title.setValue('');
      return false;
    } else {
      this.configService.getConfig(formValues).subscribe(
        (apiData) => {
          this.books = apiData.items;
          console.log(this.books);
        }
      );
      this.inputTitle = formValues.title;
      console.log(this.inputTitle);
      this.showResult = true;
      document.getElementById('inputTitle').focus();
    }
  }

  faSearch = faSearch;
}
