import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfigService } from './services/config.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appName: string = 'book-finder app';
  bookEnquiryForm: FormGroup;
  title: FormControl;
  author: FormControl;
  publisher: FormControl;

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

  isAdvanced: boolean = false;
  advancedSearchToggle() {
    this.isAdvanced = !this.isAdvanced;
  }

  books: any = [];
  inputTitle: string;
  showResult: boolean = false;
  @ViewChild('inputTitleSelector') inputTitleSelector;
  searchQuery(formValues): boolean {
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
      // console.log(this.inputTitle);
      this.showResult = true;
      this.inputTitleSelector.nativeElement.focus();
    }
  }

  faSearch = faSearch;
}
