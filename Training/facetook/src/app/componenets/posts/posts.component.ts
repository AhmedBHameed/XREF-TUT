import { Component, OnInit } from '@angular/core';
// Services
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  obj: any = {
    category: '',
  };

  constructor(private http: HttpService) { }

  ngOnInit() {
    
  }
  readFromFile(e: any) {
    this.obj.image = e.target.files[0];
  }

  send() {

    this.http.makeRequest('graphql', 'Post', this.obj);


    // this.http.binaryRequest(this.obj, {image: this.obj.image}).subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // )
  }

}
