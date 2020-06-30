import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() books:any = [];
  @Input() inputTitle: string;

  waitGIF = "https://media1.tenor.com/images/0d165bca21c071893e134ab403dd0d0e/tenor.gif?itemid=3838547";

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
  }
}
