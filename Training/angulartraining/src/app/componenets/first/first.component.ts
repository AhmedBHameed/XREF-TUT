import { Component, OnInit } from '@angular/core';

// Service
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  respond: any;
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.makeRequest('/posts/1', 'Get', null, null).subscribe(
      (res: any) => {
        this.respond = JSON.stringify(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

}
