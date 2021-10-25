import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor(private http: HttpClient) {}

  createAndStorePost(postData: Post) {
    return this.http.post<Post>(
      "https://angular-with-http-default-rtdb.firebaseio.com/posts.json",
      postData,
      {
        // observe: "body",
        observe: "response",
        responseType: "json",
      }
    );
  }

  fetchPost() {
    const customHeaders = new HttpHeaders({
      Header1: "Header 1",
      Header2: "Header 2",
      Header3: "Header 3",
    });

    const customParams = new HttpParams()
      .set("print", "pretty")
      .set("write", "hello");

    return this.http
      .get<{ [key: string]: Post }>(
        "https://angular-with-http-default-rtdb.firebaseio.com/posts.json",
        {
          headers: customHeaders,
          params: customParams,
        }
      )
      .pipe(
        map((responseData: { [key: string]: Post }) => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }

  clearPosts() {
    return this.http.delete(
      "https://angular-with-http-default-rtdb.firebaseio.com/posts.json"
    );
  }
}
