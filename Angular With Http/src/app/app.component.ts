import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Post } from "./post.model";
import { PostsService } from "./posts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  postAdded = new Subject<Post>();
  isFetching = false;
  error = null;
  @ViewChild("postForm") form;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.onFetchPosts();
    this.postAdded.subscribe(() => {
      this.onFetchPosts();
    });
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData).subscribe((response) => {
      this.postAdded.next(postData);
      console.log(response);
    });
    this.form.reset();
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPost().subscribe(
      (responseData) => {
        this.loadedPosts = [...responseData];
        this.isFetching = false;
      },
      (error) => {
        this.error = error.error.error;
        this.isFetching = false;
      }
    );
  }

  onClearPosts() {
    this.postsService.clearPosts().subscribe(() => {
      this.loadedPosts = [];
    });
    this.postAdded.next();
  }
}
